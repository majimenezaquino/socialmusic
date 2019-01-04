const {PASS_KEY}=require('../config/index')
const jwt = require('jsonwebtoken');
const Address=require('../models/address')

//check if user have an address
const  isUserAddress =  function (req, res, next) {

  let token = req.query.token;

token = jwt.verify(token, PASS_KEY,(err, decod)=>{
  if (err) {
    return res.status(401).json({
        error: true,
        err: {
            message: 'Token no allowed'
        }
    });
}

//set next required

let user_id =decod.data.id;
 Address.getAddressByUser(user_id).then(address=>{
   if(address.length>0){
     req.userid = user_id;
     next();
   }else{
    return res.status(400).json({
      error: true,
      message: 'Unauthorized register yours address',

    });
   }
 }).catch(err=>{
  return res.status(400).json({
    error: true,
    message: err,
  })
 })

});

};

  module.exports={
    isUserAddress
  }
