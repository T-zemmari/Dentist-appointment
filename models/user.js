'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Appointment);
    }
  };
  User.init({

    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    admin:DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    nif: DataTypes.STRING,
    born: DataTypes.DATE,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }
  return User;
};