'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[
      {
        email: "roberto@robertez.com",
        password: "$2b$10$RodsmbWGBrfUFd9taJX5AuY1tTuzj55jCVjIs2xH5WReeua2Aub0q",
        name: "Roberto",
        admin:false,
        lastname: "Robertez",
        address: "Calle falsa 123, 46001 Valencia",
        nif: "01234567-A",
        born: "1985-01-01",
        phone: "+34654321321"
      },
      {
        email: "federico@federiquez.com",
        password: "$2b$10$RodsmbWGBrfUFd9taJX5AuY1tTuzj55jCVjIs2xH5WReeua2Aub0q",
        name: "Federico",
        lastname: "Federiquez",
        admin:true,
        address: "Calle fake 321, 28001 Madrid",
        nif: "76543210-B",
        born: "1990-11-11",
        phone: "+34654321321"
      },
      {
        email: "tarek@tarequez.com",
        password: "$2b$10$RodsmbWGBrfUFd9taJX5AuY1tTuzj55jCVjIs2xH5WReeua2Aub0q",
        name: "Tarek",
        lastname: "Tarequez",
        admin:true,
        address: "Carrer Fals 234, 46002 Valencia",
        nif: "76543210-C",
        born: "1987-10-10",
        phone: "+34654321321"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
