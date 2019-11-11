'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proveedor = sequelize.define('Proveedor', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    web: DataTypes.STRING
  }, {});
  Proveedor.associate = function(models) {
    models.Proveedor.belongsTo(models.Ciudad);
    models.Proveedor.hasMany(models.Producto);
  };
  return Proveedor;
};