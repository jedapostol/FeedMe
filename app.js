'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 3000;
var oneDay = 86400000;

app.use(express.compress());
// Might want to add the { maxAge: oneDay } to cache some assets
app.use(express.static(__dirname + '/public'));

/*
 * Routes
 */
app.get('/', function(request, response, next) {
    response.status(200).sendfile('./public/index.html');
});

/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
