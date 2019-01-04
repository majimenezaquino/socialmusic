const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options


app.use(fileUpload());




app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).json({
        error: true,
        message: 'No files were uploaded.'
    });
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let fileUpload = req.files.fileUpload;
  let file_extension =getExtension(fileUpload.name);

  const extension_allower =['jpg','gif','png','jpeg','mp3'];

  if(extension_allower.indexOf(file_extension)<0){
      //extension no allower
      return res.status(400).json({
          error: true,
          message: 'Extension no allowed'
      })
  }



  // Use the mv() method to place the file somewhere on your server
   let dates ='884840000040040';
  fileUpload.mv(`application/uploads/${dates}.${file_extension}`, function(err) {
    if (err)
      return res.status(500).json({
          error: true,
          message: err
      });
 
    res.json({
        error:false,
        message: 'File uploaded!'
    });
  });
});

//receive a file name and return a extension
function getExtension(_fileName){
    let file_extension =_fileName.split('.');
    file_extension=file_extension[file_extension.length-1];
     return file_extension.toString();     
}

module.exports=app;