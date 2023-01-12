
var number = [10, 20, 30, 40, 50]
var sum = 0
for(var i=0; i<number.length; i++){
    var element = number[i]
    sum = sum + element
}
console.log("Number :", sum)



// Using Function

function getArraySum (number){
    var sum = 0
    for(var i=0; i<number.length; i++){
        var element = number[i]
        sum = sum + element
    }
    return sum;
}

var number = [10, 20, 30, 40, 50]
var result = getArraySum(number)
console.log("Result :", result)