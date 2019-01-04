const {PASS_KEY}=require('../config/index')
const jwt = require('jsonwebtoken');

const  authentication = function (req, res, next) {
   
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
req.user_id =decod.data.id;
  next();

});
 
};



const  checkAdminRol = function (req, res, next) {
   
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
let user= decod.data

const admin_rol ='ADMIN_ROL'
 if(user.rol==admin_rol){
  next();
 }else{
  return res.status(401).json({
    error: true,
    err: {
        message: 'Unauthorized user don`t have permission'
    }
});
 }

});
 
};

  module.exports={
    authentication,
    checkAdminRol
  }