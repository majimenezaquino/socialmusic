
const modelReactions =require('../models/reactions')

//register new user
async function createReaction(req, res) {
    try{
      const  body=req.body;
        let user_id= req.user_id;
        let music =body.music_id || 0;
        //obj reaction temporary
        //check if user already reacted this music
        let reaction_user  = await modelReactions.getAllreactionsByMusicAndUser(music,user_id);
           if(reaction_user.length>0){
            return res.json({
                 error: true,
                 message: 'error, already reacted this music',
             })
           }
        const  reaction_tmp={
            type_reaction: body.type_reaction,
            music_reacted: body.music_id,
            user_reacted: user_id
      }

          let reaction= await modelReactions.createReaction(reaction_tmp);
          res.json({
              error: false,
              message: 'Success, the reaction was to do.',
              reaction
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }


    //register new user
    async function updateReaction(req, res) {
        try{
          const  body=req.body;
            let user_id= req.user_id;
            let reaction_id= req.params.id;
            let music =body.music_reacted || 0;
            //obj reaction temporary
            //check if user already reacted this music

            const  reaction_tmp={
                type_reaction: body.type_reaction,
                user_reacted: user_id
          }

              let reaction= await modelReactions.updateReaction(reaction_id,reaction_tmp);
              res.json({
                  error: false,
                  message: 'Success, the reaction was to updated.',
                  reaction
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }






//get playlist by albums
async function getAllreactionsByMusic(req, res) {
    try{
        let music =req.params.music || 0;
        let _since=req.query.since || 0;
        let _limit= 10; //nomber of item
        _since=Number(_since);
          let reactions= await modelReactions.getAllreactionsByMusic(music);
          res.json({
              error: false,
              message: 'surccess',
              reactions
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }


    async function getAllreactionsByMusicAndUser(req, res) {
        try{
           let user_id= req.user_id || 0;
            let music =req.params.music || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since);
              let reactions= await modelReactions.getAllreactionsByMusicAndUser(music,user_id);
              res.json({
                  error: false,
                  message: 'surccess',
                  reactions
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




module.exports={
    getAllreactionsByMusic,
    getAllreactionsByMusicAndUser,
    createReaction,
    updateReaction

}
