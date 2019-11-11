'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER
  }, {});
  Producto.associate = function(models) {
    models.Producto.belongsTo(models.Proveedor);
    models.Producto.belongsTo(models.Categoria);
    models.Producto.hasMany(models.FacturaProducto);
  };
  return Producto;
};