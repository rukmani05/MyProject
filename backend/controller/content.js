const { request } = require('express');
const Content = require('../models/content');

exports.create = async (req, res, next) => {
    
  
   
    const title=req.body.title;
    const summary=req.body.summary
   
  
    try {
    
  
      const contentDetails = {
        
      title:title,
      summary:summary

};
  
      let result = await Content.save(contentDetails);
    res.status(201).json({ message: 'Content created!' });
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating Content' });
      }
      next(err);
   
    }
  };
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
  exports.update = async (req, res, next) => {
  
    try {
     
      const updateResponse = await Content.updateById(req.body.id,req.body.title);
        res.status(200).json(updateResponse);
        // res.json('Updated Content details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };

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

 