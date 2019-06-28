var health = require('../index');
var express = require('express');

var app = express();
app.use(health.ping())

health.info(function(err, data){
  console.log('Info: ', data);
});

app.listen(3334);
console.log('Ready. http://localhost:3334/ping to check health');
