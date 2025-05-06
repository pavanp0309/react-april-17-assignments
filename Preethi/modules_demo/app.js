import {add, sub} from "./math.js"
import msg from "./greetings.js"
import * as messages from "./users.js"
import divide,{multiply} from "./calculator.js"
import { calculateSum as Sum } from "./mathOperations.js"
import * as strings from "./stringUtils.js"
import { logInDetails , display} from "./config.js"
import { Person } from "./person.js"
import { funcA } from './moduleA.js';
import * as index from "./index.js";

console.log("addition is "+add(5,5));
console.log("Subtraction is "+sub(5,3));
console.log(msg("Preethi"));
console.log(messages.getUser("ramya"));
console.log(messages.setUser("raasi"));
divide(9,3);
multiply(5,5);
console.log("Sum is "+Sum(7,8));
console.log(strings.toUpperCase("preethi"));
console.log(strings.toLowerCase("RAMYA"));
console.log(strings.capitalize("rassi"));
console.log(logInDetails);
display();
const preson1=new Person("Preethi",21);
console.log(preson1.getdetails());
funcA();
console.log(index.add(5,90));
console.log(index.sub(5,1));
console.log(index.toUpperCase("preethi"));
console.log(index.toLowerCase("RAMYA"));
console.log(index.capitalize("rassi"));