const express = require('express');

const { body } = require('express-validator');
const Subject= require('../models/subject');
const subController = require('../controller/sub');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/',auth,subController.create);
router.post('/active',auth,subController.active);
router.post('/subject',auth,subController.update);
router.get('/',auth,subController.view);
router.get('/subject',auth,subController.subject);
module.exports = router;