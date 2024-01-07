console.time('T');
setTimeout(function () {
    console.timeEnd('T');
}, 0);

console.time('I');
setImmediate(function () {
    console.timeEnd('I');
});