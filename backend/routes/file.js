const express = require('express');
 var multer=require('multer');
const auth = require('../middleware/auth');
const cors=require('cors');
const fileController = require('../controller/file');
const router = express.Router();

const app = express();







let upload = require('../config/multer.js');

let fileWorker = require('../controller/file.js');

router.post('/upload', upload.single("file"), fileWorker.uploadFile);

router.get('/api/file/all', fileWorker.listUrlFiles);
 
router.get('/api/file/:filename', fileWorker.downloadFile);
 
module.exports = router;





















// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./files/uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(
//         null,
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//       );
//     },
//   });
//   const maxSize = 1 * 1024 * 1024; // for 1MB
  
//   var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//       if (
//         file.mimetype == "image/png" ||
//         file.mimetype == "image/jpg" ||
//         file.mimetype == "image/jpeg"
//       ) {
//         cb(null, true);
//       } else {
//         cb(null, false);
//         return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//       }
//     },
//     limits: { fileSize: maxSize },
//   }).single('file');
  
//   router.post("/",(req, res) => {
//     upload(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
        
//         res.send(err)
//       } else if (err) {
        
//         res.send(err)
//       }
     
//       console.log(req.file)
   
      
//     })
//   });
 module.exports = router;