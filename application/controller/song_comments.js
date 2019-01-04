
const SongComments =require('../models/song_comment')

//register new user
async function createSongComments(req, res) {
    try{
      const  body=req.body;
        const  songcomment_obj={
            comment_message: body.comment,
            music_commented: body.music_id,
            user_commented: req.user_id
          }
          let songcomment= await SongComments.createSongComment(songcomment_obj);
          res.json({
              error: false,
              message: 'surccess, song was commented.',
              songcomment
          })
    }catch(ex){
        res.status(400).json({
            error: {error:true, message: ex}

        })
    }
    }




    //register new user
    async function updateSongComment(req, res) {
        try{
            let id = req.params.id;
            body=req.body;

            const  songcomment_obj={
                comment_message: body.comment,
              }

         let songcomment= await SongComments.updateSongComment(id,songcomment_obj);
              res.json({
                  error: false,
                  message: 'surccess, song comment was updated',
                  songcomment
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }

        async function disabledSongComment(req, res) {
            try{
                let id = req.params.id;

             let playlist= await SongComments.deleteSongComment(id);
                  res.json({
                      error: false,
                      message: 'surccess, song comment was disabled',
                      playlist
                  })
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }




            //get playlist by albums
                async function getAllSongCommentsByMusic(req, res) {
                    try{

                        let _music =req.params.id;

                    let _since=req.query.since || 0;
                    let _limit= 10; //nomber of item
                    _since=Number(_since)
                          let songcomments= await SongComments.getAllSongCommentsByMusic(_music);
                          res.json({
                              error: false,
                              message: 'surccess',
                               songcomments
                          })
                    }catch(ex){
                        res.status(400).json({
                            error: ex

                        })
                    }
                    }



                    //get playlist by albums
                        async function getCountSongCommentsByMusic(req, res) {
                            try{

                                let _music =req.params.id;
                                  let songcomments= await SongComments.getCountSongCommentsByMusic(_music);
                                  res.json({
                                      error: false,
                                      message: 'surccess',
                                       songcomments
                                  })
                            }catch(ex){
                                res.status(400).json({
                                    error: ex

                                })
                            }
                            }


        async function getSongCommentsById(req, res) {
            let id = req.params.id;
            try{
                  let playlist= await SongComments.getSongCommentsById(id);
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
    createSongComments,
    getAllSongCommentsByMusic,
    updateSongComment,
    disabledSongComment,
    getSongCommentsById

}
