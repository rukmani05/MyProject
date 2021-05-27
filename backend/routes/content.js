const express = require('express');

const { body } = require('express-validator');
const Content= require('../models/content');
const contentController = require('../controller/content');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/',auth,contentController.create);
router.delete('/',auth,contentController.delete);
router.post('/active',auth,contentController.active);
router.post('/content',auth,contentController.update);
router.get('/',auth,contentController.view);




router.get('/list',auth,paginatedResult(),(req,res)=>{

  res.json(res.paginatedResult);
  });
  function paginatedResult(){
  
  return async (req,res,next)=>{
  const page=parseInt(req.query.page) ;
  const limit=3;
  const skipindex=(page-1)*limit;
 
  // try{
  const [getResponse] = await Content.find({});
 
  const result=getResponse.slice(skipindex,skipindex+limit);
  res.json(result);

  // }catch(e){
  //   res.status(500).json({message:"error"});
  // }











  // try{
  // results.results= await Content.find({})
  // .skip(skipindex)
  // .limit(limit)
  // .exec();
  // res.paginatedResult=results;
  
  
  // next();
  // }catch(e){
  // res.status(500).json({message:"error"})
  // }
  }
  }
// }


// router.get('/',auth,async(req,res)=>{
//     const{page=1, limit=10}=req.query
//         const [getResponse] = await Content.fetch()
//         .limit(limit * 1)
//         .skip((page-1) * limit).exec();
//          res.status(200).json(getResponse);


// });




router.get('/content',auth,contentController.search_content);
module.exports = router;
// module.exports= {paginatedResult};