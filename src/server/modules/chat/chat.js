var exports = module.exports = {},
    io;

broadcast = function(event, msg) {
    var timeStamp = getTimeStamp();
    msg = timeStamp + ' ' + msg;

    io.emit(event, msg);
};

exports.initialize = function(constants, theIo, socket) {
    io = theIo;

    socket.on(constants.events.authentication.logged_out, function(){
        broadcast("out", "A user has disconnected");
    });

    socket.on(constants.events.chat.send, function(msg){
        broadcast('broadcast', msg)
    });
};