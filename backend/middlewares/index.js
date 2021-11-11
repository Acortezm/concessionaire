const product_middleware = require('./product.middlewares');
const ventas_middleware = require('./ventas.middlewares');
const usuarios_middleware = require('./usuarios.middlewares');

module.exports = Object.freeze({
    product_middleware,
    ventas_middleware,
    usuarios_middleware
})