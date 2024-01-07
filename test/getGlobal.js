console.log(global);
console.log("");
Object.keys(global).forEach(function (e) {
    console.log(e);
});
console.log("");
Object.keys(process).forEach(function (e) {
    console.log(e);
});