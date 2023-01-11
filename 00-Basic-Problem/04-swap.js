
var a = 5;
var b = 6;
console.log(a, b)
var temp = a;
a = b
b = temp
console.log(a, b)


// Another example

var x = 5;
var y = 6;
console.log(x, y)
x = x + y;
y = x - y
x = x - y
console.log(x, y)