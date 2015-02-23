var chat_module                 = require('./chat/chat.js'),
    exports = module.exports    = {};

exports.initialize = function(constants, io, socket) {
    io.emit("initialized", constants);
    chat_module.initialize(constants, io, socket);
};