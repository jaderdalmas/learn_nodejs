var SerialGenerator = function () { // função construtora
    var generate = function () {
        return Math.floor(Math.random() * max);
    };

    return {
        generate: generate
    }
};

module.exports = SerialGenerator