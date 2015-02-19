var app         = require('express')(),
    http        = require('http').Server(app),
    io          = require('socket.io')(http),
    constants   = require('./src/constants.json'),
    root        = __dirname,

    file_router        = require('./src/server/modules/routers/files'),
    events = require('./src/server/modules/events/events.js');


app.use(function timeLog(req, res, next) {
    console.log(getTimeStamp() + ' Incoming request for ' + req.originalUrl);
    next();
});

file_router.root   = root;
app.use('/file/', file_router);

app.get('/images/:folder/:file', function(req, res){
    res.sendFile(__dirname + '/theme/images/'+req.params.folder+'/'+req.params.file);
});

// define the home page route
app.get('/app', function(req, res) {
    res.sendFile(__dirname + '/build/app.js');
});

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    events.initialize(constants, io, socket);
});

http.listen(3000, function(){
   console.log('listening on *:3000');
});

getTimeStamp = function() {
    var date = new Date();

    var h = date.getHours();
    var m = ('0'+date.getMinutes()).slice(-2);
    var s = ('0'+date.getSeconds()).slice(-2);

    return h + ':' + m + ':' + s;
};