let express = require('express');
let path = require("path");
let app = express();

app.get('/', function(req, res){

    res.sendFile(path.join(__dirname + '/html/index.html'));

});

app.listen(8080, function(){

    console.log('Servidor Web OK!');

});