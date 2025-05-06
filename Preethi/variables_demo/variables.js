               //LEVEL 1

//Q1: Declare a variable named age and assign it a value of 20. Print age to the console.

var age;
age=20;
// console.log("Age is : "+age);

// Q2:Declare three variables in a single line: firstName, lastName, and country. Assign values to these variables and display them.
 
var firstName,lastName,country;
firstName="Muthu";
lastName="Preethi";
country="India"
// console.log("FirstName: "+firstName+"\n"+"lastName: "+lastName+"\n"+"country: "+country);

// Q3:Create two variables, itemPrice and itemQuantity, assign them numeric values. Print their product as totalCost.

var itemPrice, itemQuantity,totalCost;
itemPrice=10000;
itemQuantity=5;
totalCost=itemPrice * itemQuantity;
// console.log("Total Cost: ",totalCost);

               //LEVEL 2

//  Q1:Create a variable name inside a function and try to access it outside the function. Explain why you get an error.

function test(){
   let Name="preethiM";
   console.log("Name is :",Name);
}
//test();
//console.log(Name); //this gives uncaught reference error because variables declared inside are function are function scoped  that means
                    //it can be accessed only within that function.


//  Q2:Declare a variable using var at the bottom of your code. Try to access it at the top of your code and observe the result. 
//  Do the same with a let variable.

//console.log(a);// this gives undefined
var a=12; 
//console.log(b); //got uncaught reference errror: that let variable cannot be accessed before intialization
let b=45;


//  Q3:Write code that creates a variable using var within a function. Then, call the function and try
//  accessing the variable outside the function.

function test2(){
    var varKey="muthu";
    console.log(varkey);
}
//test2();
//console.log(varKey); //uncaught referenece error that varkey is nont defined.cuz var is function scoped


                       //LEVEL 3

// Q1:Declare a variable using var at the top of your code and redeclare it using let with thesame name.
//  Note any errors or messages in the console.

var key1;
//let key1; //Uncaught SyntaxError: Identifier 'key1' has already been declared 

//  Q2:Write code that uses a const variable in a function and then try to reassign it inside and outside the function. Explain the results.

function test3(){
    const pi=3.14;
   // const pi=45; //Uncaught SyntaxError: Identifier 'pi' has already been declared

}
test3();
const pi=45; //it is allowing us to redeclare because it is block scope.
//console.log(pi);


//  Q3:Explain, with examples, how JavaScript handles hoisting for function declarations, var,let, and const

//debugger //before this var is setted as undefined in global and let and const are setted as value unavailable
var one; 
one=12; //after this get  executed one is setted as 12
let two; //when this get executed it turned into undefined from value unavailable.
two=13; //after this get executed two is setted as 13
const three=78; //after this get executed three is setted as 78


greet(); // works: Entire function declaration is hoisted to the top — so you can call it even before it's defined.
function greet(){
    console.log('hello ,preethi');
}



















































































































































































































































































