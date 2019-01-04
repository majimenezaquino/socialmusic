const express=require('express')
const router =express.Router();
const controllerQualification=require('../controller/qualification')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/qualification',[authentication],controllerQualification.createQualification);
router.get('/qualification/:music',[authentication],controllerQualification.getAllQualificationByMusicAndUser);
router.get('/qualifications/:music',[authentication],controllerQualification.getAllQualificationByMusic);
router.get('/qualificationcount/:music',[authentication],controllerQualification.getAllQualificationByMusicCount);
module.exports=router;
