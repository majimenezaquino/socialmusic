
const MusicsPlayList =require('../models/playlist')

//register new user
async function createMusicsPlayList(req, res) {
    try{
      const  body=req.body;
        let user_id= req.user_id;
        const  obPlaylist={
          music: body.music,
          playlist: body.album,
            user_created: user_id
      }
          let playlist= await MusicsPlayList.createMusicsPlayList(obPlaylist);
          res.json({
              error: false,
              message: 'surccess, playlist was cread',
              playlist
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }




    //register new user
    async function updateMusicsPlayList(req, res) {
        try{
            let id = req.query.id;
            let user_id= req.user_id;
            body=req.body;

            const  obPlaylist={
                music: body.music,
                playlist: body.album,
                user_created: user_id
            }
         let playlist= await MusicsPlayList.updateMusicsPlayList(id,obPlaylist);
              res.json({
                  error: false,
                  message: 'surccess, playlist was updated',
                  playlist
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }

        async function disabledMusicsPlayList(req, res) {
            try{
                let id = req.query.id;

             let playlist= await MusicsPlayList.disabledMusicsPlayList(id);
                  res.json({
                      error: false,
                      message: 'surccess, playlist was disabled',
                      playlist
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }




//get playlist by albums
    async function getPlayListByAlbum(req, res) {
        try{
            let user_id =req.user_id;
            let albumid =req.params.id;
             //var for pagination
             console.log(albumid)
        let _since=req.query.since || 0;
        let _limit= 10; //nomber of item
        _since=Number(_since)
              let playList= await MusicsPlayList.getPlayListByAlbum(albumid,user_id,_since,_limit);
              res.json({
                  error: false,
                  message: 'surccess',
                  playLists: playList
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }


        async function getMusicsPlayListById(req, res) {
            let id = req.params.id;
            try{
                  let playlist= await MusicsPlayList.getMusicsPlayListById(id);
                  res.json({
                      error: false,
                      message: 'surccess',
                      playlist
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }

module.exports={
    createMusicsPlayList,
    updateMusicsPlayList,
    disabledMusicsPlayList,
    getPlayListByAlbum,
    getMusicsPlayListById

}
