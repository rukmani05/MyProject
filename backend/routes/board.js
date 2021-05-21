const express = require('express');

const { body } = require('express-validator');
const Board_details= require('../models/board');
const boardController = require('../controller/board');
const auth = require('../middleware/auth');


const router = express.Router();


router.post('/',auth,boardController.create);
router.delete('/',auth,boardController.delete);
router.post('/board',auth,boardController.update);
module.exports = router;