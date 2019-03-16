
const SongComments =require('../models/song_comment')
const modelNotification =require('../models/notification.js');
const modelMusic= require('../models/musics');
const {Event} =require('../helpers/events.js');
const  md5 = require('md5');
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

              let usersComments= await SongComments.getAllSongCommentsByMusic(body.music_id);
              let music_coment= await modelMusic.getMusicById(body.music_id);
              let user_upload_music_id= music_coment[0].user_published._id;




                let commentMap =usersComments.filter(function(comment){
                  return comment.user_commented._id!= req.user_id;
                });


                let code =md5(Date.now());



          let notification=commentMap.map(function(comment){

                return {
                      user_published: req.user_id,
                      user_target: comment. user_commented._id,
                      title: `Comento`,
                      key:  code,
                      description: body.comment,
                 }
          });


          //notify to user  music uploaded if user is different to user  commented
            let user_upload_comment =notification.filter(function(notify){
              return notify.user_target==user_upload_music_id;
            })



          if(!user_upload_comment.length>0 && user_upload_music_id!=req.user_id){
          notification.push( {
                  user_published: req.user_id,
                  user_target: user_upload_music_id,
                  title: `Comento`,
                  key:  code,
                  description: body.comment,
             });
          }

  const result = [];
  const map = new Map();
  for (const item of notification) {
      if(!map.has(item.user_target)){
          map.set(item.user_target, true);    // set any value to Map
          result.push(item);
      }
  }



          //insert notification
          let notifications =await modelNotification.createNotification(result);

        Event.emit("EVEN_NOTIFICATION",{key: code})

        return  res.json({
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

                let commentget= await SongComments.getSongCommentsById(id);

                  if(commentget[0].user_commented!=req.user_id){

                    return res.json({
                        error: true,
                        message: 'Error user no allower',
                        comment: []
                    })
                  }
                  




         let comment= await SongComments.updateSongComment(id,songcomment_obj);
              res.json({
                  error: false,
                  message: 'surccess, song comment was updated',
                  comment
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

             let comment= await SongComments.deleteSongComment(id);
                  res.json({
                      error: false,
                      message: 'surccess, song comment was disabled',
                      comment
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
                          let countComment= await SongComments.getCountSongCommentsByMusic(_music);
                          let songcomments= await SongComments.getAllSongCommentsByMusic(_music);
                          res.json({
                              error: false,
                              message: 'surccess',
                              commentCount: countComment,
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
                  let comment= await SongComments.getSongCommentsById(id);
                  res.json({
                      error: false,
                      message: 'surccess',
                      comment
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
