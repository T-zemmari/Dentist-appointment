'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    
    static associate(models) {
      //  association with User
      Appointment.belongsTo(models.User)

    }
  };
  Appointment.init({
    userId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    duration: DataTypes.STRING,
    comment: DataTypes.STRING,
    paid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};