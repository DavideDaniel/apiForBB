var express = require('express');
var app = express();
var config = require('./config/config.js');
config(app, express);

// app.listen(3000);
// console.log( "Listening on port: 3000" );

