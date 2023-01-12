var marks = [70, 50, 80, 90, 80]
var max = marks[0]
for(var i=0; i<marks.length; i++){
    var element = marks[i]
    if(element>max){
        max = element
    }
}

console.log(max)