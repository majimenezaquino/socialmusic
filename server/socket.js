module.exports = function(server){

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.emit('message', 'holafad');

})
};
