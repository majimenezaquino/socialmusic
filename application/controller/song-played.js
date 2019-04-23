
const modelSongDedicate =require('../models/song-played.js');
const Albumes =require('../models/albumes');
const MusicsPlayList =require('../models/playlist')
const Pravacy =require('../models/privacies.js');
const ALBUMES_DEFULT ="Músicas escuchadas";
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
            //*************************************************************************************
            //create playlist is not exist
              let alb =await  Albumes.getAlbumesByUserAndName(req.user_id,ALBUMES_DEFULT) || [];
              if(alb.length>0){

                ////


                let existMusicAndUser =await MusicsPlayList.getPlaylistByUserAndMusic(req.user_id,body.music_id,alb[0]._id);
                if(existMusicAndUser.length>0){
                return  res.json({
                      error: true,
                      message: 'La música existe en esta lista de reproducción ',
                  })
                }

                const  obPlaylist={
                  music: body.music_id,
                  playlist: alb[0]._id,
                  user_published: req.user_id
              }

                   await MusicsPlayList.createMusicsPlayList(obPlaylist);


              }else{
              let id_pravacy=  await   Pravacy.getAllPrivaciesByName('privada');
                let albumes_tmp ={
                    name: ALBUMES_DEFULT,
                    privacy: id_pravacy[0]._id,
                    user_published: req.user_id,
                }
                  let album_create =await  Albumes.createAlbumes(albumes_tmp)


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
