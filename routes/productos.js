var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Producto.findAll().then(producto => {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(producto);
    })
});

router.get('/nombre/:id', function(req, res, next) {
  let id = req.params.id;
  models.Producto.findOne( { where: { id: id }} ).then(producto => {
    console.log(producto);
      res.header('Access-Control-Allow-Origin', '*');
      res.send({nombre: producto.nombre});
    })
});

router.post('/ventaSimple/:id/:usuario', function(req, res, next) {
  let id = req.params.id;
  let usuario = req.params.usuario;
  models.Producto.findOne({ where: { id: id } })
  .on('success',producto => {

  })
});

module.exports = router;
