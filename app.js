/**
 * Created by pkurimella on 12/16/14.
 */
var express = require('express');

var http = require('http');

var app = express();

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index',{title:'<p>The main page</p>'});
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});

