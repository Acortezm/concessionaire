const router = require('express').Router();
const {usuarios_controller} = require('../controllers');
const {usuarios_middleware} = require('../middlewares');
//En una sola linea se importan todos: const {product_controller, user_controller} = require('../controllers’);
//const product_controller = require('../controllers/product.controller')
//const user_controller = require('../controllers/user.controller')

//1. Endpoint listar productos
router.get('/list', usuarios_controller.getAllUsuarios);
//2. Endpoint listar añadir productos con verificaciones de tipo y repetidos
router.post('/add', usuarios_middleware.verifyTypes,usuarios_middleware.verifyCodigo, usuarios_controller.addUsuarios);
//3. Endpoint para actualizar productos
router.put('/update', usuarios_middleware.verifyTypes, usuarios_controller.updateUsuarios);
//4. Endpoint eliminar productos
router.delete('/delete/:id', usuarios_controller.deleteUsuarios);

module.exports = router;