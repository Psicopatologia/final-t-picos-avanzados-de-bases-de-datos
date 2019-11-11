'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefonos = sequelize.define('Telefonos', {
    telefono: DataTypes.STRING
  }, {});
  Telefonos.associate = function(models) {
    models.Telefonos.belongsTo(models.Cliente)
  };
  return Telefonos;
};