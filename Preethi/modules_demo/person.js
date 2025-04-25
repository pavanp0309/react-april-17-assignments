// 8.Exporting Classes:
// In Person.js, create and export a class Person with properties name and age. 
// Add a method getDetails() that returns the person's details. Import and use this class in app.js.

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    getdetails(){
        return `NAME: ${this.name}\nAGE: ${this.age}`
    }

}
 export {Person}