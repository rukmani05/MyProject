const { request } = require('express');
const express = require('express');
const Content = require('../models/content');
const fileUpload=require('express-fileupload');
const path=require('path');
const util=require('util');
const app=express();
app.use(fileUpload());


exports.create = async (req, res, next) => {
  try{
    const title=req.body.title;
    const summary=req.body.summary;
    const sub_id=req.body.sub_id;
    const std_id=req.body.std_id;
    const links=req.body.links;
  const file=req.files.target;

  console.log(req)
  // const size=file.data.length;
  const extension=path.extname(file.name);
  const allowedExtensions= /png|jpeg|jpg|gif|pdf|txt|csv|doc|xls|bmp|exe|dll|rar|html/;
  
  if(!allowedExtensions.test(extension))throw "Unsupported format";
  // if(size>5000000)throw "File must be less than 5mb";
  
  const md5=file.md5;
  
  console.log(md5);
  
  
  file.mv('./uploads/' +file.name)
    const contentDetails = {
          
      title:title,
      summary:summary,
      sub_id:sub_id,
      std_id:std_id,
      links:links,
      file_key:md5
  };
  
  console.log(contentDetails);
      let result =  Content.save(contentDetails);
    res.status(201).json({ message: 'Content created!' });
  
  }catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating Content' });
      }
      next(err);
   
    }
}

  // exports.create = async (req, res, next) => {
  //   console.log(req,"hii");
   
  // try{
   
  //   const file=req.files.file;
  
  // console.log(req);
  
  //   const fileName=file.name;
  //     const size=file.data.length;
  //     const extension=path.extname(fileName);
  //     const allowedExtensions= /png|jpeg|jpg|gif|pdf|txt|csv|doc|xls|bmp|exe|dll|rar|html/;
  
  //     if(!allowedExtensions.test(extension))throw "Unsupported format";
  //     if(size>5000000)throw "File must be less than 5mb";
  
  //     const md5=file.md5;
  
  //     console.log(md5);
  //     const URL=fileName  ;
  
  //      await util.promisify(file.mv)("./uploads" + fileName);
      
      
    
  //       const contentDetails = {
          
       
  //       file:md5
  // };
  //   console.log(contentDetails);
  //       // let result = await Content.save(contentDetails);
  //     res.status(201).json({ message: 'Content created!' });
    
  //     } catch (err) {
  //       if (!err.statusCode) {
  //         err.statusCode = 500;
  //         console.log(err)
  //         res.status(500).json({ message:'Error creating Content' });
  //       }
  //       next(err);
     
  //     }
  //   };








  exports.delete = async (req, res, next) => {
    try {
      const deleteResponse = await Content.delete(req.body.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.active = async (req, res, next) => {
  
    try {
     
      const updateResponse = await Content.active(req.body.id);
        res.status(200).json(updateResponse);
        // res.json('Updated Content details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };

  exports.update = async (req, res, next) => {
  
    try {
     
      const updateResponse = await Content.updateById(req.body.id,req.body.title,req.body.summary,req.body.std_id,req.body.sub_id,req.body.links);
        res.status(200).json(updateResponse);
        // res.json('Updated Content details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };
    exports.view = async (req, res, next) => {
      try {
     
             let [result] = await Content.view();
             res.json(result);
         } catch (err) {
             if (!err.statusCode) {
                 err.statusCode = 500;
                 console.log(err)
                 res.status(500).json({ message: ' No content found' });
             }
             next(err);
     
         }
     };
    //  exports.view_sub = async (req, res, next) => {
    //   try {
     
    //          let [result] = await Content.view_sub();
    //          res.json(result);
    //      } catch (err) {
    //          if (!err.statusCode) {
    //              err.statusCode = 500;
    //              console.log(err)
    //              res.status(500).json({ message: ' No content found' });
    //          }
    //          next(err);
     
    //      }
    //  };

  //  exports.get_content = async (req, res, next) => {
  //      try{
  //       const [getResponse] = await Content.find();
        
  //        res.status(200).json(getResponse);

  //     } catch (err) {
  //       if (!err.statusCode) {
  //         err.statusCode = 500;
  //       }
  //     }
  //   }
     
      


    exports.search_content = async (req, res, next) => {
      try {
       
        const [searchResponse] = await Content.search(req.body.title);
        console.log(searchResponse);
        res.status(200).json(searchResponse);

      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };

 