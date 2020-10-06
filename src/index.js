// const express = require('express');
import express from 'express';
require('dotenv').config();
// import { apiDetailsApiBO } from '../routes/product';


// Crea el servidor de express
const app = express();


// rutas - use => es un middleware
app.use('/api', require('../routes/product'));

// Escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Conectado en el puerto ${ process.env.PORT }`)
});