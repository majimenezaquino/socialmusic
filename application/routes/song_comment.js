const express=require('express')
const router =express.Router();
const SongComment=require('../controller/song_comments')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router SongComment
router.post('/songcomment',[authentication],SongComment.createSongComments)
 router.put('/songcomment/:id',[authentication],SongComment.updateSongComment)
 router.get('/songcomment/:id',[authentication],SongComment.getAllSongCommentsByMusic)
//router.get('/musics',SongComment.getAllSongComments)
router.delete('/songcomment/:id',[authentication],SongComment.disabledSongComment)

module.exports=router;
