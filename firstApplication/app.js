var express = require('express');

var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,'/public')));
var router = require('./routes/index')();
app.use('/',router);
module.exports = app;
