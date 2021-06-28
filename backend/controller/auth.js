const { validationResult } = require('express-validator');


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
    // const errors = validationResult(req);
  
    // if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_pwd=req.body.confirm_pwd;
    const mobile=req.body.mobile;
    const gender=req.body.gender;
    const dob=req.body.dob;
    const f_name=req.body.f_name;
    const b_group=req.body.b_group;
    const address=req.body.address;
    const img=req.body.img;
  console.log(req)
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const confirmhash=await bcrypt.hash(confirm_pwd,12);
  
      const userDetails = {
        name: name,
        email: email,
        password: hashedPassword,
        confirm_pwd:confirmhash,
        mobile:mobile,
        gender:gender,
        dob:new Date(dob),
        f_name:f_name,
        b_group:b_group,
        address:address,
        img:img


      };
  
      let result = await User.save(userDetails);
    res.status(201).json({ message: 'User registered!' });
    // res.json('User registered')
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating user' });
      }
      next(err);
   
    }
  };

 