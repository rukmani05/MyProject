const Subject = require('../models/subject');

exports.create = async (req, res, next) => {
    

    const subject_name=req.body.subject_name;
   
  
    try {
    
  
      const subjectDetails = {
        subject_name: subject_name
      

      };
  
      let result = await Subject.save(subjectDetails);
    res.status(201).json({ message: 'Subject registered!' });
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating subject' });
      }
      next(err);
   
    }
  };
  exports.delete = async (req, res, next) => {
    try {
      const deleteResponse = await Subject.delete(req.body.id);
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
     
      const updateResponse = await Subject.updateById(req.body.id,req.body.subject_name);
        res.status(200).json(updateResponse);
        // res.json('Updated Subject details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };
    exports.view = async (req, res, next) => {
      try {
     
             let [result] = await Subject.view_subject();
             res.json(result);
         } catch (err) {
             if (!err.statusCode) {
                 err.statusCode = 500;
                 console.log(err)
                 res.status(500).json({ message: ' No Subject found' });
             }
             next(err);
     
         }
     };


 