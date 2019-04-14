
const modelSongDedicate =require('../models/song-played.js')

//register new user
async function creatPlayed(req, res) {
    try{
      const  body=req.body;
       let _locat={
         music_played: body.music_id,
         user_played: req.user_id,
         user_location: body.location_id || null,
         current_time: body.current_time || 0
       }
       let played= undefined;
       if(body._id!=undefined){
         played= await modelSongDedicate.updatePlayed(body._id,_locat);
       }else{
          played= await modelSongDedicate.creatPlayed(_locat);
       }




          res.json({
              error: false,
              message: 'Success, the song  was dedicated.',
            played
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }







module.exports={
  creatPlayed

}
