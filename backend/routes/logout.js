const express = require('express');

const { body } = require('express-validator');

const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');
const logoutController = require('../controller/logout');

router.get('/',auth, logoutController.logout);

module.exports = router;