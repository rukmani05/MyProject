const { request } = require('express');
const Content = require('../models/content');

exports.create = async (req, res, next) => {
    
  
   
    const title=req.body.title;
    const summary=req.body.summary;
    const sub_id=req.body.sub_id;
    const std_id=req.body.std_id;
   
  
    try {
    
  
      const contentDetails = {
        
      title:title,
      summary:summary,
      sub_id:sub_id,
      std_id:std_id

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

 