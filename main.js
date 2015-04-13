var color = require("./color.js");

var a = color.random();
var b = color.random();
var c = color.mix(a, b);

console.log(a + " mixed with " + b + " is " + c + '.');
