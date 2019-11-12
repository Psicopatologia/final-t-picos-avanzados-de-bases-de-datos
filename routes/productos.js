var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    models.Producto.findAll().then(producto => {
        res.header('Access-Control-Allow-Origin', '*');
        res.send(producto);
      })
});

module.exports = router;
