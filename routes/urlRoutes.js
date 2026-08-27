const express = require('express');
const router = express.Router();
const { shortenUrl, getUrlStats, getClicksByDay, getClicksByReferrer } = require("../controllers/urlController.js");
const { validateShortenRequest } = require("../middleware/validators.js");

router.post('/shorten', validateShortenRequest, shortenUrl);
router.get('/urls/:code/stats', getUrlStats);
router.get('/urls/:code/clicks-by-day', getClicksByDay);
router.get('/url/:code/clicks-by-referre', getClicksByReferrer);

module.exports = router;
