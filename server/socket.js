
const modelNotification =require("../application/models/notification.js");
module.exports =  function(server){

const io = require('socket.io')(server);

io.on('connection', function(socket) {


     socket.on('notification_key',function(data){


      modelNotification.getNotificationByKEy(data.notification_key).then(function(data){
        let menssage= data.map(function(notification){
          return {
            _id: notification._id,
            message: notification.user_target._id,
            key: notification.key
          }
        });

      for( let i in menssage){

        io.emit(menssage[i].message,menssage[i].key);

      }

       }).catch(function(err){

       })

        console.log("<!______________________________________________________________________________!>")
        console.log("notificacion",data)
     });

})
};
