const Profession = require('../models/profession');



  exports.get_profession = async (req, res, next) => {
    try {
   
           let [result] = await Profession.view_profession();
           res.json(result);
       } catch (err) {
           if (!err.statusCode) {
               err.statusCode = 500;
               console.log(err)
               res.status(500).json({ message: ' No Profession found' });
           }
           next(err);
   
       }
   };