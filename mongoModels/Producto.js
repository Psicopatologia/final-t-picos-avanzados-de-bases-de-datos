const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    comentarios: [{
        idUsuario: String,
        comentario: String
    }],
    puntuaciones: [{
        idUsuario: Number,
        puntuacion: Number
    }]
}, { autoCreate: true })

module.exports = mongoose.model('Producto', productoSchema);