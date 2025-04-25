import { funcA } from './moduleA.js';

export function funcB() {
    console.log("Inside funcB (from moduleB)");
    funcA(); // Calls function from moduleA
}
