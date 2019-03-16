const express = require('express');
const music_model =require('../models/musics')
const {authentication}=require('../middlewares/authentication')
const {UPLOADPATH}=require('../config/index')
const modelUser =require('../models/user');
const ModelPlaylist =require('../models/albumes');
const modelNotification =require('../models/notification.js');
const modelPravacy =require('../models/privacies.js');
const helper =require('../helpers/rendering.js');
const fs =require("fs");
const  md5 = require('md5');
const app = express();

const multer =require('multer')
const MAXSIZE_UPLOAD = 2*1024*1024; //un mega bite
let filesize=undefined;
//receive a file name and return a extension
function getExtension(_filename){
    let extension =_filename.split('.');
     extension=extension[extension.length-1];
     return extension.toLowerCase();

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }




app.put('/upload/playlist/:id',[authentication], function (req, res, next) {
  let user_id =req.user_id;
     let storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `${UPLOADPATH}/images`);
        },
        filename: function (req, file, cb) {
          cb(null, `${Date.now()}.${getRandomArbitrary(00,100)}.${getExtension(file.originalname)}`)
        },
        onFileUploadStart: function (file) {
        }

      });


    let upload = multer({
        limits: { fieldSize: MAXSIZE_UPLOAD },
        storage: storage,

        fileFilter: function (req, file, callback) {
         let ext = getExtension(file.originalname);
         if (ext !== 'png' && ext !== 'jpg'  && ext !== 'jpeg') {
            return callback(res.status(400).json({
                error: true,
                message: 'file not allower'
            }));
         }
             callback(null, true)

     }

     }).single( 'image')

    // req.body will hold the text fields, if there were any
    upload(req,res,async function(err){
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
           return res.status(200).json({
                error: false,
                message: err.MulterError
            });
          } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(200).json({
                error: false,
                message: err.MulterError
            });
          }
          //rendering image
          helper.renderingImage (req.file.filename,500, 500, async function(path){
            // let oldFile =`${UPLOADPATH}/images/${req.file.filename}`
            // fs.unlinkSync(oldFile);

              let playlist_id=req.params.id;
              let plylist_tmp={
                name: req.body.name,
                privacy: req.body.privacy,
                user_published: req.user_id,
                img: path
              }
              let playlist = await ModelPlaylist.updateAlbumes(playlist_id,plylist_tmp);

      return  res.status(200).json({
            error: false,
            message: `file uploaded.`,
            playlist
        });

          });



    });


  })

module.exports=app;
