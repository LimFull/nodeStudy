var express = require('express')
  , app = express()
  , fs = require('fs')
  , router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8000, function(){
  console.log("Express server has started on port 8000");
});

