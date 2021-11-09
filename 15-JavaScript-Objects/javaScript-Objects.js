// JavaScript-Objects

const person = {
    firstName:"Jibon", 
    lastName:"Ahmed", 
    age:27
};

console.log(person);

// Accessing Object Properties
// objectName.propertyName
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log("\n");


// A method is a function stored as a property.

var student = {
    firstName: "Jayed",
    lastName: "Hossain",
    dep: "SWE",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
}
console.log(student.dep);


// Accessing Object Methods
x = student.fullName() 
console.log(x) 
    

