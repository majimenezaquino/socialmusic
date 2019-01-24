const express=require('express')
const router =express.Router();
const Genre=require('../controller/generController')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router Genre
router.post('/genres',[authentication,checkAdminRol],Genre.createGenre)
router.put('/genres/:id',[authentication,checkAdminRol],Genre.updateGenre)
router.get('/genres',[authentication,],Genre.getAllGenres)
//http://localhost:3001/api/genres/5baa304256fa4932305c18a6/?token=
router.get('/genres/:id',[authentication,checkAdminRol],Genre.getGenreById)
router.delete('/genres/:id',[authentication,checkAdminRol],Genre.disabledGenre)
module.exports=router;
