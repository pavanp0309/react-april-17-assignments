//Level -1 Q1
let age = 20;
console.log(age);

//Q2
let firstName ="Apoorva", lastName ="Kadiyala",country = "India";
  console.log(firstName)
  console.log(lastname)
  console.log(country)

//Q3
let itemPrice = 30;
let itemQuantity = 6;
let totalCost =  itemPrice*itemQuantity;  
console.log("Total Cost: $" + totalCost);

//Level- 2 Q1
function greetUser() {
  let name = "Apoorva";
  console.log("Hello, " + name);
}

greetUser();

console.log(name);  // This will cause an error
//Inside the function greetUser(), we declare a variable name using let.This variable is block-scoped, meaning it only exists inside the block (in this case, the function) where it's defined.When we try to access name outside the function using console.log(name);, JavaScript throws a ReferenceError because name is not defined in the global scope.

//Q2
console.log(myVar);  // Output: undefined (NOT an error)
var myVar = 10;
//Variables declared with var are hoisted to the top of their scope.Only the declaration is hoisted, not the initialization.So console.log(myVar) doesn't throw an error, but returns undefined.

console.log(myLet);  // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;
//Variables declared with let (and const) are also hoisted, but they are in a temporal dead zone (TDZ) from the start of the block until the declaration is encountered.This means you cannot access them before the line they are declared, and trying to do so throws a ReferenceError.

//Q3
function showMessage() {
  var message = "Hello from inside the function!";
  console.log(message);  // This works
}

showMessage();

console.log(message);  // This will throw an error: ReferenceError: message is not defined
//The variable message is declared with var inside the function showMessage(), so it's function-scoped.That means message only exists inside that function.Trying to access it outside the function leads to a ReferenceError because it's not defined in the global scope.

//Level - 3 Q1 
var testVar = "I was declared with var";
let testVar = "Now I'm using let";  // ❌ SyntaxError
//SyntaxError: Identifier 'testVar' has already been declared

//Q2
function exampleFunc() {
  const greeting = "Hello!";
  console.log(greeting); // ✅ Works fine

  // Try to reassign inside the function
  greeting = "Hi!"; // ❌ TypeError: Assignment to constant variable
}

exampleFunc();

// Try to reassign outside the function
const farewell = "Goodbye!";
farewell = "See ya!"; // ❌ TypeError: Assignment to constant variable
//const means the binding (reference) cannot change.Once a variable is declared with const, you cannot reassign it to a new value.

//Q3
//Declaration Type | Hoisted? | Initialized? | Can Use Before Declaration?
//function | ✅ Yes | ✅ Yes | ✅ Yes
//var | ✅ Yes | ❌ No | ⚠️ Yes, but undefined
//let | ✅ Yes | ❌ No | ❌ No (TDZ error)
//const | ✅ Yes | ❌ No | ❌ No (TDZ error)


