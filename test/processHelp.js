var options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform',
    'e) env',
    'm) memory',
    'u) uptime',
    'v) versions',
    'q) quit'
];

module.exports.showOptions = function () {
    options.forEach(function (o) {
        console.log(o);
    });
};