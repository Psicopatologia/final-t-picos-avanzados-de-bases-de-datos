'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const clientes = await queryInterface.sequelize.query(
      `SELECT identificacion from Cliente;`
    );
    return queryInterface.bulkInsert('Factura', [{
      fecha: new Date(),
      descuento: -16,
      ClienteId: clientes[0][0].identificacion,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Factura', null, {});
  }
};
