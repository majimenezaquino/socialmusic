const express=require('express')
const router =express.Router();
const ControllerSongPlayed=require('../controller/song-played.js')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/played',[authentication],ControllerSongPlayed.creatPlayed);
// router.get('/qualification/:music',[authentication],ControllerSongPlayed.getAllQualificationByMusicAndUser);
// router.get('/qualifications/:music',[authentication],ControllerSongPlayed.getAllQualificationByMusic);
// router.get('/qualificationcount/:music',[authentication],ControllerSongPlayed.getAllQualificationByMusicCount);
module.exports=router;
