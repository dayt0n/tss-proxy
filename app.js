var app = require('express')();
var request = require('request');

app.set('port', (process.env.PORT || 7474));

app.post('/', function (req, res) {
	var body = '';

	req.on('data', function (data) {
		body += data;
	});

	req.on('end', function () {
		request.post({url:'http://gs.apple.com/TSS/controller?action=2', body:body}, function (error, response, body) {
			res.status(response.statusCode);
			res.send(body);
		});
	});
});

app.listen(app.get('port'), function () {
	console.log('app running on port:', app.get('port'));
});
