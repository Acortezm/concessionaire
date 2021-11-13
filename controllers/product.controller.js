const {product_model} = require('../models');

//Funcion para obtener la lista de los productos
getAllProducts = (req,res) => {
    product_model.find().exec((error,products) => {
        if(error) return res.status(500).json({error:true, mensaje: error});
        res.status(200).json({products});
    });
}

//Funcion para añadir proudctos nuevos la lista de los productos
addProduct = (req,res) => {
    const new_product = new product_model(req.body);

    new_product.save((error, product) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.status(200).json({mensaje: req.body.nombre + " agregado satisfactoriamente"});
    });
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y eliminar el producto
deleteProduct = async(req,res) => {
    const product_delete = await product_model.findByIdAndDelete({_id:req.params.id});

    try{
        if(product_delete) return res.json({mensaje: product_delete.nombre + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y actualizar el producto
updateProduct = async(req,res) => {
    try{
        const product_update = await product_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false})
        if(product_update) return res.json({mensaje: product_update.nombre + " actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"});

    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }

}

module.exports = Object.freeze({
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct
})