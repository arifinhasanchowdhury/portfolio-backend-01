const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser); // POST /api/auth/register
router.post('/login', loginUser);       // POST /api/auth/login

module.exports = router;
