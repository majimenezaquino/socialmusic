
const modelSongDedicate =require('../models/song_dedicate')

//register new user
async function createSongDedicate(req, res) {
    try{
      const  body=req.body;
        let user_id= req.user_id;
        let music =body.music_reacted || 0;
        //obj SongDedicate temporary
        //check if user already reacted this music


      //set to array to save
       let dedicaction =req.body.users.map(function(user){
         return {
           type_dedicate: body.type_dedicaction,
           music_dedicated: body.music_id,
           user_receive: user,
           user_dedicated: user_id
         }
       });

          let SongDedicate= await modelSongDedicate.createSongDedicate(dedicaction);


          res.json({
              error: false,
              message: 'Success, the song  was dedicated.',
              SongDedicate
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }






    //get playlist by albums
    async function getAllSongDedicatedByUserReceive(req, res) {
        try{
            let user_receive =req.params.user_receive || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since);
              let SongDedicates= await modelSongDedicate.getAllSongDedicatedByUserReceive(user_receive);
              res.json({
                  error: false,
                  message: 'surccess',
                  SongDedicates
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




        //get playlist by albums
        async function getAllSongDedicatedByUserDedicated(req, res) {
            try{
                let user_receive =req.user_id || 0;
                let _since=req.query.since || 0;
                let _limit= 10; //nomber of item
                _since=Number(_since);
                  let SongDedicates= await modelSongDedicate.getAllSongDedicatedByUserDedicated(user_receive);
                  res.json({
                      error: false,
                      message: 'surccess',
                      SongDedicates
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }


    async function getAllSongDedicatesByMusicAndUser(req, res) {
        try{
           let user_id= req.user_id || 0;
            let music =req.params.music || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since);
              let SongDedicates= await modelSongDedicate.getAllSongDedicatesByMusicAndUser(music,user_id);
              res.json({
                  error: false,
                  message: 'surccess',
                  SongDedicates
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




module.exports={
    createSongDedicate,
    getAllSongDedicatedByUserReceive,
    getAllSongDedicatesByMusicAndUser,
    getAllSongDedicatedByUserDedicated

}
