const express = require('express');
const router = express.Router();
const { redirectToUrl } = require('../controllers/redirectController.js');


router.get('/:code', redirectToUrl);

module.exports = router;

