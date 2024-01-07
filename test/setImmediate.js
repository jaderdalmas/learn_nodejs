setTimeout(function () {
    console.log('B1 ' + new Date());
}, 0);
setImmediate(function () {
    console.log('B2 ' + new Date());
});

console.log('A ' + new Date());