const Board_details = require('../models/board');

exports.create = async (req, res, next) => {
    
    const board_name = req.body.board_name;
   
  
    try {
    
  
      const boardDetails = {
        board_name: board_name,
        

      };
  
      let result = await Board_details.save(boardDetails);
    res.status(201).json({ message: 'Board registered!' });
  
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
        console.log(err)
        res.status(500).json({ message:'Error creating board' });
      }
      next(err);
   
    }
  };
  exports.delete = async (req, res, next) => {
    try {
      const deleteResponse = await Board_details.delete(req.body.id);
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
   
    const updateResponse = await Board_details.updateById(req.body.id,req.body.board_name);
      res.status(200).json(updateResponse);
      // res.json('Updated Board details')
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

 