 const express = require('express');
const music_model =require('../models/musics')
const {authentication}=require('../middlewares/authentication')
const {UPLOADPATH}=require('../config/index')
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




app.post('/upload/image', function (req, res, next) {
    // req.file is the `avatar` file
    console.log("estoy aqui")
     let storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `${UPLOADPATH}/images`);
        },
        filename: function (req, file, cb) {
          cb(null, `${Date.now()}.${getRandomArbitrary(00,100)}.${getExtension(file.originalname)}`)
        },
        onFileUploadStart: function (file) {
            console.log(file.originalname + ' is starting ...')
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


/*
         if (file.) {
            return callback(res.status(400).json({
                error: true,
                message: 'file not allower'
            }));
         }
         */


             callback(null, true)

     }

     }).single( 'image')

    // req.body will hold the text fields, if there were any
    upload(req,res,function(err){
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
        res.status(200).json({
            error: false,
            message: `file uploaded.`
        });
    });


  })

module.exports=app;
