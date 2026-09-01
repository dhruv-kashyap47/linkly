const express = require(`express`);
const router = express.Router();
const { register, login } = require('../controllers/authController.js');
const { validateAuthRequest } = require('../middleware/validators.js');

router.post('/register', validateAuthRequest, register);
router.post('/login', validateAuthRequest, login);

module.exports = router;
