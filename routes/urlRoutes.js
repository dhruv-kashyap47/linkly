const express = require("express");

const router = express.Router();

const {
  shortenUrl,
  getUrlStats,
  getClicksByDay,
  getClicksByReferrer,
  getMyUrls,
} = require("../controllers/urlController.js");

const { validateShortenRequest } = require("../middleware/validators.js");
const { shortenLimiter } = require("../middleware/rateLimiter.js");
const { optionalAuth, protect } = require("../middleware/auth.js");

router.post(
  "/shorten",
  shortenLimiter,
  optionalAuth,
  validateShortenRequest,
  shortenUrl,
);

router.get("/urls/:code/stats", getUrlStats);

router.get("/urls/:code/clicks-by-day", getClicksByDay);

router.get("/urls/:code/clicks-by-referrer", getClicksByReferrer);

router.get("/urls/my-links", protect, getMyUrls);

module.exports = router;
