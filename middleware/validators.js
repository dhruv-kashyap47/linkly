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

const validateAuthRequest = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage(`Email is required`)
    .isEmail()
    .withMessage(`Must be a valid email`),

  body("password")
    .notEmpty()
    .withMessage(`Password is required`)
    .isLength({ min: 6 })
    .withMessage(`Password must be at least 6 characters`),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateShortenRequest, validateAuthRequest }
