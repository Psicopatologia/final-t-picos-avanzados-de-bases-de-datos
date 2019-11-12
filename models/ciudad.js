'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ciudad = sequelize.define('Ciudad', {
    nombre: DataTypes.STRING
  }, {});
  Ciudad.associate = function(models) {
    models.Ciudad.hasMany(models.Cliente);
    models.Ciudad.hasMany(models.Proveedor);
  };
  return Ciudad;
};