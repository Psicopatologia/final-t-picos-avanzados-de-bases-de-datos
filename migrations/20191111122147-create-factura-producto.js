'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FacturaProductos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      FacturaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Factura',
          key: 'id'
        }
      },
      ProductoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Productos',
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
    return queryInterface.dropTable('FacturaProductos');
  }
};