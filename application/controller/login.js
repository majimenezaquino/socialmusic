const  md5 = require('md5');
const jwt = require('jsonwebtoken');
const modelUser =require('../models/login')
const {PASS_KEY}=require('../config/index')
//const underscore = require('underscore');
//register new user





//get all suers
    async function getUserLogin(req, res) {
        const body =req.body;

     

        try{

            if(body.email.length>0 && body.password.length>0){
         
          
            }else{
              return res.status(400).json({
                  error: true,
                  message: 'Username and password is required'
                })
            }

        
              let user= await modelUser.getUserLogin(body.email,md5(PASS_KEY+body.password));

             

              //set token
             const token=  jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60*24*30),
                data: {
                    rol: user[0].rol,
                    id: user[0]._id,
                    name: user[0].name
                }
              }, PASS_KEY);

              res.json({
                  error: false,
                  message: 'surccess',
                  token,
                  users: {
                    status: user[0].status,
                    id: user[0]._id,
                    name: user[0].name
                  }
              })
        }catch(ex){
            
          return  res.status(401).json({
                error: true,
                message: 'username or password is inscorrect'

            })
        }
        }



module.exports={
    getUserLogin

}
