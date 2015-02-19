var express = require('express'),
    router = express.Router();

router.get('/', function(){
   console.log("hello files");
});

router.get('/images/:folder/:file', function(req, res){
   //res.sendFile('./theme/images/'+req.params.folder+"/"+req.params.file, {root : router.root});
    console.log('test');
});

router.get('/images/:file', function(req, res){
    res.sendFile('./src/images/'+req.params.file, { root : router.root });
});

router.get('/image/:folder/:file', function(req, res){
    res.sendFile('./src/images/'+req.params.folder+'/'+req.params.file, { root : router.root });
});

router.get('/styles/:file', function(req, res){
    res.sendFile('./theme/styles/'+req.params.file, { root : router.root });
});

router.get('/styles/:folder/:file', function(req, res){
    res.sendFile('./theme/styles/'+req.params.folder+'/'+req.params.file, { root : router.root });
});

router.get('/script/:file', function(req, res){
    res.sendFile('./theme/script/'+req.params.file, { root : router.root });
});

router.get('/script/:folder/:file', function(req, res){
    res.sendFile('./theme/script/'+req.params.folder+'/'+req.params.file, { root : router.root });
});

router.get('/fonts/:file', function(req, res){
    res.sendFile('./theme/fonts/'+req.params.file, { root : router.root });
});

module.exports = router;