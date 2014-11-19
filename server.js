var express = require('express');
var app = express();


app.get('*', function(req, res){
	res.sendfile('./public/index.html');
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});