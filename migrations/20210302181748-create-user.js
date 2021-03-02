'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        required: true
      },
      password: {
        type: Sequelize.STRING,
        required: true
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      lastname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      nif: {
        type: Sequelize.STRING,
        required: true
      },
      born: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING,
        required: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};