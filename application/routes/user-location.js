const express=require('express')
const router =express.Router();
const controllerUserLocation=require('../controller/user-location')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/userlocation',[authentication],controllerUserLocation.createLocation);
// router.get('/usermusician',[authentication],controllerUserLocation.getAllUserMusicians);
// router.get('/usermusician/:id',[authentication],controllerUserLocation.getMusicianByUser);
//router.get('/usermusician',[authentication],controllerUserLocation.getUserMusicianByUserAndMusician);
//router.get('/musicdedicate/:music',[authentication],controllerdedicate.getAllSongDedicatesByMusic);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusicAndUser);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusic);
module.exports=router;
