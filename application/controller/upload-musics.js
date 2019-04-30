const express = require('express');
const music_model =require('../models/musics')
const {authentication}=require('../middlewares/authentication')
const {checkUserUploadMusics}=require('../middlewares/check-upload-music')
const {UPLOADPATH}=require('../config/index')
const { getAudioDurationInSeconds } = require('get-audio-duration')
const app = express();

const multer =require('multer')
const MAXSIZE_UPLOAD = 2*1024*1024; //un mega bite
let filesize=undefined;
let audio_url= undefined;
//receive a file name and return a extension
function getExtension(_filename){
   let extension =_filename.split('.');
    extension=extension[extension.length-1];
    return extension.toLowerCase();

}

function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
 }




app.post('/upload/music',[authentication,checkUserUploadMusics], function (req, res, next) {

   // req.file is the `avatar` file
const user_id =  req.user_id

    let storage = multer.diskStorage({
       destination: function (req, file, cb) {
         cb(null, `${UPLOADPATH}/musics`);
       },
       filename: function (req, file, cb) {
         audio_url=`${Date.now()}.${getRandomArbitrary(00,100)}.${getExtension(file.originalname)}`;
         cb(null, audio_url)
       },


     });


   let upload = multer({
       limits: { fieldSize: MAXSIZE_UPLOAD },
       storage: storage,

       fileFilter: function (req, file, callback) {
        let ext = getExtension(file.originalname);
        if (ext !== 'wpw' && ext !== 'ogg'  && ext !== 'midi' && ext !== 'mp3') {
           return callback(res.status(400).json({
               error: true,
               message: 'file not allower'
           }));
        }

            callback(null, true)

    }

  }).single( 'music')

   // req.body will hold the text fields, if there were any
   upload(req,res,async function(err){
       if (err instanceof multer.MulterError) {
           // A Multer error occurred when uploading.
          return res.status(200).json({
               error: true,
               message: err
           });
         } else if (err) {
           // An unknown error occurred when uploading.
           return res.status(200).json({
               error: false,
               message: err.MulterError
           });
         }
         // check audios
        //get duration auios
      let getDuraction= await  getAudioDurationInSeconds(`${UPLOADPATH}/musics/${audio_url}`)

      let body= req.body
         //data musics
        let _colaboration =function(){
          let _colaborations=    body.colaborations.split(',');
              _colaborations=   _colaborations.filter(function(b){
                if(b!='') return b;
           })
              return _colaborations;
         }



         const new_music ={
          title: body.title,
           description: body.description,
           tags: body.tags,
           genres : body.genres.split(',') || [], //id of genre
           colaborations :  _colaboration(), //id of genre
           user_published: user_id,
           download_allowed: body.download_allowed,
           qualification: 0,
           duration: getDuraction,
           size: req.file.size,
           url: req.file.filename,
           status: 'active'
            // id  of user
         }
         //check response for user

         if(body.title===undefined || body.title==''){
              return  res.status(400).json({
                   error: true,
                   message: `the title is required`
               });
         }

         if(body.description===undefined || body.description==''){
              return  res.status(400).json({
                   error: true,
                   message: `the description is required`
               });
         }

         if(body.tags===undefined || body.tags==''){
              return  res.status(400).json({
                   error: true,
                   message: `the tags is required`
               });
         }

    

         const music = await music_model.createMusic(new_music);


       res.status(200).json({
           error: false,
           message: `file uploaded.`,
           user_id: user_id,
           info_music: req.info_music,
           music
       });
   });


 })

module.exports=app;
