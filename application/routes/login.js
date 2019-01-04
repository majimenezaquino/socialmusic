const express=require('express')
const router =express.Router();
const User=require('../controller/login')
const aut=require('../middlewares/authentication')
//router user

router.post('/login',User.getUserLogin)
router.post('/rol',aut.authentication,function(req,res){
    res.json({
        message: 'prueba'
    })
})
module.exports=router;
