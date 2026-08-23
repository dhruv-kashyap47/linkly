const express = require('express');
const router = express.Router();
const { shortenUrl, getUrlStats } = require("../controllers/urlController.js");

router.post('/shorten', shortenUrl);
router.get('/urls/:code/stats', getUrlStats);

module.exports = router;
