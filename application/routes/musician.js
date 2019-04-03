const express=require('express')
const router =express.Router();
const Musician=require('../controller/musicians')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router Genre
router.post('/musician',[authentication,checkAdminRol],Musician.createMusician)
router.get('/musician',Musician.getAllMusicians);
//router.get('/musician/:id',Musician.getMusicianByUser);
module.exports=router;
