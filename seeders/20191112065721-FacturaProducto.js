'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const facturas = await queryInterface.sequelize.query(
      `SELECT id from Factura;`
    );
    const productos = await queryInterface.sequelize.query(
      `SELECT id from Producto;`
    );
    return queryInterface.bulkInsert('FacturaProductos', [{
      cantidad:1,
      FacturaId: facturas[0][0].id,
      ProductoId: productos[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      cantidad:2,
      FacturaId: facturas[0][0].id,
      ProductoId: productos[0][3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      cantidad:4,
      FacturaId: facturas[0][0].id,
      ProductoId: productos[0][2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('FacturaProductos', null, {});
  }
};
