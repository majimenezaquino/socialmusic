
const ModelFollower =require('../models/fallowers.js')
const ModelUser =require('../models/user.js')

//register new user
async function createFallowers(req, res) {
    try{
      const  body=req.body;
        let user_id= req.user_id;
        let userfollowee =body.followee_id;
        let  objFallower={
            user_follower: user_id,
            user_followee:  userfollowee
      }
      //
      if(userfollowee==user_id){
        return    res.json({
              error: true,
              message: 'follower and  followee are equals '
          })
      }
      //check user already follow this user
          let _cherck=await ModelFollower.checkUserFAllowier(user_id,userfollowee);
           if(_cherck>0){
             return    res.json({
                   error: true,
                   message: 'already follow this user ',
                   follower: objFallower
               })
           }
          //check user  approve followee and set pending followers
        const _user=   await ModelUser.getUserById(userfollowee);
            if(_user.approve_followee===true){
              objFallower.status="pending";
            }

        let playlist= await ModelFollower.createFallowers(objFallower);
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
    async function updateFallowers(req, res) {
        try{
            let id = req.query.id;
            let user_id= req.user_id;
            body=req.body;

            const  objFallower={
                music: body.music,
                playlist: body.album,
                user_created: user_id
            }
         let playlist= await ModelFollower.updateFallowers(id,objFallower);
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

        async function disabledFallowers(req, res) {
            try{
                let id = req.query.id;

             let playlist= await ModelFollower.disabledFallowers(id);
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
                async function getAllFallowersByUser(req, res) {
                    try{
                        let user_id =req.user_id;
                        let albumid =req.params.id;
                         //var for pagination
                    let _since=req.query.since || 0;
                    let _limit= 10; //nomber of item
                    _since=Number(_since)
                          let playList= await ModelFollower.getAllFallowersByUser(user_id);
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


                    //get playlist by albums
                        async function getAllFallowersByUserCount(req, res) {
                            try{
                                let user_id =req.user_id;
                                let albumid =req.params.id;
                                 //var for pagination
                            let _since=req.query.since || 0;
                            let _limit= 10; //nomber of item
                            _since=Number(_since)
                                  let playList= await ModelFollower.getAllFallowersByUserCount(user_id);
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


        async function getFallowersById(req, res) {
            let id = req.params.id;
            try{
                  let playlist= await ModelFollower.getFallowersById(id);
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
    createFallowers,
    updateFallowers,
    disabledFallowers,
    getAllFallowersByUser,
    getFallowersById,
    getAllFallowersByUserCount

}
