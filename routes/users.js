const express = require('express');
const router = express.Router();
const lim = require("../middleware/limite")
const userCtrl = require('../controllers/user');
const admin = require("../middleware/checkAdmin")

// const authentification = require("../middleware/authentification")
router.post('/signup', userCtrl.userSignup);
router.post('/login', userCtrl.login);

module.exports = router;