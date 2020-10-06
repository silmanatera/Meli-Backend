// const express = require('express');
import express from 'express';
require('dotenv').config();
const cors = require('cors');


// Crea el servidor de express
const app = express();

// middlewares
app.use(cors());
app.use('/api', require('../routes/product'));

// Escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Conectado en el puerto ${ process.env.PORT }`)
});