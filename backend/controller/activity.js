const Extra_curriculum = require('../models/extra_curriculum');



  exports.get_activity = async (req, res, next) => {
    try {
   
           let [result] = await Extra_curriculum.get_activity();
           res.json(result);
       } catch (err) {
           if (!err.statusCode) {
               err.statusCode = 500;
               console.log(err)
               res.status(500).json({ message: ' No Activity found' });
           }
           next(err);
   
       }
   };