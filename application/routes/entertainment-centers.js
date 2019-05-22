const express=require('express')
const router =express.Router();
const EntertainmentCenters=require('../controller/entertainment-centers.js')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router Followers
router.post('/entertainmentcenters',[authentication],EntertainmentCenters.createEntertainmentCenters)
router.post('/entertainmentcentersday/:language',[authentication],EntertainmentCenters.getAllEntertainmentCentersDay)
// router.put('/followers/:id',[authentication,checkAdminRol],Followers.updateFollowers)
//router.get('/followers/',[authentication],Followers.getAllFallowersByUser)
//router.get('/entertainmentcenters/',[authentication],Followers.getAllFallowersByUser)
// //http://localhost:3001/api/Followerss/5baa304256fa4932305c18a6/?token=
// router.get('/followers/:id',[authentication,checkAdminRol],Followers.getFollowersById)
// router.delete('/followers/:id',[authentication,checkAdminRol],Followers.disabledFollowers)
module.exports=router;
