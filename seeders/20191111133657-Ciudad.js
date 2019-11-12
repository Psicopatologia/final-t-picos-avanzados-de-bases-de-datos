'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ciudad', [{
      nombre: 'Medellin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Bogota',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Cali',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ciudad', null, {});
  }
};
