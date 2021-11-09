
// JavaScript Functions

/*
JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

// Example
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

*/

// Example
function hell(a, b){
    return a + b;
}

result = hell(5, 6)
console.log(result)
console.log("\n");


// Function Return

// calling function
x = add_to_number(3, 5)
console.log(x)

// Function
function add_to_number(x, y){
    return x * y
}

// Example

// Why Functions?
// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce different results.


