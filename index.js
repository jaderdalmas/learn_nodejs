max = 10000; //global.max = 10000;

var serialGenerator = require('./serialGenerator');
var serialGeneratorA = new serialGenerator();
var serialGeneratorB = require('serialGenerator');

console.log(serialGeneratorB.generate());
console.log(serialGeneratorA == serialGeneratorB);
