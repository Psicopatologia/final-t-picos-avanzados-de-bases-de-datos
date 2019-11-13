const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    identificacion: {
        type: String,
        unique: true,
        required: true
    },
    listaDeseos: [{
        idProducto: Number,
    }],
    comentarios: [{
        idProducto: Number,
        comentario: String
    }],
    puntuaciones: [{
        idProducto: Number,
        puntuacion: Number
    }],
    busqueda: [{
        busqueda: String,
        idProductosVistos: [{
            type: Number
        }]
    }]
})

module.exports = mongoose.model('Usuario', usuarioSchema);