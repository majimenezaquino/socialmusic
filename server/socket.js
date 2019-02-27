module.exports = function(server){

const io = require('socket.io')(server);

io.on('connection', function(socket) {


     socket.on('notification_key',function(data){
        console.log("<!______________________________________________________________________________!>")
        console.log("notificacion",data)
     });

})
};
