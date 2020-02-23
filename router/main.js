var mime = require('mime');
var fs = require('fs');
module.exports = function(app)
{
    app.get('/', function(req, res){
        res.render('index.html');
    });
    app.get('/apk', function(req, res){
        var filepath = __dirname + '/wide.png';
        var file = './wide.png';
        res.download(filepath);
        // mimetype = mime.lookup('./wide.png');
        // res.setHeader('Content-disposition', 'attachment; filename=' + 'wide.png');
        // res.setHeader('Content-type', mimetype);
        // var filestream = fs.createReadStream(file);
        // filestream.pipe(res);
    })
}