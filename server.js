/* <================= INITIALIZATION  =================> */
var app             = require('express')(),
    http            = require('http').Server(app),
    io              = require('socket.io')(http),

    session         = require('express-session'),
    colors          = require('colors'),

  	google          = require('googleapis'),
    OAuth2          = google.auth.OAuth2,

    constants   = require('./src/constants.json'),
    modules     = require('./src/server/modules/index.js'),
    root        = __dirname,

    file_router     = require('./src/server/modules/routers/files'),
    monitor_router  = require('./src/server/modules/routers/monitor'),

    connections = [];

app.use(session({
    secret: 'BoonooBerry',
    resave: false,
    saveUninitialized: false
}));


modules.initialize(constants, io);
/* <================= INITIALIZATION  =================> */

/* <================= AUTHENTICATION  =================> */
var
    CLIENT_ID       = '194873919743-4mob5cmn3p993rn2l4p6t4rvtiigbq37.apps.googleusercontent.com',
    CLIENT_SECRET   = 'kh5hXMJpNi2QndMq6MaXhv9Q',
    REDIRECT_URL    = 'http://localhost:3000/oauth2callback',
    oauth2Client    = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL),
    scopes = [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/calendar'
    ];

function getAccessToken(oauth2Client, callback) {
   var url     = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
   });

    console.log(url);
}

var isAuthenticated = function(req, res, next) {
    if(Object.keys(oauth2Client.credentials).length > 0) {
        return next();
    } else {
        res.redirect("/login");
    }
};

app.get("/auth/google", function(req, res){
    var url     = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    });

    res.redirect(url);
});

app.get("/oauth2callback", function(req, res){
    oauth2Client.getToken(req.query.code, function(err, tokens){
        oauth2Client.setCredentials(tokens);
        res.redirect("/");
    });
});

/* <================= AUTHENTICATION  =================> */

/* <================= LOGGING  =================> */
app.use(function timeLog(req, res, next) {
    var message = getTimeStamp() + ' [Request] ' + req.originalUrl;
    console.log(message.green);
    next();
});

getTimeStamp = function() {
    var date = new Date();

    var h = date.getHours();
    var m = ('0'+date.getMinutes()).slice(-2);
    var s = ('0'+date.getSeconds()).slice(-2);

    return h + ':' + m + ':' + s;
};

ioReport = function(msg) {
    msg = getTimeStamp() + ' [IO] ' + msg;
    console.log(msg.red.bgWhite);
};
/* <================= LOGGING OF REQUESTS  =================> */

/* <================= ROUTES  =================> */
file_router.root   = root;
app.use('/file/', file_router);

monitor_router.setMonitor(modules.monitor());
app.use('/monitor/', monitor_router);

app.get('/images/:folder/:file', function(req, res){
    res.sendFile(__dirname + '/theme/images/'+req.params.folder+'/'+req.params.file);
});

app.get('/app', function(req, res) {
    res.sendFile(__dirname + '/build/app.js');
});

app.get('/', isAuthenticated, function(req, res){
    res.redirect("/dashboard");
});

app.get('/dashboard', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/raspbian', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/xbmc', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/retropie', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/statistics', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/logout', function(req, res){
    req.logout();
    res.redirect("/dashboard");
});

app.get('/session', function(req, res){
    if(req.user) {
        res.send(req.user);
    } else {
        res.send();
    }
});
/* <================= ROUTES  =================> */

/* <================= SOCKET EVENTS  =================> */
io.on('connection', function(socket){
    ioReport("Got a connection");

    connections[socket] = socket;

    notifyAll('initialized');
    socket.on('disconnect', function() {
        console.log('Got disconnect!');

        var i = connections.indexOf(socket);
        delete connections[i];
    });
});

function notifyAll(event, value) {
    for(var socket in connections){
       // socket.emit(event, value);
    }
}
/* <================= SOCKET EVENTS  =================> */

/* <================= SERVER ACTIVATION  =================> */
http.listen(3000, function(){
    console.log('listening on *:3000');
});
/* <================= SERVER ACTIVATION  =================> */




