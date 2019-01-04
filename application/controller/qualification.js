
const modelQualification =require('../models/qualification')

//register new user
async function createQualification(req, res) {
    try{
      const  body=req.body;
        let user_id= req.user_id;

        //check if user already reacted this music
        let qualification_check= await modelQualification.getAllQualificationByMusicAndUser( body.music_id,user_id);
          if(qualification_check.length>0){
          return  res.json({
                error: true,
                message: 'error, the qualification alread was to do.'
            })
          }

        const  qualification_obj={
            point_qualified: body.point,
            music_qualified: body.music_id,
            user_qualified: user_id
      }

          let qualification= await modelQualification.createQualification(qualification_obj);
          res.json({
              error: false,
              message: 'Success, the qualification was to do.',
              qualification
          })
    }catch(ex){
        res.status(400).json({
            error: ex

        })
    }
    }






    //get playlist by albums
    async function getAllQualificationByMusic(req, res) {


        try{
            let music =req.params.music || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since);

              let qualification= await modelQualification.getAllQualificationByMusic(music);
              res.json({
                  error: false,
                  message: 'surccess',
                  qualification
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }


        //get playlist by albums
        async function getAllQualificationByMusicCount(req, res) {
            try{
                let music =req.params.music || 0;
                  let qualification= await modelQualification.getAllQualificationByMusicCount(music);
                return  res.json({
                      error: false,
                      message: 'surccess',
                      qualification
                  });
            }catch(ex){
                res.status(400).json({
                    error: ex

                })
            }
            }


    async function getAllQualificationByMusicAndUser(req, res) {
        try{
           let user_id= req.user_id || 0;
            let music =req.params.music || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since);
              let qualification= await modelQualification.getAllQualificationByMusicAndUser(music,user_id);
              res.json({
                  error: false,
                  message: 'surccess',
                  qualification
              })
        }catch(ex){
            res.status(400).json({
                error: ex

            })
        }
        }




module.exports={
    getAllQualificationByMusic,
    getAllQualificationByMusicAndUser,
    getAllQualificationByMusicCount,
    createQualification

}
