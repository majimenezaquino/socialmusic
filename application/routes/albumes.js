const express=require('express')
const router =express.Router();
const Albumes=require('../controller/albumes.js')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/albumes',[authentication],Albumes.createAlbumes)
router.put('/albumes/:id',[authentication],Albumes.updateAlbumes)
router.get('/albumes',[authentication],Albumes.getAllAlbumes)
router.get('/albumesbyuser',[authentication],Albumes.getAllAlbumesByUser)
router.get('/albumes/:id',[authentication],Albumes.getAlbumesById)
router.delete('/albumes/:id',[authentication],Albumes.disabledAlbumes)
module.exports=router;
