
// JavaScript Data Types

// JavaScript variables can hold different data types: 

/*
    1. numbers, 
    2. strings, 
    3. objects
*/

// Example

let x = 5;
let y = "hello";
z = x + y;
console.log(z);
// Notes: When adding a number and a string, JavaScript will treat the number as a string.
console.log(typeof(x)); 
console.log("\n");

// JavaScript Types are Dynamic

let a; // Now a is undefined
console.log(a);

a = 5; // Now a is a Number
console.log(a);

a = "Bangladesh"; // Now a is a Number
console.log(a);
console.log("\n");

// JavaScript Numbers

/* 
JavaScript has only one type of numbers.
Numbers can be written with, or without decimals:
*/

let x1 = 34.00;     // Written with decimals
console.log("decimals : ", x1);

let x2 = 34;        // Written without decimals
console.log("without decimals : ", x2);
console.log("\n");


// JavaScript Booleans
// Booleans can only have two values: true or false.

var c = 5;
var d = 5;
var e = c == d;
console.log("Booleans : ", e)
console.log("\n");


// JavaScript Arrays

/*
JavaScript arrays are written with square brackets.
Array items are separated by commas.
The following code declares (creates) an array called cars, containing three items (car names):
*/

var name = ["Jibon", "SWE", 69]
console.log(name);
// Access SWE
console.log(name[1]);
console.log("\n");

// JavaScript Objects

/*
    JavaScript objects are written with curly braces {}.
    Object properties are written as name:value pairs, separated by commas.
*/

const person = {firstName:"Jibon", lastName:"Ahmed", age:27, country:"Bangladesh"};
console.log(person.firstName);
console.log("\n");


// The typeof Operator
console.log(typeof("Hi"));
