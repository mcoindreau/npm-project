const $ = require("jquery"); // loading jquery.min.js

const hello = () => console.log("hello Redwoods from webkpack!");

hello();

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "lightgray")