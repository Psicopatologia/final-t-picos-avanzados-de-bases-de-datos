'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
  }, {freezeTableName: true});
  Cliente.associate = function(models) {
    models.Cliente.belongsTo(models.Ciudad);
    models.Cliente.hasMany(models.Telefonos);
  };
  return Cliente;
};