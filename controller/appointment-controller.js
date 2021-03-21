const {Appointment, User, sequelize} = require('../models');
const { Op } = require('sequelize');


const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const WEEK = DAY * 7
const YEAR = DAY * 365.25

const PERIOD = {
  ms: 1,
  s: SECOND,
  m: MINUTE,
  h: HOUR,
  d: DAY,
  w: WEEK,
  y: YEAR
}

const timetoms = (duration) => duration
  .match(/[0-9]+(ms|[smhdwy])/g)
  .reduce(
    (acc, value) => acc += value.replace(/(ms|[smhdwy])/g, '') * PERIOD[value.slice(-1)],
    0,
  )

class AppointmentController{

    // Getting available slots for a dentist

    async getAvailableSlots(dentist) {
        let appointments;
        let now = new Date;
        let end = new Date;
        end.setDate(end.getDate() + 31);
        appointments = await Appointment.findAll({
            where:{
                date:{[Op.gte]: now, [Op.lte]: end},
                dentistId:dentist
            },
            attributes: ['date','duration'],
            order: [
                ['date', 'ASC']
            ]
        });
        let slots = this.getAllSlots();
        let i = 0;
        let j = 0;
        for (let app of appointments) {
            loop:
            for (;i<slots.length;i++) {
                for (;j<slots[i].length;j++) {
                    if(this.clash(slots[i][j],app.date,app.duration)) {
                        slots[i].splice(j,1);
                        j--;
                    } else if (app.date<slots[i][j]) {
                        break loop;
                    }
                }
                if(!slots[i][0]) {
                    slots.splice(i,1);
                    i--;
                }
                j = 0;
            }
        }
        return slots;
    }

    // Get a list of all possible time slots in the next 4 weeks

    getAllSlots() {
        let slots = [[]];
        // Get today's date
        let date = new Date();
        date.setMinutes(0,0,0);
        // Insert remaining day's slots in array
        let weekday = date.toLocaleDateString('en-gb',{weekday:'long'});
        if (weekday != 'Sunday' && weekday != 'Saturday') {
            for (let i = date.getHours()+1; i<14; i++) {
                slots[0].push(new Date(date.setHours(i)));
            }
            if (date.getHours()<14) date.setHours(14);
            date.setMinutes(30);
            for (let i = date.getHours()+1; i<21; i++) {
                slots[0].push(new Date(date.setHours(i)));
            }
        }
        if (slots[0][0]) slots.push([]);
        // Insert all slots in array until 4 weeks in the future
        let pos = slots.length-1;
        for (let count = 0; count<30; count++) {
            date.setDate(date.getDate() + 1);
            date.setMinutes(0);
            let weekday = date.toLocaleDateString('en-gb',{weekday:'long'});
            if (weekday == 'Sunday' || weekday == 'Saturday') continue;
            if (slots.length<pos+1) slots.push([]);
            for (let i = 9; i<14; i++) {
                slots[pos].push(new Date(date.setHours(i)));
            }
            date.setMinutes(30);
            for (let i = 15; i<20; i++) {
                slots[pos].push(new Date(date.setHours(i)));
            }
            pos++;
        }
        return slots;
    }

    // Check if there's a clash between timeslot and appointment

    clash(s,t,d) {
        const sms = s.getTime();
        const tms = t.getTime();
        const dms = timetoms(d);
        if (tms<sms) return (tms+dms>sms);
        else return (sms+3600000>tms);
    }

    // Getting a list of all appointments

    async getAllAppointments(pending){
        if (pending!='true')
        return Appointment.findAll({
            include: [
                {
                    model: User,
                    on: {
                        col1: sequelize.where(sequelize.col("Appointment.userId"), "=", sequelize.col("User.id"))
                    },
                    attributes: ['name','lastname']
                }
            ],
            order: [
                ['date', 'DESC']
            ]
        });
        else
        return Appointment.findAll({
            where:{
                date:{[Op.gte]: new Date}
            },
            include: [
                {
                    model: User,
                    on: {
                        col1: sequelize.where(sequelize.col("Appointment.userId"), "=", sequelize.col("User.id"))
                    },
                    attributes: ['name','lastname']
                }
            ],
            order: [
                ['date', 'ASC']
            ]
        });
    }
    
    // Getting a list of all users appointments
  

    async getAllUserAppointments(id,pending){
        if (pending!='true')
        return Appointment.findAll({
            where:{userId:id},
            order: [
                ['date', 'DESC']
            ]
        });
        else
        return Appointment.findAll({
            where:{
                userId:id,
                date:{[Op.gte]: new Date}
            },
            order: [
                ['date', 'ASC']
            ]
        });
    }
  
    // Getting one appointment data
  
    async getAppointmentData(uid,id){
        
        return Appointment.findOne({where:{userId:uid,id:id}});

    }
  
    // Creating a new Appointment
  
    async create(data){

        return Appointment.create(data);

    }
  
    // Cancelling appointment
  
    async delete(uid,id){

        const appointment = await Appointment.findByPk(id);
        if (appointment.userId == uid) return Appointment.destroy({where:{id}});
        else throw new Error('Appointment belongs to someone else.');
        
    }
  
}

let appointmentController= new AppointmentController();
module.exports = appointmentController;