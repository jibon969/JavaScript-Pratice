
var nameList = ["Jibon", "Masud", "Sakib", "Jibon"]
var uniqueName = []

for(var i=0; i<nameList.length; i++){
    var element = nameList[i]
    var index = uniqueName.indexOf(element)
    if(index==-1){
        uniqueName.push(element)
    }
}

console.log("uniqueName :", uniqueName)