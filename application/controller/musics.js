
const modelMusic= require('../models/musics');
const ModelUser= require('../models/user');
const ModelTypeAccounts= require('../models/type-accounts.js');
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
                    limits: {
                      coumplete: false,
                      limit_upload: 0,
                      upload: 0

                    }
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

                      //===================================================================
                      //get account o user
                       let account= await ModelTypeAccounts.getTypeAccountsById(user.account);
                       let daysAcount =account.days_upload;
                       let limit_upload =account.limit_upload;

                    //get count musics by user for mouths
                     let userCountUploadMusics= await modelMusic.countMusicUploadByUserDays(user_id,daysAcount);
                     if(userCountUploadMusics>=limit_upload){
                       userInfomation.limit=true
                     }


                      res.json({
                          error: false,
                          message: 'surccess',
                          upload_info: userInfomation,
                          music_count: music
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
