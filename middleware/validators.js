const { body, validationResult } = require('express-validator');

const validateShortenRequest = [
    body('originalUrl').trim().notEmpty().withMessage(`originalUrl is required`).isURL().withMessage(`originalUrl must be a valid URL`),

    body('customAlias').optional().trim().isAlphanumeric().withMessage(`customAlias must contain only letters & numbers`).isLength({ min: 3, max: 20 }).withMessage(`customAlias must be between 3 & 20 characters`),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
];

module.exports = { validateShortenRequest }
