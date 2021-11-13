const {usuarios_model} = require('../models');
const joi = require('@hapi/joi');

//Validar los tipos de datos ingresados
verifyTypes = (req, res, next) => {
    const usuarios_joi = joi.object({
        _id: joi.optional(), //ID opcional ya que MongoDB crea un ID por defecto
        id_usuario: joi.string().required(),
        nombre_usuario: joi.string().required(),
        rol_usuario: joi.string().required(),
        estado_usuario: joi.string().required(),      
        });

        const {error} = usuarios_joi.validate(req.body);
        if(error) return res.status(400).json({error: true, mensaje: error.details[0].message});
        next();
    }
    
verifyCodigo = (req, res, next) => {
    usuarios_model.findOne({id_usuario:req.body.id_usuario}).exec((error, usuarios)=> {
    if(error) return res.status(500).json({error: true, mensaje: error});
    if(usuarios) return res.status(400).json({error: true, mensaje: usuarios.id_usuario + "Ya se encuentra registrado"});
    next();   
})

}
    module.exports = Object.freeze({
        verifyTypes,
        verifyCodigo
    });