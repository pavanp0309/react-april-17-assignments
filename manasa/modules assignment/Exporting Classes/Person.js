export class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
 getDetails() {
return `name: ${this.name}, age: ${this.age}`;    
}
}