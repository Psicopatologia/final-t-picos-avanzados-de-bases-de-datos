'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cliente', {
      identificacion: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      CiudadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Ciudad',
          key: 'id'
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cliente');
  }
};