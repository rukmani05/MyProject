const express = require('express');

const { body } = require('express-validator');
const Extra_curriculum= require('../models/extra_curriculum');
const activityController = require('../controller/activity');
const auth = require('../middleware/auth');

const router = express.Router();


router.get('/',auth,activityController.get_activity);
module.exports = router;