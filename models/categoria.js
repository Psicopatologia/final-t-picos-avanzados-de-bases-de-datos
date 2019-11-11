'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nombre: DataTypes.STRING
  }, {});
  Categoria.associate = function(models) {
    models.Categoria.hasMany(models.Producto);
  };
  return Categoria;
};