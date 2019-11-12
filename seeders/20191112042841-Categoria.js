'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categoria', [{
      nombre: 'zapatos',
      descripcion: 'accesorio de la vestimenta hecho con la intención de proveer protección y comodidad al pie',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'camiseta',
      descripcion: 'prenda generalmente de mangas cortas, cuello redondo, sin bolsillos y sin botones a lo largo de su parte frontal',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Canoa',
      descripcion: ' bote relativamente pequeño que se mueve con la fuerza humana',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categoria', null, {});
  }
};
