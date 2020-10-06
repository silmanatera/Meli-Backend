/*
 Rutas de usuarios
 host + /api/auth 
 */

import express from 'express';
import { ProductController } from '../controllers/product';
const { check } = require('express-validator');
const { validateParams } = require('../middleware/validator');

const router = express.Router();


router
    .get(
        '/items/:id', ProductController.productDetail)
    .get(
        '/items', [
            check('q', 'No cumple con los parametros de busqueda').not().isEmpty(),
            validateParams
        ],
        ProductController.productQuery);


module.exports = router;