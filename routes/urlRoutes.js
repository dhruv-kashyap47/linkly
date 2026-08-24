const express = require('express');
const router = express.Router();
const { shortenUrl, getUrlStats, getClicksByDay } = require("../controllers/urlController.js");

router.post('/shorten', shortenUrl);
router.get('/urls/:code/stats', getUrlStats);
router.get("/urls/:code/clicks-by-day", getClicksByDay);

module.exports = router;
