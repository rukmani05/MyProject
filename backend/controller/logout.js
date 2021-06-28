const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.logout = async (req, res, next) => {
    jwt.destroy()
  
  
  };