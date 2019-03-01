
const modelNotification= require('../models/notification');


async function getNotification(req, res) {
    try{
         //var for pagination
         let user_id =req.user_id || '';
    let _since=req.query.since || 0;
    let _limit= 10; //nomber of item

    _since=Number(_since)

          let _notification= await modelNotification.getNotification(user_id);

          res.json({
              error: false,
              message: 'surccess',
              notificacion: _notification
          })
    }catch(ex){
        res.status(400).json({
            error: true,
            message: 'error url not allower'

        })
    }
    }


    async function updateNotification(req, res) {
        try{
             //var for pagination
             let user_id =req.user_id || '';
             let lement_id =req.params.id;
              let _notification= await modelNotification.updateNotification(lement_id,{status: 'remove'});

              res.json({
                  error: false,
                  message: 'surccess',
                  notificacion: _notification
              })
        }catch(ex){
            res.status(400).json({
                error: true,
                message: 'error url not allower'

            })
        }
        }

        async function viewedNotification(req, res) {
            try{
                 //var for pagination
                 let user_id =req.user_id || '';
                  let notification =req.body.notification;
                    let _notification;
                    let tmp_notification= [];
                    for( let i in notification){
                       _notification= await modelNotification.updateNotification(notification[i]._id,{status: 'viewed'});
                       tmp_notification.push(_notification);
                    }


                  res.json({
                      error: false,
                      message: 'surccess',
                      notification: tmp_notification
                  })
            }catch(ex){
                res.status(400).json({
                    error: true,
                    message: 'error url not allower'

                })
            }
            }



module.exports={
getNotification,
updateNotification,
viewedNotification
}
