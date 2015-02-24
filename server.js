/* <================= INITIALIZATION  =================> */
var app         = require('express')(),
    http        = require('http').Server(app),
    io          = require('socket.io')(http),
    passport    = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,
    session = require('express-session'),

    colors      = require('colors'),
    constants   = require('./src/constants.json'),
    root        = __dirname,

    file_router = require('./src/server/modules/routers/files');

app.use(session({secret: 'boonoonoo-pi'}));
app.use(passport.initialize());
app.use(passport.session());

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
    passport.authenticate('google', { successRedirect: '/',
        failureRedirect: '/login' }));

isAuthenticated = function(req, res, next) {
    if(req.user) {
        return next();
    } else {
        res.redirect("/auth/google");
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

app.get('/images/:folder/:file', function(req, res){
    res.sendFile(__dirname + '/theme/images/'+req.params.folder+'/'+req.params.file);
});

// define the home page route
app.get('/app', function(req, res) {
    res.sendFile(__dirname + '/build/app.js');
});

app.get('/', isAuthenticated, function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/logout', function(req, res){
    req.logout();
    res.send();
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
io.on('connection', function(e){
    ioReport("Got a connection");
    e.emit("initialized");
});
/* <================= SOCKET EVENTS  =================> */

/* <================= SERVER ACTIVATION  =================> */
http.listen(3000, function(){
   console.log('listening on *:3000');
});
/* <================= SERVER ACTIVATION  =================> */




