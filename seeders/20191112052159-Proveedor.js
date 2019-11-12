'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ciudades = await queryInterface.sequelize.query(
      `SELECT id from Ciudad;`
    );
    return queryInterface.bulkInsert('Proveedor', [{
      nombre: 'Camisetas Dio',
      direccion: 'Calle 03#20-10',
      CiudadId: ciudades[0][0].id,
      telefono: '4684647646',
      web: 'https://www.camisetasdio.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Zapatos Pantera',
      direccion: 'Calle 19#90-05',
      CiudadId: ciudades[0][1].id,
      telefono: '19719191',
      web: 'https://www.pantera.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Canoas Taylor',
      direccion: 'Calle 19#73-08',
      CiudadId: ciudades[0][0].id,
      telefono: '8768767676',
      web: 'https://www.canoastaylor.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Proveedor', null, {});
  }
};
