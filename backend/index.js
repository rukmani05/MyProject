const express = require('express');
const fileUpload=require('express-fileupload');
const bodyParser = require('body-parser');
const cors=require('cors');
const path=require('path');
const util=require('util');
const multer = require('multer');
const imageToBase64 = require('image-to-base64');
const userRoutes = require('./routes/user');
const loginRoutes=require('./routes/login');
const logoutRoutes=require('./routes/logout');
const boardRoutes=require('./routes/board');
const stdRoutes=require('./routes/std');
const subRoutes=require('./routes/sub');
const contentRoutes=require('./routes/content');
const professionRoutes=require('./routes/profession');
const activityRoutes=require('./routes/activity');
const fileroutes=require('./routes/file');
const { extname } = require('path');
const { O_DIRECT } = require('constants');
const router = express.Router();
const Content = require('./models/content');

const app = express();

const ports = process.env.PORT || 3000;
app.use(fileUpload());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});






// app.post('/target',function(req,res,next){
// try{
//   const title=req.body.title;
//   const summary=req.body.summary;
//   const sub_id=req.body.sub_id;
//   const std_id=req.body.std_id;
//   const links=req.body.links;
// const file=req.files.target;

// const size=file.data.length;
// const extension=path.extname(file.name);
// const allowedExtensions= /png|jpeg|jpg|gif|pdf|txt|csv|doc|xls|bmp|exe|dll|rar|html/;

// if(!allowedExtensions.test(extension))throw "Unsupported format";
// if(size>5000000)throw "File must be less than 5mb";

// const md5=file.md5;

// console.log(md5);


// file.mv('./uploads/' +file.name)
//   const contentDetails = {
        
//     title:title,
//     summary:summary,
//     sub_id:sub_id,
//     std_id:std_id,
//     links:links,
//     file_key:md5
// };

// console.log(contentDetails);
//     let result =  Content.save(contentDetails);
//   res.status(201).json({ message: 'Content created!' });

// }catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//       console.log(err)
//       res.status(500).json({ message:'Error creating Content' });
//     }
//     next(err);
 
//   }
// res.send({
//   success:true,
//   message:"File Uploaded!"
// });
// });




// var storage = multer.diskStorage({
//   destination: './files/uploads', 
//   // filename: function (req, file, cb) {
//   //   cb(null,Date.now() + '.' + file.mimetype.split('/')[1]);
//   // }
// })
//  const upload= multer({ storage:storage});
//  app.use(cors());

// app.post('/upload_file',upload.single('upload'),(req,res)=>{
//  console.log(req.file);

//  res.send("Uploaded successfully!");
// });

app.use('/file',fileroutes);



//User Routes

app.use('/register', userRoutes);
app.use('/user',userRoutes);
app.use('/update',userRoutes);
app.use('/view_user',userRoutes);
app.use('/view_profile',userRoutes);
app.use('/view',userRoutes);
app.use('/profile',userRoutes);

//Login Routes

app.use('/login',loginRoutes);
app.use('/logout',logoutRoutes);

//Board Routes

app.use('/create_board',boardRoutes);

app.use('/update',boardRoutes);

//Std Routes

app.use('/create_standard',stdRoutes);
app.use('/std',stdRoutes);
app.use('/update',stdRoutes);
app.use('/view_std',stdRoutes);
app.use('/view_standard',stdRoutes);

//Subject Routes
app.use('/view_subject',subRoutes);
app.use('/create_subject',subRoutes);
app.use('/sub',subRoutes);
app.use('/update',subRoutes);
app.use('/view',subRoutes);



//Content Routes

app.use('/create_content',contentRoutes);
// app.use('/list_content',contentRoutes);
// app.use('/search',contentRoutes);
app.use('/update',contentRoutes);
app.use('/content',contentRoutes);
app.use('/view_content',contentRoutes);

//Profession routes

app.use('/view_profession',professionRoutes);

//Extra curriculum routes
app.use('/view_activity',activityRoutes);

module.exports = router;


app.listen(ports, () => console.log(`Listening on port ${ports}`));

