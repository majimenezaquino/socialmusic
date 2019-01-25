const express=require('express')
const router =express.Router();
const modelPravacies=require('../controller/privacies')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user

router.get('/privacies',[authentication],modelPravacies.getAllPrivacies)
module.exports=router;
