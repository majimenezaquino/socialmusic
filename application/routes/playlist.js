const express=require('express')
const router =express.Router();
const MusicsPlayList=require('../controller/playlist')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/playlist',[authentication],MusicsPlayList.createMusicsPlayList)
router.get('/playlist/:id',[authentication],MusicsPlayList.getPlayListByAlbum)
router.get('/playlistid/:id',[authentication],MusicsPlayList.getMusicsPlayListById)
router.put('/playlist/:id',[authentication],MusicsPlayList.updateMusicsPlayList)
router.delete('/playlist/:id',[authentication],MusicsPlayList.disabledMusicsPlayList)
module.exports=router;
