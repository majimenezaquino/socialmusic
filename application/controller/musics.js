
const modelMusic= require('../models/musics');
const ModelUser= require('../models/user');
const {PATH_FILES}=require('../config/index')

async function getAllMusics(req, res) {
    try{
         //var for pagination
    let _since=req.query.since || 0;
    let _limit= 10; //nomber of item
    _since=Number(_since)

          let musicscunt= await modelMusic.countMusicDocuments();
          let _musics= await modelMusic.getAllMusics(_since,_limit);

          res.json({
              error: false,
              musicscunt,
              message: 'surccess',
              musics: _musics
          })
    }catch(ex){
        res.status(400).json({
            error: true,
            message: 'error url not allower'

        })
    }
    }


    async function getMusicById(req, res) {
        try{
             //var for pagination
        let id= req.params.id || 0;

              let music= await modelMusic.getMusicById(id);

              res.json({
                  error: false,
                  message: 'surccess',
                  music
              })
        }catch(ex){
            res.status(400).json({
                error: true,
                message: 'error url not allower'

            })
        }
        }

        async function getMusicsByUser(req, res) {
            try{
                 //var for pagination
            let user_id= req.params.id || 0;
            let _since=req.query.since || 0;
            let _limit= 10; //nomber of item
            _since=Number(_since)

                  let musics= await modelMusic.getMusicsByUser(user_id);

                  res.json({
                      error: false,
                      message: 'surccess',
                      musics
                  })
            }catch(ex){
                res.status(400).json({
                    error: true,
                    message: 'error url not allower'

                })
            }
            }


            async function checkUserUploadMusics(req, res) {
                try{
                     //var for pagination
                //declare defaull infor user need to upload music
                let user_id= req.user_id || 0;
                  let userInfomation={
                    user: 'incomplet',
                    address: 'incomplet',
                    limit: true,
                  }
                  //check info of user required
                      let user= await ModelUser.getUserById(user_id);
                      if(
                        user.status=='active'
                        && user.name!=''
                        && user.last_name!=''
                        && user.email!=''
                        && user.gender!=''
                        && user.birth_date!=''
                        && user.phone!=''
                      ){
                        userInfomation.user='complete'
                      }else{
                        return res.json({
                            error: false,
                            canupload: false,
                            message: 'user information is incomplet',
                        })
                      }


                     let music= await modelMusic.countMusicDocuments(user_id);
                      console.log("music==>",music)
                      res.json({
                          error: false,
                          message: 'surccess',
                      })
                }catch(ex){
                    res.status(400).json({
                        error: true,
                        message: 'error url not allower'

                    })
                }
                }

module.exports={
getAllMusics,
getMusicById,
getMusicsByUser,
checkUserUploadMusics
}
