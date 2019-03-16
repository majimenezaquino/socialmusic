const  md5 = require('md5');
const modelUser =require('../models/user')
const {PASS_KEY}=require('../config/index')
//const underscore = require('underscore');
//register new user
async function createUser(req, res) {
    try{
        //let body = underscore.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);
        body=req.body;

        let _user =await modelUser.getUserByEmailStatus(body.email);

        if(_user.length>0){
            return res.json({
              error: true,
              message: 'This email is already in use',

          })
        }
        const  inpuUser={
          name: body.name,
          email: body.email,
          password: md5(PASS_KEY+body.password)
      }

          let user= await modelUser.createUser(inpuUser);
          res.json({
              error: false,
              message: 'surccess, user was cread',
              users: user
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }




    //register new user
    async function updateUser(req, res) {
        try{
            let id = req.user_id;
            body=req.body;


          const userData={
               name: body.name,
               last_name: body.last_name,
               birth_date: body.birth_date,
               phone: body.phone,
               gender: body.gender,
          }
         let user= await modelUser.updateUser(id,userData);
            res.status(200).json({
                  error: false,
                  message: 'surccess, user was update',
                  user: user
              })
        }catch(ex){
            res.status(400).json({
                error: ex,
                message: 'hola come'

            })
        }
        }

        async function disabledUser(req, res) {
            try{
                let id = req.params.id;

             let user= await modelUser.disabledUser(id);
                  res.json({
                      error: false,
                      message: 'surccess, user was disabled',
                      users: user
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }




            //get all suers
                async function getAllUsers(req, res) {
                    try{
                         //var for pagination
                    let _since=req.query.since || 0;
                    let _limit= 10; //nomber of item
                    _since=Number(_since)

                          let user= await modelUser.getAllUsers(_since,_limit);
                          res.json({
                              error: false,
                              message: 'surccess',
                              users: user
                          })
                    }catch(ex){
                        res.status(400).json({
                            error: ex

                        })
                    }
                    }




                    //get all suers
                        async function searchUser(req, res) {
                            try{
                                 //var for pagination
                            let keyword =req.params.keyword;


                                  let user= await modelUser.searchUser(keyword);
                                  res.json({
                                      error: false,
                                      message: 'surccess',
                                      users: user
                                  })
                            }catch(ex){
                                res.status(400).json({
                                    error: ex

                                })
                            }
                            }


                async function getUserById(req, res) {
                    let id = req.params.id;
                    try{
                          let user= await modelUser.getUserById(id);
                          res.json({
                              error: false,
                              message: 'surccess',
                              user
                          })
                    }catch(ex){
                        res.status(400).json({
                            error: ex

                        })
                    }
                    }




                    async function getUserPublicById(req, res) {
                      let id = req.params.id;
                      try{

                            let user= await modelUser.getUserPublicById(id);
                            res.json({
                                error: false,
                                message: 'surccess',
                                user
                            })
                      }catch(ex){
                          res.status(400).json({
                              error: ex

                          })
                      }
                      }




module.exports={
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    disabledUser,
    getUserPublicById,
    searchUser

}
