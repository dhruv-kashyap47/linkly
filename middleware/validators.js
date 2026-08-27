const { body, validationResult } = require('express-validator');

const validateShortenRequest = [
    body('originalUrl').trim().notEmpty().withMessage(`originalUrl is required`).isURL().withMessage(`originalUrl must be a valid URL`),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
];

module.exports = { validateShortenRequest }
