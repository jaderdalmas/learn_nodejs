module.exports.onReadable = function (callback) {
    process.stdin.on('readable', function () {
        var chunk = process.stdin.read();
        //console.log(`${chunk.toString().trim()} len: ${chunk.length}`)
        if(chunk) callback(chunk.toString().trim());
    });
};