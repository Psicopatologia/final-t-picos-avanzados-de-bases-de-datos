'use strict';
module.exports = (sequelize, DataTypes) => {
  const FacturaProducto = sequelize.define('FacturaProducto', {
    cantidad: DataTypes.INTEGER
  }, {});
  FacturaProducto.associate = function(models) {
    models.FacturaProducto.belongsTo(models.Factura, {
      onDelete: "CASCADE"
    });
    
    models.FacturaProducto.belongsTo(models.Producto);
  };
  return FacturaProducto;
};