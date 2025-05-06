// 9.Circular Imports:
// Create two files, moduleA.js and moduleB.js. Export a function from each that 
// imports and calls a function from the other module. Observe how circular imports are handled in ES6.

import { funcB } from './moduleB.js';

export function funcA() {
    console.log("Inside funcA (from moduleA)");
    funcB(); // Calls function from moduleB
}