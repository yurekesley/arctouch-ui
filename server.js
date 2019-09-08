var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist')); //aqui você define onde está o index.html da sua aplicação.
app.listen(8080);