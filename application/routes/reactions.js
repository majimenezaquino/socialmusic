const express=require('express')
const router =express.Router();
const controllerReactions=require('../controller/reactions')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/reaction',[authentication],controllerReactions.createReaction);
router.put('/reaction/:id',[authentication],controllerReactions.updateReaction);
router.get('/reaction/:music',[authentication],controllerReactions.getAllreactionsByMusicAndUser);
router.get('/reactions/:music',[authentication],controllerReactions.getAllreactionsByMusic);
module.exports=router;
