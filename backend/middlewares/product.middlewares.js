const {product_model} = require('../models');
const joi = require('@hapi/joi');

//Validar los tipos de datos ingresados
verifyTypes = (req, res, next) => {
    const product_joi = joi.object({
        _id: joi.optional(), //ID opcional ya que MongoDB crea un ID por defecto
        codigo: joi.string().required(),
        nombre: joi.string().required(),
        precio_unidad: joi.number().required(),
        estado: joi.string().required()    
        });

        const {error} = product_joi.validate(req.body);
        if(error) return res.status(400).json({error: true, mensaje: error.details[0].message});
        next();
    }
    
verifyBarcode = (req, res, next) => {
    product_model.findOne({codigo:req.body.codigo}).exec((error, product)=> {
    if(error) return res.status(500).json({error: true, mensaje: error});
    if(product) return res.status(400).json({error: true, mensaje: product.nombre + " está registrado con el código de barras: " + product.codigo});
    next();   
})

}
    module.exports = Object.freeze({
        verifyTypes,
        verifyBarcode
    });