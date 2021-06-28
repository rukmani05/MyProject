const User = require('../models/user');
const Activity_user = require('../models/activity_user');

const express = require('express');

const fileUpload=require('express-fileupload');
const path=require('path');
const fs=require('file-system')
const util=require('util');
const multer  = require('multer');
const { compareSync } = require('bcryptjs');
const upload = multer({ dest: './uploads/'})
const app=express();
app.use(fileUpload());
exports.view = async (req, res, next) => {
  try {

    let [result] = await User.view_user();
    res.json(result);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err)
      res.status(500).json({ message: ' No user found' });
    }
    next(err);

  }
};


exports.view_details = async (req, res, next) => {
  let id = req.query.id;
  let user_id = req.query.id;

  try {

    let [result] = await User.view_details(id);
   path_dir=result[0].image;
   console.log(path_dir);
console.log(typeof(path_dir));

    let [result1] = await Activity_user.view_details(user_id);

   
  
   
   
    let a = [];
    let b = [];
    for (let i = 0; i < result1.length; i++) {
      a = result1[i]['id'];
      b.push(a);
    }
    // console.log(b);
    // console.log(typeof (b));
    let final = {};
    let arr = [];


    console.log(result[0]);
    final = {
      "name": result[0].name,
      "email": result[0].email,
      "address": result[0].address,
      "mobile": result[0].mobile,
      "profession_id": result[0].profession_id,
      "image":path_dir,
      "activity_id": b
    }
    arr.push(final);
    console.log(arr);
     res.json(arr);
    //  res.sendFile(path_dir);

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err)
      res.status(500).json({ message: ' No user found' });
    }
    next(err);

  }
};
exports.profile = async (req, res, next) => {
  const id = req.body.id;
  try {


    let [result] = await User.user_profile(id);

    var data = result;
    var img = Buffer.from(data, 'base64');
    console.log(img);
    // res.setHeader("Content-Type", "image/png")
    //  res.end(img); 
    res.set('Content-type', 'image/png');
    res.json(img);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      console.log(err)
      res.status(500).json({ message: ' No image found' });
    }
    next(err);

  }
};
exports.update = async (req, res, next) => {

  try {

    const updateResponse = await User.updateById(req.body.id, req.body.name, req.body.address, req.body.mobile);
    res.status(200).json(req.body);
    // res.json('Updated Standard details')
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.set_active = async (req, res, next) => {

  try {

    const updateResponse = await User.set_active(req.body.id, req.body.active);
    res.status(200).json('User inactivated successfully!');
    // res.json('Updated Standard details')
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.profile_update = async (req, res, next) => {

//   function base64_encode(file) {
//     const base64 = fs.readFileSync(file, 'base64');
//     console.log(base64);
// }

  console.log(req.body.id, "hii", req.body);
  let activity_id = req.body.activity_id;
  let id = req.body.id;
  let user_id = req.body.id;
  try {
    const file=req.files.target;
    console.log(req)
    // const size=file.data.length;
    const extension=path.extname(file.name);
    const allowedExtensions= /png|jpeg|jpg/;
    
    if(!allowedExtensions.test(extension))throw "Unsupported format";
    // if(size>5000000)throw "File must be less than 5mb";
    
  file.mv('../frontend/src/assets/images/'+file.name);
  //  file.mv('./uploads/' +file.name);
  
// base64_encode(file);
 const image ="D:\\demoproject\\frontend\\src\\assets\\images\\" +file.name;

console.log(image);

const addimage=await User.addimg(id,image);

    const updateResponse = await User.profile_update(req.body.id, req.body.name, req.body.email,
      req.body.mobile, req.body.address, req.body.profession_id);


    const del = await Activity_user.delete_previous(user_id);
    for (let i = 0; i < activity_id.length; i++) {
      const fin = {
        user_id: id,
        activity_id: activity_id[i]
      }


      const result = await Activity_user.profile_update(fin);
    }


    res.json({message:"Profile updated successfully!"});

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
