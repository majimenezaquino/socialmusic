
const modelNotification =require("../application/models/notification.js");
const {Event} =require("../application/helpers/events.js");

module.exports =  function(server){

const io = require('socket.io')(server);


io.on('connection', function(socket) {

  //get notification from comment
    Event.once("EVEN_NOTIFICATION",function(data){
      modelNotification.getNotificationByKEy(data.key).then(function(data){
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

    });



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
