
const ModelUSerMusician=require('../models/user_musician')



async function createUserMusician(req, res) {
    try{
      let body =req.body;

        const obMusicians ={
          user_published: req.user_id, //params passed int middlewares
          musician: body.musician_id,
          description: body.description,
        }
      const userMusician = await ModelUSerMusician.getUserMusicianByUserAndMusician(req.user_id,body.musician_id);
      if(userMusician.length>0){
    return    res.json({
           error: true,
           message: 'error, User had registro similar.',
           userMusician

       })
      }


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

         const musicians = await ModelUSerMusician.getAllUserMusicians();
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
    getUserMusicianByMusician
}
