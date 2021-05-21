const User = require('../models/user');
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
exports.update = async (req, res, next) => {
  
    try {
     
      const updateResponse = await User.updateById(req.body.id,req.body.name,req.body.address,req.body.mobile);
        res.status(200).json(req.body);
        // res.json('Updated Standard details')
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }
    };
    // exports.delete = async (req, res, next) => {
    //   try {
    //     const deleteResponse = await User.delete(req.body.id);
    //     res.status(200).json(deleteResponse);
    //   } catch (err) {
    //     if (!err.statusCode) {
    //       err.statusCode = 500;
    //     }
    //     next(err);
    //   }
    // };
    exports.set_inactive = async (req, res, next) => {
  
      try {
       
        const updateResponse1 = await User.setById(req.body.id);
          res.status(200).json(updateResponse1);
          // res.json('Updated Standard details')
        } catch (err) {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        }
      };