const express = require('express');

const { body } = require('express-validator');

const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/user');

const authController = require('../controller/auth');
const userController=require('../controller/user');

router.post(
  '/',
  [
    body('name').trim().not().isEmpty(),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom(async (email) => {
        const user = await User.find(email);
        if (user[0].length > 0) {
          return Promise.reject('Email address already exist!');
        }
      })
      .normalizeEmail(),
    body('password').trim().isLength({ min: 5 }),
    body('confirm_pwd').trim().not().isEmpty(),
    body('mobile').trim().isLength({min:10}),
    body('gender').trim().not().isEmpty(),
    body('dob').trim().not().isEmpty(),
    body('f_name').trim().not().isEmpty(),
    body('b_group').trim().not().isEmpty(),
    body('address').trim().not().isEmpty(),
 ],
  authController.signup
);
router.post('/active',auth,userController.set_active)
router.get('/',auth,userController.view);
router.post('/user',auth,userController.update);


module.exports = router;