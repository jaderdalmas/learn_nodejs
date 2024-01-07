setTimeout(function () {
    console.log('B ' + new Date());
}, 1500);

console.log('A ' + new Date());

var c = setTimeout(function () {
    console.log('C ' + new Date());
}, 1500);
clearTimeout(c);