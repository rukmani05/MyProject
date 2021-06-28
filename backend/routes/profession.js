const express = require('express');

const { body } = require('express-validator');
const Profession= require('../models/profession');
const proController = require('../controller/pro');
const auth = require('../middleware/auth');

const router = express.Router();


router.get('/',auth,proController.get_profession);
module.exports = router;