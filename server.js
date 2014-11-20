var express = require('express');
var path = require('path');
var app = express();


app.set('port', process.env.PORT || 3002);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});