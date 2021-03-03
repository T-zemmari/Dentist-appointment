'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Appointments',[
      {
        userId: 1,
        dentistId: 3,
        date: "2021-04-15 08:30:00",
        comment: "Me duele la muela :(",
        paid: false
      },
      {
        userId: 1,
        dentistId: 2,
        date: "2021-05-10 15:30:00",
        comment: "Operación muelas del juicio",
        paid: false
      },
      {
        userId: 1,
        dentistId: 2,
        date: "2021-01-08 12:15:00",
        comment: "Revisión anual",
        paid: true
      },
      {
        userId: 2,
        dentistId: 1,
        date: "2020-05-18 13:45:00",
        comment: "Ortodoncia",
        paid: true
      },
      {
        userId: 2,
        dentistId: 3,
        date: "2020-02-11 11:30:00",
        comment: "Revisión porque estoy creciendo y creo que tengo los dientes un poco torcidos.",
        paid: true
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
