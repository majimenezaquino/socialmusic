const express=require('express')
const router =express.Router();
const controllerdedicate=require('../controller/song_dedicate')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/musicdedicate',[authentication],controllerdedicate.createSongDedicate);
//router.get('/musicdedicate/:music',[authentication],controllerdedicate.getAllSongDedicatesByMusic);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusicAndUser);
// router.get('/musicdedicate/:music',[authentication],controllerdedicateds.getAlldedicatedsByMusic);
module.exports=router;
