const rateLimit = require('express-rate-limit');

const shortenLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { error: `Too many links created from this IP, please try again later.`},
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = { shortenLimiter };
