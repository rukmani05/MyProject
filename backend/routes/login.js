const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const loginController = require('../controller/login');


router.post('/', loginController.login);

module.exports = router;