const express=require('express')
const router =express.Router();
const Notification=require('../controller/notification')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')

router.get('/notificacion',[authentication],Notification.getNotification);


module.exports=router;
