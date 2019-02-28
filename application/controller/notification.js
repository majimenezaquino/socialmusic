
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



module.exports={
getNotification
}
