'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const proveedores = await queryInterface.sequelize.query(
      `SELECT id from Ciudad;`
    );
    const categorias = await queryInterface.sequelize.query(
      `SELECT id from Categoria;`
    );
    return queryInterface.bulkInsert('Producto', [{
      nombre: 'pantera omg',
      precio: 300000.0,
      stock: 10,
      ProveedorId: proveedores[0][1].id,
      CategoriaId: categorias[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'pantera para futbol 41',
      precio: 3500000.0,
      stock: 20,
      ProveedorId: proveedores[0][1].id,
      CategoriaId: categorias[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Zapatos vaqueros 34',
      precio: 1990000.0,
      stock: 29,
      ProveedorId: proveedores[0][1].id,
      CategoriaId: categorias[0][0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Camiseta selección Colombia Talla M',
      precio: 2500000.0,
      stock: 19,
      ProveedorId: proveedores[0][0].id,
      CategoriaId: categorias[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Camiseta para futbol talla L',
      precio: 1500000.0,
      stock: 18,
      ProveedorId: proveedores[0][0].id,
      CategoriaId: categorias[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Camiseta para futbol talla S',
      precio: 900000.0,
      stock: 10,
      ProveedorId: proveedores[0][0].id,
      CategoriaId: categorias[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Camiseta selección brasil talla M',
      precio: 1200000.0,
      stock: 30,
      ProveedorId: proveedores[0][0].id,
      CategoriaId: categorias[0][1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Canoa corey 1 persona',
      precio: 938900.0,
      stock: 12,
      ProveedorId: proveedores[0][2].id,
      CategoriaId: categorias[0][2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Canoa corey 3 personas',
      precio: 1938900.0,
      stock: 11,
      ProveedorId: proveedores[0][2].id,
      CategoriaId: categorias[0][2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Bote slip 14 pies',
      precio: 30000000.0,
      stock: 14,
      ProveedorId: proveedores[0][2].id,
      CategoriaId: categorias[0][2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Producto', null, {});
  }
};
