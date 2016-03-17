var app = require('../app');
var http = require('http');
var server =http.createServer(app);
server.listen('3030',function(){
    console.log('server listening at 3030 port');
})

