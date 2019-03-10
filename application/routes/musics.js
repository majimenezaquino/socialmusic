const express=require('express')
const router =express.Router();
const Music=require('../controller/musics')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router Music
// router.post('/music',Music.createMusic)
// router.put('/music/:id',[authentication,checkAdminRol],Music.updateMusic)
// router.get('/music',[authentication,checkAdminRol],Music.getAllMusics)
router.get('/musics',Music.getAllMusics)
router.get('/musics/:id',[authentication],Music.getMusicById) 
router.get('/musicspending',[authentication],Music.getMusicsIncompleteByUser)
router.get('/musicsbyuser/:id?',Music.getMusicsByUser)
router.get('/checkuseruploadmusics',[authentication],Music.checkUserUploadMusics);
//router.delete('/music/:id',[authentication,checkAdminRol],Music.disabledMusic)

module.exports=router;
