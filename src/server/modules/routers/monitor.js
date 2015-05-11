var express = require('express'),
    router = express.Router(),
    module;

router.setMonitor = function(monitor) {
    module = monitor;
};

router.get('/', function(){
    console.log("hello monitor");
});

router.get('/cpu', function(req, res){
    res.send(module.getCpus());
});

module.exports = router;
