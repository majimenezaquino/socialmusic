const express=require('express')
const router =express.Router();
const Notification=require('../controller/notification')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')

router.get('/notificacion',[authentication],Notification.getNotification);
router.put('/notificacion/:id',[authentication],Notification.updateNotification);
router.put('/notificacionview',[authentication],Notification.viewedNotification);


module.exports=router;
