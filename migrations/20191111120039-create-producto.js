'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DOUBLE
      },
      stock: {
        type: Sequelize.INTEGER
      },
      ProveedorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Proveedor',
          key: 'id'
        }
      },
      CategoriumId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categoria',
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
    return queryInterface.dropTable('Productos');
  }
};