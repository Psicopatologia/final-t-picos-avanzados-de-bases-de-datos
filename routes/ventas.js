var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    models.Factura.findAll({
        include:
        [
            {
                model: models.Cliente
            }, {
                model: models.FacturaProducto,
                include: [{
                    model: models.Producto
                }
                ]
            }]
    }).then(fp => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(fp);
    })
});

module.exports = router;
