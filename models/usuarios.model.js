const { string } = require('@hapi/joi');
const mongoose = require('mongoose');
const usuarios_schema = new mongoose.Schema({
    id_usuario: {
        type: String,
        required: true,
        min:1        
    },
    nombre_usuario: {
        type: String,
        required: true,
        min:1
    },
    rol_usuario: {
        type: String,
        required: true,
        min:1
    },
    estado_usuario: {
        type: String,
        required: true,
        min:1,
        default: "Pendiente",
    },
});

module.exports = mongoose.model('usuarios', usuarios_schema);