const express=require('express')
const router =express.Router();
const songDedicate=require('../controller/song_dedicate')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/songdedicate',[authentication],songDedicate.createSongDedicate)
router.get('/songdedicate/:user_receive',[authentication],songDedicate.getAllSongDedicatedByUserReceive)
router.get('/songdedicate',[authentication],songDedicate.getAllSongDedicatedByUserDedicated)
// router.get('/songdedicate/:id',[authentication],MusicsPlayList.getMusicsPlayListById)
// router.put('/songdedicate/:id',[authentication],MusicsPlayList.updateMusicsPlayList)
// router.delete('/songdedicate/:id',[authentication],MusicsPlayList.disabledMusicsPlayList)
module.exports=router;
