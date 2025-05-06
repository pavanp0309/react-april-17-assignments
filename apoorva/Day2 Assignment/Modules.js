//Q1 Export and Import Basics
// math.js

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  // Export the functions
  module.exports = { add, subtract };

  //Q2 Default Export 

  // greeting.js

export default function greet(name) {
  return `Hello, ${name}! Welcome!`;
}

// app.js

import greet from './greeting.js'; // Notice no curly braces for default export

const userName = 'Alice';

console.log(greet(userName)); 

//Q3 Named Exports

// user.js

let userName = '';

export function setUser(name) {
  userName = name;
}

export function getUser() {
  return userName;
}
// app.js

import { setUser, getUser } from './user.js';

setUser('Charlie');

console.log(`The current user is: ${getUser()}`);

//Q4 Combining Default and Named Exports

// calculator.js

// Default export
export default function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  // Named export
  export function multiply(a, b) {
    return a * b;
  }
  // app.js

import divide, { multiply } from './calculator.js';

const num1 = 20;
const num2 = 5;

console.log(`Multiplication of ${num1} and ${num2} is:`, multiply(num1, num2));
console.log(`Division of ${num1} by ${num2} is:`, divide(num1, num2));

//Q5 Renaming Imports 

// mathOperations.js

export function calculateSum(a, b) {
    return a + b;
  }
  // app.js

import { calculateSum as sum } from './mathOperations.js';

const num1 = 8;
const num2 = 12;

console.log(`The sum of ${num1} and ${num2} is:`, sum(num1, num2));

//Q6  Multiple Named Exports 

// stringUtils.js

export function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  export function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  export function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  // app.js

import { toUpperCase, toLowerCase, capitalize } from './stringUtils.js';

const inputString = 'hElLo WoRLd';

console.log('Original:', inputString);
console.log('Uppercase:', toUpperCase(inputString));
console.log('Lowercase:', toLowerCase(inputString));
console.log('Capitalized:', capitalize(inputString));


//Q7 Exporting Objects 

// config.js

export const config = {
    appName: 'AwesomeApp',
    version: '1.0.0',
    author: 'John Doe'
  };
  
  // app.js

import { config } from './config.js';

console.log(`Application Name: ${config.appName}`);
console.log(`Version: ${config.version}`);
console.log(`Author: ${config.author}`);


//Q8  Exporting Classes 

// Person.js

export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  // app.js

import { Person } from './Person.js';

const person1 = new Person('Alice', 30);

console.log(person1.getDetails());


//Q9 Circular Imports 

// moduleA.js

import { functionB } from './moduleB.js';

export function functionA() {
  console.log('Function A is called.');
  functionB(); // Calling functionB from moduleB
}
// moduleB.js

import { functionA } from './moduleA.js';

export function functionB() {
  console.log('Function B is called.');
  functionA(); // Calling functionA from moduleA
}
// app.js

import { functionA } from './moduleA.js';

functionA();


//Q10  Re - exporting   Modules 

// math.js

export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  // string.js

export function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  export function toLowerCase(str) {
    return str.toLowerCase();
  }
  // index.js

export * from './math.js';
export * from './string.js';
// app.js

import * as utils from './index.js';

console.log('Add:', utils.add(5, 3));           // 8
console.log('Subtract:', utils.subtract(10, 4)); // 6
console.log('Uppercase:', utils.toUpperCase('hello')); // HELLO
console.log('Lowercase:', utils.toLowerCase('WORLD')); // world


//Q11  Named Exports and Imports 

// stringUtils.js

export function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  
  export function lowercase(str) {
    return str.toLowerCase();
  }
  // app.js

import { capitalize } from './stringUtils.js';

const input = 'hello world';

console.log('Capitalized:', capitalize(input));  // Output: "Hello world"


//Q12  
// mathOperations.js

// Default export for subtract function
export default function subtract(a, b) {
    return a - b;
  }
  
  // Named export for multiply function
  export function multiply(a, b) {
    return a * b;
  }
  // app.js

import subtract, { multiply } from './mathOperations.js';

const num1 = 10;
const num2 = 5;

console.log(`Subtraction of ${num1} and ${num2} is:`, subtract(num1, num2)); // 5
console.log(`Multiplication of ${num1} and ${num2} is:`, multiply(num1, num2)); // 50



