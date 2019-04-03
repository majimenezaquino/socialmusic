
const ModelUSerMusician=require('../models/user_musician')
 const ModelTypeAccounts= require('../models/type-accounts.js');
const ModelUser= require('../models/user');

async function createUserMusician(req, res) {
    try{
      let body =req.body;

        const obMusicians ={
          user_published: req.user_id, //params passed int middlewares
          musicians:body.musicians,
          description: body.description,
        }
    //   const userMusician = await ModelUSerMusician.getUserMusicianByUserAndMusician(req.user_id,body.musician_id);
    //   if(userMusician.length>0){
    // return    res.json({
    //        error: true,
    //        message: 'error, User had registro similar.',
    //        userMusician
    //
    //    })
    //   }


     const musician = await ModelUSerMusician.createUserMusician(obMusicians)
     res.json({
        error: false,
        message: 'surccess',
        musician

    })

    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }


        async function getAllUserMusicians(req, res) {
            try{
                let user= await ModelUser.getUserById(req.user_id);
                let  limit_musician =  await ModelTypeAccounts.getTypeAccountsById(user.typeaccounts);

             const musicians = await ModelUSerMusician.getAllUserMusicians();
             res.json({
                error: false,
                message: 'surccess',
                musicians,
                limit_musician

            })

            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }



                  async function getMusicianByUser(req, res) {
                    try{
                      let user_id =req.params.id;
                        let user= await ModelUser.getUserById(req.user_id);
                        let  limit_musician =  await ModelTypeAccounts.getTypeAccountsById(user.typeaccounts);

                     const musicians = await ModelUSerMusician.getMusicianByUser(user_id);
                     res.json({
                        error: false,
                        message: 'surccess',
                        musicians,
                        limit_musician: limit_musician[0].limit_musician || 0

                    })

                    }catch(ex){
                        res.status(400).json({
                            error: ex

                        })
                    }
                    }



        async function getUserMusicianByMusician(req, res) {
            try{
               let type_musician=req.params.type || 0;
               let _since=req.query.since || 0;
               let _limit= 10; //nomber of item
               _since=Number(_since)
             const musicians = await ModelUSerMusician.getUserMusicianByMusician(type_musician,_since,_limit);
             res.json({
                error: false,
                message: 'surccess',
                musicians

            })

            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }


module.exports={
    createUserMusician,
    getAllUserMusicians,
    getMusicianByUser,
    getUserMusicianByMusician
}
