const express = require('express');
const fileUpload = require('express-fileupload');
const music_model =require('../models/musics')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
const {isUserAddress}=require('../middlewares/requirements_upload_music')
const {PATH_FILES}=require('../config/index')
const app = express();

// default options


app.use(fileUpload());




app.post('/upload',[authentication,isUserAddress],async function(req, res) {
  if (!req.files)
    return res.status(400).json({
        error: true,
        message: 'No files were uploaded.'
    });

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let fileUpload = req.files.fileUpload;
  let file_extension =getExtension(fileUpload.name);

  const extension_allower =['wpw','ogg','midi','mp3'];

  if(extension_allower.indexOf(file_extension)<0){
      //extension no allower
      return res.status(400).json({
          error: true,
          message: 'Extension no allowed'
      })
  }
  //user from middleware
  const userid =  req.userid
  let music_name_id;
  try{
    const body= req.body
    const new_music ={
      title: body.title,
      author: body.author,
      description: body.description,
      genre :body.genre, //id of genre
      user_public: userid, // id  of user
      url: null
    }
    const music = await music_model.createMusic(new_music);
     music_name_id= music._id;

  }catch(ex){
  return  res.status(500).json({
        error:  true,
        message: ex
    })
  }
  // Use the mv() method to place the file somewhere on your server
  let path_music =`${PATH_FILES}/musics/${music_name_id}.${file_extension}`
  fileUpload.mv(path_music, function(err) {
    if (err)
      return res.status(500).json({
          error: true,
          message: err
      });
     const url_music={url: `${music_name_id}.${file_extension}`}
     music_model.updateMusic(music_name_id,`${music_name_id}.${file_extension}`).then(music=>{
      
       return res.json({
            error:false,
            music: music,
            message: 'File seve!'
        });
     }).catch(err=>{
        return res.status(500).json({
            error:true,
            message: 'File not save!'
        });
     })



  });
});

//receive a file name and return a extension
function getExtension(_fileName){
    let file_extension =_fileName.split('.');
    file_extension=file_extension[file_extension.length-1];
     return file_extension.toString();
}

module.exports=app;
