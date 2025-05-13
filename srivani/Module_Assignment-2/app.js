/*import { add, subtract } from './Math.js';

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2*/

import greet from './greeting.js';

console.log(greet('srivani'));  // hello srivani
import { getUser,setUser } from './User.js';
console.log(getUser("Sri"));
console.log (setUser("srivani"));

import divide, { multiply } from './calculator.js';

console.log(divide(10, 2));   // 5
console.log(multiply(3, 4));  // 12

import { calculateSum as sum } from './mathopera.js';

console.log(sum(7, 8));  // 15

/*import { toUpperCase, toLowerCase, capitalize } from './string.js';

console.log(toUpperCase('hello'));
console.log(toLowerCase('WORLD'));
console.log(capitalize('javaScript'));*/

import appConfig from './exportobj.js';

console.log(appConfig);

import { Person } from './expoclass.js';

const person = new Person('sri', 21);
console.log(person.getDetails());

import { functionA } from './moduleA.js';

functionA();


import { add, capitalize } from './index.js';

console.log(add(10, 20));
console.log(capitalize('react'));

import { capitalize } from './string.js';

console.log(capitalize('frontend'));

import subtract, { multiply } from './mathOperations.js';

console.log(subtract(10, 5));  // 5
console.log(multiply(4, 3));   // 12





