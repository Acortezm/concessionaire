const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const product_schema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        min:1        
    },
    nombre: {
        type: String,
        required: true,
        min:1
    },
    precio_unidad: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: "Disponible",
    }
});

module.exports = mongoose.model('product', product_schema);