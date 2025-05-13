//1 -- basic of variables
var age ;
age=20;
console.log("age -",age)
//2
var firstName ,lastName,country;
firstName="srivani";
lastName="laxmagouni";
country="India"
console.log("Name-",firstName,lastName,"country-:",country)
//3
var ItemPrice= 56;
var ItemQuatity=5;
let totalcost =ItemPrice*ItemQuatity;
console.log("Totalcost-",totalcost)
//level 2---scope and hoisting
function myfunction(){
    let Name="srivani";
}
myfunction()
//console.log("Name -",Name)
//We got variable.js:20 Uncaught ReferenceError: Name is not 
//because we are trying to access a variable from the function that has been defined inside the function but we are trying to print outside the
//  function so we got uncaughtreference error
//5
console.log("Greetings-",Message)
var Message="Hello Good Mrng"
//we get undefines due to hoisting
//console.log("Greetings-",Message1)
let Message1="Hello Good eveng"
//we get Reference error
//6
function myfunction1(){
    var level=52
}
myfunction1
//level=64
//console.log("level no-",level)
//referenceerror
var symbol="sri"
//let symbol="vani"
console.log(symbol)
//we got Uncaught SyntaxError: Identifier 'symbol' has already been 
const pi=3.15;
//pi=569;
console.log("value of pie-",pi)
//variable.js:45 Uncaught TypeError: Assignment to constant variable.
// Hoisting behavior explanation:
function hoistingDemo() {
    console.log(a); // undefined due to var hoisting
    var a = 5;

    // console.log(b); // ReferenceError
    let b = 10;

    // console.log(c); // ReferenceError
    const c = 15;

    console.log("a:", a, "b:", b, "c:", c);
}
// hoistingDemo();
