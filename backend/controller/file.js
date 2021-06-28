const upload = require('../config/multer');
















 const uploadFolder = __dirname + '/uploads/';
const fs = require('fs');
 
exports.uploadFile =async(req, res) => {
    const file=req.files.file;
   console.log(file)
 
	res.send('File uploaded successfully! ' +file);
}
 
exports.listUrlFiles = (req, res) => {
	fs.readdir(uploadFolder, (err, files) => {
		for (let i = 0; i < files.length; ++i) {
			files[i] = "http://localhost:8080/api/file/" + files[i];
		}
		
		res.send(files);
	})
}

exports.downloadFile = (req, res) => {
	let filename = req.params.filename;
	res.download(uploadFolder + filename);  
}// const path=require('path');
// const util=require('util');
// const Content = require('../models/content');
// exports.upload=async(req,res,next)=>{
    

//   try{
//     const file=req.files.file;
//     const fileName=file.name;
//     const size=file.data.length;
//     const extension=path.extname(fileName);
//     const allowedExtensions= /png|jpeg|jpg|gif|pdf|txt|csv|doc|xls|bmp|exe|dll|rar|html/;

//     if(!allowedExtensions.test(extension))throw "Unsupported format";
//     if(size>5000000)throw "File must be less than 5mb";

//     const md5=file.md5;

//     console.log(md5);
//     const URL=fileName  ;

//      await util.promisify(file.mv)(  URL);
//      let result = await Content.create(md5);
//     res.json({
//       message:"File uploaded successfully!!",url:URL
//     })

//   }catch(err){
//     console.log(err);
//     res.status(500).json({
//       message:err,
//     })
//   }




// }
