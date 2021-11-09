const {ventas_model} = require('../models');

//Funcion para obtener la lista de los productos
getAllVentas = (req,res) => {
    ventas_model.find().exec((error,ventas) => {
        if(error) return res.status(500).json({error:true, mensaje: error});
        res.status(200).json({getAllVentas});
    });
}

//Funcion para añadir proudctos nuevos la lista de los productos
addVentas = (req,res) => {
    const new_ventas = new ventas_model(req.body);

    new_ventas.save((error, ventas) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.status(200).json({mensaje: req.body.nombre + " agregado satisfactoriamente"});
    });
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y eliminar el producto
deleteVentas = async(req,res) => {
    const product_ventas = await ventas_model.findByIdAndDelete({_id:req.params.id});

    try{
        if(ventas_delete) return res.json({mensaje: ventas_delete.nombre + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y actualizar el producto
updateVentas = async(req,res) => {
    try{
        const ventas_update = await ventas_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false})
        if(ventas_update) return res.json({mensaje: ventas_update.codigo_venta + " actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"});

    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }

}

module.exports = Object.freeze({
    getAllVentas,
    addVentas,
    deleteVentas,
    updateVentas
})