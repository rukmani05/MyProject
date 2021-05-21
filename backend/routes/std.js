const express = require('express');

const { body } = require('express-validator');
const Standard= require('../models/standard');
const stdController = require('../controller/std');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/',auth,stdController.create);
router.delete('/',auth,stdController.delete);
router.post('/standard',auth,stdController.update);
router.get('/',auth,stdController.view);
module.exports = router;