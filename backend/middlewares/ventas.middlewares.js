const {ventas_model} = require('../models');
const joi = require('@hapi/joi');

//Validar los tipos de datos ingresados
verifyTypes = (req, res, next) => {
    const ventas_joi = joi.object({
        _id: joi.optional(), //ID opcional ya que MongoDB crea un ID por defecto
        codigo_venta: joi.string().required(),
        id_cliente: joi.string().required(),
        nombre_cliente: joi.string().required(),
        codigo_producto: joi.string().required(),
        nombre_producto: joi.string().required(),
        cantidad: joi.number().required(),
        total: joi.number().required()      
        });

        const {error} = ventas_joi.validate(req.body);
        if(error) return res.status(400).json({error: true, mensaje: error.details[0].message});
        next();
    }
    
verifyCodigo = (req, res, next) => {
    ventas_model.findOne({codigo_venta:req.body.codigo_venta}).exec((error, product)=> {
    if(error) return res.status(500).json({error: true, mensaje: error});
    if(product) return res.status(400).json({error: true, mensaje: ventas.codigo_venta + "Ya se encuentra registrado"});
    next();   
})

}
    module.exports = Object.freeze({
        verifyTypes,
        verifyCodigo
    });