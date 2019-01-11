const express=require('express')
const router =express.Router();
const Address=require('../controller/address')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')

//address
router.post('/address',[authentication],Address.createAddress)
router.put('/address',[authentication],Address.updateAddress)
// router.put('/address/:id',[authentication,checkAdminRol],Genre.updateGenre)
// router.get('/address/',[authentication,checkAdminRol],Genre.getAlladdress)
//id user
 router.get('/address',[authentication],Address.getAddressByUser)
// router.delete('/address/:id',[authentication,checkAdminRol],Genre.disabledGenre)
module.exports=router;
