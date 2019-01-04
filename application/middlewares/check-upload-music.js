const modelMusic= require('../models/musics');
const ModelUser= require('../models/user');
const ModelAddress= require('../models/address');
const ModelTypeAccounts= require('../models/type-accounts.js');
const {PATH_FILES}=require('../config/index')


const checkUserUploadMusics=async function(req, res,next) {
    try{
         //var for pagination
    //declare defaull infor user need to upload music
    let user_id= req.user_id || 0;
      let userInfomation={
        user_complete_info: false,
        address: false,
        limits: {
          complete: false,
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
            userInfomation.user_complete_info= true;
          }else{
            userInfomation.user_complete_info= false;
          }

          //===================================================================
          //get account o user
           let account= await ModelTypeAccounts.getTypeAccountsById(user.typeaccounts);
           let daysAcount =account.days_upload;
           let limit_upload =account.limit_upload;

        //get count musics by user for mouths
         let music_upload_by_user= await modelMusic.countMusicUploadByUserDays(user._id,daysAcount) || 0;
         if(parseInt(music_upload_by_user)>=parseInt(account[0].limit_upload)){
           userInfomation.limits.complete=true;
         }

         userInfomation.limits.available=account[0].limit_upload-music_upload_by_user;
         userInfomation.limits.upload_month=music_upload_by_user;

          //==========================================================================
          //check address
            let address= await ModelAddress.getAddressByUser(user_id);
            if(address.length>0){
              userInfomation.address= true;
            }
            if(userInfomation.user_complete_info!=true){
              return res.status(400).json({
                error: true,
                name: 'user',
                info: userInfomation,
                message: 'user info basi  incomplete'
              })
            }

            if(userInfomation.address!=true){
              return res.status(400).json({
                    error: true,
                    name: 'address',
                    info: userInfomation,
                    message: 'address incomplete'
              })
            }

            // if(userInfomation.limits.complete!=true){
            //   return res.status(400).json({
            //     error: true,
            //     name: 'limit upload',
            //     info: userInfomation,
            //     message: 'you already exceeded the maximum musics upload.'
            //   })
            // }
            //userInfomation.limits.upload_month<music_upload_by_user


            if(userInfomation.limits.complete==true){
              return res.status(400).json({
                error: true,
                name: 'limit upload',
                info: userInfomation,
                message: 'you already exceeded the maximum musics upload.'
              })
            }

        next();
    }catch(ex){
        res.status(400).json({
            error: true,
            message: 'error url not allower'

        })
    }

    }




module.exports={
  checkUserUploadMusics
}
