const $ = require("jquery"); // loading jquery.min.js
const data = require('./data');
const math = require('./math');

console.log(math.add(10, 98));
console.log(math.divide(10, 2.5));
console.log(math.multiply(4, 5)); // logs `9`
console.log(math.subtract(4, 2)); // logs `2`

//const $ = require("jquery"); // loading jquery.min.js

const hello = () => console.log("hello Redwoods from webkpack!");

hello();
console.log(data.whichSideOfTheForce); // outputs "The Dark Side"

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "lightgray");