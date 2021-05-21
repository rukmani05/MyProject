const express = require('express');

const { body } = require('express-validator');
const Subject= require('../models/subject');
const subController = require('../controller/sub');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/',auth,subController.create);
router.delete('/',auth,subController.delete);
router.post('/subject',auth,subController.update);
router.get('/',auth,subController.view);
module.exports = router;