/* <================= INITIALIZATION  =================> */
var app             = require('express')(),
    http            = require('http').Server(app),
    io              = require('socket.io')(http),

    passport        = require('passport'),
    GoogleStrategy  = require('passport-google').Strategy,
    session         = require('express-session'),
    colors          = require('colors'),

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

app.use(passport.initialize());
app.use(passport.session());

modules.initialize(constants, io);
/* <================= INITIALIZATION  =================> */

/* <================= AUTHENTICATION  =================> */
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:3000/auth/google/return',
        realm: 'http://localhost:3000/'
    },
    function(identifier, profile, done) {
        done(null, profile);
    }
));

app.get('/auth/google', passport.authenticate('google'));

app.get('/auth/google/return',
    passport.authenticate('google'), function(req, res){
        if(req.user) {
            res.redirect('/');
        }
        res.redirect('/login');
    });

isAuthenticated = function(req, res, next) {
    if(req.user) {
        return next();
    } else {
        res.redirect("/login");
    }
};
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




