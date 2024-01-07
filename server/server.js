var net = require('net');

var cnns = [];
var broadcast = function (msg, origin) {
    cnns.forEach(function (cnn) {
        if(cnn === origin) return;
        cnn.write(msg);
    });
}

net.createServer(function (cnn) {
    cnns.push(cnn);
    cnn.write('Hello, I am the server!');
    cnn.on('data', function (message) {
        message = message.toString();

        if(message.indexOf('/nickname') === 0) {
            var nickname = message.replace('/nickname', '');
            broadcast(`${cnn.nickname} is now ${nickname}`);
            cnn.nickname = nickname;
            return;
        }
        broadcast(`${cnn.nickname} > ${message}`, cnn);
    });
    cnn.on('end', function () {
        broadcast(`${cnn.nickname} has left!`);
        cnns.splice(cnns.indexOf(cnn), 1);
    });
}).listen(3001);