//JavaScript : String functionalities in a tabular representation for quick understanding.

//toLowerCase()
var text = "DEVELOPER";
text.toLowerCase();
console.log(text);
//Result: developer

//toUpperCase()
var text = "developer";
text.toUpperCase();
console.log(text);
//Result: DEVELOPER

//length() > count value string
var text = "developer";
text.length();
console.log(text);
//Result: 9

//[2]
var text = "developer";
//text.[2];
console.log(text);
//Result: v

//charAt(1)
var text = "developer";
text.charAt(1);
console.log(text);
//Result: e

//include("ba")
var text = "Sloba";
text.include("ba");
console.log(text);
//Result: true

//endsWith("Co")
var text = "developer";
text.endsWith("Co")
console.log(text);
//Result: false

//concat("Sloba")
var text = "CodeWith";
text.concat("Sloba")
console.log(text);
//Result: CodeWithSloba

//slice("0,4")
var text = "CodeWithSloba";
text.slice("0,4")
console.log(text);
//Result: Code

//split(",")
var text = "Follow,Sloba";
text.slice(",")
console.log(text);
//Result: ["Follow","Sloba"]
