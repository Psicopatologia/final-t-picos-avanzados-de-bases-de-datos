'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const clientes = await queryInterface.sequelize.query(
      `SELECT id from Cliente;`
    );
    return queryInterface.bulkInsert('Telefonos', [{
      telefono: '49499499',
      ClienteId: clientes[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      telefono: '79849479',
      ClienteId: clientes[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      telefono: '16987169',
      ClienteId: clientes[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Telefonos', null, {});
  }
};
