const { nanoid } = require('nanoid');

const generateShortCode = () => {
    return nanoid(6); // generates a 6-character random string
};

module.exports = generateShortCode;
