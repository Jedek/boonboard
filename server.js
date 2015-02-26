/* <================= INITIALIZATION  =================> */
var app             = require('express')(),
    http            = require('http').Server(app),
    io              = require('socket.io')(http),
    os              = require('os'),

    passport        = require('passport'),
    GoogleStrategy  = require('passport-google').Strategy,
    session         = require('express-session'),
    colors          = require('colors'),

    constants   = require('./src/constants.json'),
    root        = __dirname,

    file_router = require('./src/server/modules/routers/files');

app.use(session({
    secret: 'boonoonoo-pi',
    resave: false,
    saveUninitialized: false
}));
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

app.get('/images/:folder/:file', function(req, res){
    res.sendFile(__dirname + '/theme/images/'+req.params.folder+'/'+req.params.file);
});

// define the home page route
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
})

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
io.on('connection', function(e){
    ioReport("Got a connection");
    e.emit("initialized");
});
/* <================= SOCKET EVENTS  =================> */

/* <================= SERVER ACTIVATION  =================> */
http.listen(3000, function(){
    console.log('listening on *:3000');
    displayOSData();
});
/* <================= SERVER ACTIVATION  =================> */

function displayOSData(){
    var cpus = os.cpus(),
        uptime = os.uptime();


    var totalSec = uptime;
    var hours = parseInt( totalSec / 3600 ) % 24;
    var minutes = parseInt( totalSec / 60 ) % 60;
    var seconds = Math.round(totalSec % 60);

    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);


    for(var i = 0, len = cpus.length; i < len; i++) {
        console.log("CPU %s:", i);
        var cpu = cpus[i], total = 0;
        for(type in cpu.times)
            total += cpu.times[type];

        for(type in cpu.times)
            console.log("\t", type, Math.round(100 * cpu.times[type] / total) + "%");
    }

    /** OS Info **/
    console.log(os.type());
    console.log(os.platform());
    console.log("Uptime:"+result);
    console.log(os.loadavg(5));
    console.log(os.totalmem());
    console.log(os.freemem());
}




