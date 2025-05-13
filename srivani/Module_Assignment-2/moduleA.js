import { functionB } from './moduleB.js';

export function functionA() {
  console.log('Function A');
  functionB();
}
