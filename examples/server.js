var health = require('../index');
var express = require('express');

var app = express();
app.use(health.ping())

health.info(function(err, data){
  console.log('Info: ', data);
});

app.listen(3333);
console.log('Ready. http://localhost:3333/ping to check health');
