
const modelMusic= require('../models/musics');
const ModelUser= require('../models/user');
const ModelAddress= require('../models/address');
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
            let user_id= req.params.id ||  req.user_id;
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
                    user_complete: false,
                    address: false,
                    limits: {
                      coumplete: false,
                      available: 0,
                      upload_month: 0,

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
                        userInfomation.user_complete=true;
                      }else{
                        return res.json({
                            error: false,
                            canupload: false,
                            message: 'user information is incomplet',
                        })
                      }

                      //===================================================================
                      //get account o user
                       let account= await ModelTypeAccounts.getTypeAccountsById(user.typeaccounts);
                       let daysAcount =account.days_upload;
                       let limit_upload =account.limit_upload;

                    //get count musics by user for mouths
                     let music_upload_by_user= await modelMusic.countMusicUploadByUserDays(user._id,daysAcount) || 0;
                     if(parseInt(music_upload_by_user)>=parseInt(account[0].limit_upload)){
                       userInfomation.limits.coumplete=true;
                     }

                     userInfomation.limits.available=account[0].limit_upload-music_upload_by_user;
                     userInfomation.limits.upload_month=music_upload_by_user;

                      //==========================================================================
                      //check address
                        let address= await ModelAddress.getAddressByUser(user_id);
                        if(address.length>0){
                          userInfomation.address= true;
                        }
                      res.json({
                          error: false,
                          message: 'surccess',
                          upload_info: userInfomation
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
