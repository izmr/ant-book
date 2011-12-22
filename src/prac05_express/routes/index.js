
/*
 * GET home page.
 */
/*
var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.use(express.bodyParser());
*/
exports.index = function(req, res){
  res.render('index', { title: 'Ant Book: Practice 05!' })
};
