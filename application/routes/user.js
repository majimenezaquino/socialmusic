const express=require('express')
const router =express.Router();
const User=require('../controller/users')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/user',User.createUser)
router.put('/user/',[authentication],User.updateUser)
router.get('/user',[authentication,checkAdminRol],User.getAllUsers)
router.get('/public/user/:id',User.getUserPublicById)
router.get('/user/:id',[authentication,checkAdminRol],User.getUserById)
router.get('/search/:keyword',[authentication],User.searchUser)
router.delete('/user/:id',[authentication,checkAdminRol],User.disabledUser)
module.exports=router;
