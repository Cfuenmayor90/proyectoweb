const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const usersRoutes = require('./routes/usersRoutes');
const cobranzaRoutes = require('./routes/cobranzaRoutes');
const productsRoutes = require('./routes/productsRoutes');
const ventasRoutes = require('./routes/ventasRoutes');
const vistasRoutes = require('./routes/vistasRoutes');
const clientRoutes = require('./routes/clientRoutes');


const app = express();
const PORT = process.env.PORT || 8080;
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 app.use('/users', usersRoutes);
 app.use('/cobranza', cobranzaRoutes);
 app.use('/products', productsRoutes);
 app.use('/ventas', ventasRoutes);
 app.use('/vistas', vistasRoutes);
 app.use('/client', clientRoutes);

 app.get('/', (req, res) => {
    res.sendFile('index.html');
 })


app.listen(PORT, (req, res) => {
    console.log("servidor corriendo en el puerto" + PORT);
});