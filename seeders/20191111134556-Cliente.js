'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ciudades = await queryInterface.sequelize.query(
      `SELECT id from Ciudad;`
    );
    return queryInterface.bulkInsert('Cliente', [{
      id: '12345',
      nombre: 'Juan Sanchez',
      direccion: 'Calle 89#10-40',
      CiudadId: ciudades[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '6789',
      nombre: 'Pedro García',
      direccion: 'Calle 69#20-15',
      CiudadId: ciudades[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cliente', null, {});
  }
};
