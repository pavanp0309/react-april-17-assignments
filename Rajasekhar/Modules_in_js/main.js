// main.js
console.log("assignment-1")

import { add, subtract } from './math.js';
console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  //2

//assignment-2
console.log("assignment-2")

import greet from './math.js';
console.log(greet("Raj")); 

// //assignment-3
// console.log("assignment-3")

// import { setUser, getUser } from './math.js';
// setUser("rajasekhar");
// console.log(getUser());

// //assignment-4
// console.log("assignment-4")
// import divide1, { multiply } from './math.js';
// console.log(divide1(10, 2));  // 5
// console.log(multiply(3, 4)); // 12

// //assignment-5
// console.log("assignment-5")

// import { calculateSum as sum } from './math.js';
// console.log(sum(4, 5)); // 9

//assignment-6
console.log("assignment-6")

import { toUpperCase, toLowerCase, capitalize } from './math.js';
console.log(toUpperCase('hello'));   // HELLO
console.log(toLowerCase('WORLD'));   // world
console.log(capitalize('javaSCRIPT')); // Javascript


// assignment -7
console.log("assignment-7")

import { config } from './math.js';
console.log(config);

// assignment -8
console.log("assignment-8")

import { Person } from './math.js';

const person = new Person('siva', 30);
console.log(person.getDetails()); 

// assignment -9
console.log("assignment-9")

import { fromA } from './math.js';

export function fromB() {
  console.log('Hello from B');
//   Avoid calling fromA() to prevent infinite loop
}

//assignment-10
console.log("assignment-10")
import { add12, subtract12 } from './math.js';

console.log(add12(2, 3));       // 5
console.log(subtract12(5, 2));  // 3

// assignment -11
console.log("assignment-11")

import { capitalize12 } from './math.js';

console.log(capitalize12('rajasekhar')); // Rajasekhar


// assignment -12
console.log("assignment-12")

import sub, { multiply } from './math.js';

// console.log(sub(10, 4)); // 6  //already exist default function above code.
console.log(multiply(3, 3));  // 9