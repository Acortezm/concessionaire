const router = require('express').Router();
const {product_controller} = require('../controllers');
const {product_middleware} = require('../middlewares');
//En una sola linea se importan todos: const {product_controller, user_controller} = require('../controllers’);
//const product_controller = require('../controllers/product.controller')
//const user_controller = require('../controllers/user.controller')

//1. Endpoint listar productos
router.get('/list', product_controller.getAllProducts);
//2. Endpoint listar añadir productos con verificaciones de tipo y repetidos
router.post('/add', product_middleware.verifyTypes,product_middleware.verifyBarcode, product_controller.addProduct);
//3. Endpoint para actualizar productos
router.put('/update', product_middleware.verifyTypes, product_controller.updateProduct);
//4. Endpoint eliminar productos
router.delete('/delete/:id', product_controller.deleteProduct);

module.exports = router;