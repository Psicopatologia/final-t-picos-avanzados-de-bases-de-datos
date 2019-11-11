'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    identificacion: DataTypes.STRING,
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
  }, {});
  Cliente.associate = function(models) {
    models.Cliente.belongsTo(models.Ciudad);
    models.Cliente.hasMany(models.Telefonos);
  };
  return Cliente;
};