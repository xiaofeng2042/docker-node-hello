var express = require('express');

// Constants
var DEFAULT_PORT = 8080;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('你好，世界 \n');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
