const {Appointment, User, sequelize} = require('../models');
const { Op } = require('sequelize');


class AppointmentController{

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