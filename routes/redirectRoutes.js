const express = require('express');
const router = express.Router();
const { redirectToUrl } = require('../controllers/redirectController.js');


router.get('/:code', redirectToUrl); // creates req.params.code and passes it to redirectToUrl function

module.exports = router;

