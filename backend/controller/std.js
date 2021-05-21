const Standard = require('../models/standard');

exports.create = async (req, res, next) => {
    
    const standard_name = req.body.standard_name;
 
   
  
    try {
    
  
      const stdDetails = {
        standard_name: standard_name
       
        

      };
  
      let result = await Standard.save(stdDetails);
    res.status(201).json({ message: 'Standard registered!' });
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating standard' });
      }
      next(err);
   
    }
  };
  exports.delete = async (req, res, next) => {
    try {
      const deleteResponse = await Standard.delete(req.body.id);
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
     
      const updateResponse = await Standard.updateById(req.body.id,req.body.standard_name);
        res.status(200).json(updateResponse);
        // res.json('Updated Standard details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };
    exports.view = async (req, res, next) => {
      try {
     
             let [result] = await Standard.view_standard();
             res.json(result);
         } catch (err) {
             if (!err.statusCode) {
                 err.statusCode = 500;
                 console.log(err)
                 res.status(500).json({ message: ' No Standard found' });
             }
             next(err);
     
         }
     };

 