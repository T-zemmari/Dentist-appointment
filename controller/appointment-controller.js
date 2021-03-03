const {Appointment} = require('../models');


class AppointmentController{

    // Getting a list of all user appointments
  
    async getAllUserAppointments(id){

        return Appointment.findAll({where:{userId:id}});

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