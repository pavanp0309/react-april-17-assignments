// math.js

export function add(a, b) {
    return a + b;
  }
  export function subtract(a, b) {
    return a - b;
  }

  //assignment-2
  export default function greet(name) {
    return `Hello, ${name}!`;
  }

//   //assignment-3
//   let user = "";
// export function setUser(name) {
//   user = name;
// }
// export function getUser() {
//   return user;
// }

// //assignment-4
// export default function divide1(a1, b1) {
//     return a1 / b1;
//   }
//   export function multiply(a, b) {
//     return a * b;
//   }

// //assignment-5
// export function calculateSum(a, b) {
//     return a + b;
//   }

//assignment-6
export function toUpperCase(str) {
    return str.toUpperCase();
  }
  export function toLowerCase(str) {
    return str.toLowerCase();
  }
  export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

//assignment-7
export const config = {
  appName: 'MyApp',
  version: '1.0.0',
  author: 'Rajasekhar'
};

//assignment-8
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

//assignment-9
import { fromB } from './main.js';

export function fromA() {
  console.log('Hello from A');
  fromB();
}

//assignment-10
export function add12(a, b) { return a + b; }
export function subtract12(a, b) { return a - b; }

//assignment-11
export function capitalize12(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function lowercase(str) {
  return str.toLowerCase();
}


//assignment-12
// export default function sub(a, b) {  // already exist default function above code.
//   return a - b;
// }

export function multiply(a, b) {
  return a * b;
}
