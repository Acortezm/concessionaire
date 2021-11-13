const express = require('express');
require('dotenv').config();

//Creamos el servidor
const app = express();

//Exposición del backend al frontend
const cors = require('cors');
app.use(cors());

//Capturar el cuerpo de las peticiones que vienen del front end
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Configurar la conexion en el mongo atlas
const mongoose = require('mongoose');
//const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.tazd8.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
//const option = {useNewUrlParser: true, useUnifiedTopology: true }; 
mongoose.connect(URI, option)
//.then(() => {
//    console.log("Base de datos conectada")
// })
//.catch((e) => console.log("Error en la conexión: " + e));

//if(process.env.NODE_ENV==='production'){
///    app.use(express.static('frontend/build'));
//}

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myFirstDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
}

//Importar las rutas
const {product_routes} = require('./routes')
app.use('/api/v1/product', product_routes);
const {ventas_routes} = require('./routes')
app.use('/api/v1/ventas', ventas_routes);
const {usuarios_routes} = require('./routes')
app.use('/api/v1/usuarios', usuarios_routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
    
//Poner el servidor a escuchar
//app.listen(process.env.PORT || 8080, () => {console.log("Servidor funcionando en el puerto: "+process.env.PORT)})

