'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    fecha: DataTypes.DATE,
    descuento: DataTypes.DOUBLE
  }, {freezeTableName: true});
  Factura.associate = function(models) {
    models.Factura.belongsTo(models.Cliente);
    models.Factura.hasMany(models.FacturaProducto);
  };
  return Factura;
};