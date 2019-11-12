var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    models.Producto.findAll().then(producto => {
        res.send(producto);
      })
});

module.exports = router;
