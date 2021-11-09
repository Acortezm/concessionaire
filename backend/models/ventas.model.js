const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const ventas_schema = new mongoose.Schema({

    codigo_venta: {
        type: String,
        required: true,
        min:1        
    },
    
    id_cliente: {
        type: String,
        required: true,
        min:1        
    },
    nombre_cliente: {
        type: String,
        required: true,
        min:1
    },
    codigo_producto: {
        type: String,
        required: true,
        min:1
    },

    nombre_producto: {
        type: String,
        required: true,
        min:1
    },

    cantidad: {
        type: Number,
        required: true,
        min:1
    },

    total: {
        type: Number,
        required: true,
        min:1
    }
});

module.exports = mongoose.model('ventas', ventas_schema);