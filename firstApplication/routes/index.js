var express = require('express');
var router = express.Router();
module.exports = function(){
router.get('/',function(req,res){
console.log(req);
res.sendFile('index.html',{root:'../public'})
});
router.get('/main',function(req,res){
console.log(req);
res.sendFile('main.html',{root:'../public'})
});
router.get('/topics',function(req,res){
console.log(req);
res.sendFile('Topics.html',{root:'../public'})
});
router.get('/instructions',function(req,res){
console.log(req);
res.sendFile('instructions.html',{root:'../public'})
});
router.get('/aboutus',function(req,res){
console.log(req);
res.sendFile('aboutus.html',{root:'../public'})
});
router.get('/q',function(req,res){
console.log(req);
res.sendFile('q.html',{root:'../public'})
});
    return router;
}