var chat_module                 = require('./chat/chat.js'),
    monitor_module              = require('./monitor/monitor.js'),
    exports = module.exports    = {};

exports.initialize = function(constants, io, socket) {
    monitor_module.initialize(constants, io);
};

exports.monitor = function(){
    return monitor_module;
};