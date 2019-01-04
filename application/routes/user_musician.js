const express=require('express')
const router =express.Router();
const controllerUserMusician=require('../controller/user_musician')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/usermusician',[authentication],controllerUserMusician.createUserMusician);
router.get('/usermusician',[authentication],controllerUserMusician.getAllUserMusicians);
//router.get('/usermusician',[authentication],controllerUserMusician.getUserMusicianByUserAndMusician);
//router.get('/musicdedicate/:music',[authentication],controllerdedicate.getAllSongDedicatesByMusic);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusicAndUser);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusic);
module.exports=router;
