var chat_module                 = require('./../chat/chat.js'),
    exports = module.exports    = {};

exports.initialize = function(constants, io, socket) {
    io.emit("initialized", constants);
    io.emit(constants.events.authentication.logged_in, "A user has connected");
    chat_module.initialize(constants, io, socket);
};