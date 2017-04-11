var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
  stats: config.devServer.stats,
  hot: true,
  publicPath: config.output.publicPath
});

server.listen(666, 'localhost', function(err, result) {
  if (err) {
    return console.log(err);
  }
  return console.log('listening at locahost:666 666');
})

var path = require('path');
var express = require('express');
var app = express();
var mysql = require('mysql');
var server = mysql.createConnection({
    user: 'root',
    database: 'home',
    password: 'dujian120'
});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(path.join(__dirname, '/')));

app.get('/lha', function(request, response) {
        //连接mysql
    server.connect(function(error, results) {
        if (error) {
            console.log('connection Error:' + error);
            return
        };
        console.log('connect to MySQL');
    })
    server.query("use `home`");
    console.log(111)
    server.query("select * from `home`", function(err, rs, fields) {
        if (err) {
            console.log(err);
        } else {
            response.send(rs);
            console.log(rs)
        };
    });

    server.query("use `shijianfeishi`");
    console.log(111)
    server.query("select * from `users`", function(err, rs, fields) {
        if (err) {
            console.log(err);
        } else {
            response.send(rs);
            console.log(rs)
        };
    });
});
var appServer = app.listen(888, function() {
    console.log(appServer.address());
});
