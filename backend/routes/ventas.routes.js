const router = require('express').Router();
const {ventas_controller} = require('../controllers');
const {ventas_middleware} = require('../middlewares');
//En una sola linea se importan todos: const {product_controller, user_controller} = require('../controllers’);
//const product_controller = require('../controllers/product.controller')
//const user_controller = require('../controllers/user.controller')

//1. Endpoint listar productos
router.get('/list', ventas_controller.getAllVentas);
//2. Endpoint listar añadir productos con verificaciones de tipo y repetidos
router.post('/add', ventas_middleware.verifyTypes,ventas_middleware.verifyCodigo, ventas_controller.addVentas);
//3. Endpoint para actualizar productos
router.put('/update', ventas_middleware.verifyTypes, ventas_controller.updateVentas);
//4. Endpoint eliminar productos
router.delete('/delete/:id', ventas_controller.deleteVentas);

module.exports = router;