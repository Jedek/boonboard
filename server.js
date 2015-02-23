var app         = require('express')(),
    http        = require('http').Server(app),
    io          = require('socket.io')(http),
    passport    = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,

    colors      = require('colors'),
    constants   = require('./src/constants.json'),
    root        = __dirname,

    file_router = require('./src/server/modules/routers/files'),
    modules     = require('./src/server/modules/index.js'),
    users       = [];


/**
 * Authentication module that uses Google
 */

passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:3000/login',
        realm: 'http://localhost:3000/'
    },
    function(identifier, profile, done) {
        User.findOrCreate({ openId: identifier }, function(err, user) {
            done(err, user);
        });
    }
));

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return',
    passport.authenticate('google', { successRedirect: '/',
        failureRedirect: '/login' }));

app.use(function timeLog(req, res, next) {
    var message = getTimeStamp() + ' [Request] ' + req.originalUrl;
    console.log(message.green);
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
    console.log("Got a connection");
    io.on('user', function(user){
        console.log("Got a user!");
        console.dir(user);
    });
    modules.initialize(constants, io, socket);
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