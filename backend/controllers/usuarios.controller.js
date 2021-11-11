const {usuarios_model} = require('../models');

//Funcion para obtener la lista de los usuarios
getAllUsuarios = (req,res) => {
    usuarios_model.find().exec((error,usuarios) => {
        if(error) return res.status(500).json({error:true, mensaje: error});
        res.status(200).json({usuarios});
    });
}

//Funcion para añadir proudctos nuevos la lista de los usuariosos
addUsuarios = (req,res) => {
    const new_usuarios = new usuarios_model(req.body);

    new_usuarios.save((error, usuarios) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.status(200).json({mensaje: req.body.nombre_usuario + " agregado satisfactoriamente"});
    });
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y eliminar el usuarioso
deleteUsuarios = async(req,res) => {
    const usuarios_delete = await usuarios_model.findByIdAndDelete({_id:req.params.id});

    try{
        if(usuarios_delete) return res.json({mensaje: usuarios_delete.nombre_usuario + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

//Debe ser funcion asincrona para que cumpla con la "promesa" de ir a la base de datos y actualizar el usuarioso
updateUsuarios = async(req,res) => {
    try{
        const usuarios_update = await usuarios_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false})
        if(usuarios_update) return res.json({mensaje: usuarios_update.nombre_usuario + " actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"});

    } catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }

}

module.exports = Object.freeze({
    getAllUsuarios,
    addUsuarios,
    deleteUsuarios,
    updateUsuarios
})