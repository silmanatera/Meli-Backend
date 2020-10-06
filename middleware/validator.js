const { validationResult } = require('express-validator');


const validateParams = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next(); // no se ejecuta el next si hay un error
}

// module.exports = validarCampo;
module.exports = {
    validateParams
};