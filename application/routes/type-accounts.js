const express=require('express')
const router =express.Router();
const controllerTypeAccounts=require('../controller/type-accounts.js')
const {authentication ,checkAdminRol}=require('../middlewares/authentication')
//router user
router.post('/typeAccounts',controllerTypeAccounts.createTypeAccounts);
router.get('/typeAccounts',controllerTypeAccounts.getTypeAccounts);
router.put('/typeAccounts',controllerTypeAccounts.updateTypeAccounts);
// router.get('/musicdedicate/:music',[authentication],controllerTypeAccountsds.getAlldedicatedsByMusic);
module.exports=router;
