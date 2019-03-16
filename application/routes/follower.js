const express=require('express')
const router =express.Router();
const Followers=require('../controller/followers')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router Followers
router.post('/followers',[authentication],Followers.createFallowers)
// router.put('/followers/:id',[authentication,checkAdminRol],Followers.updateFollowers)
//router.get('/followers/',[authentication],Followers.getAllFallowersByUser)
router.get('/followers/',[authentication],Followers.getAllFallowersByUser)
// //http://localhost:3001/api/Followerss/5baa304256fa4932305c18a6/?token=
// router.get('/followers/:id',[authentication,checkAdminRol],Followers.getFollowersById)
// router.delete('/followers/:id',[authentication,checkAdminRol],Followers.disabledFollowers)
module.exports=router;
