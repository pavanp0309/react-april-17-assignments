// 4.Combining Default and Named Exports:
// In calculator.js, create a default export function divide(a, b) and a named export function multiply(a, b).
//  Import these functions in app.js and use them in calculations.

export default function divide(a,b){
    console.log("division is "+a/b)
}

export function multiply(a,b){
    console.log("multiplication is "+a*b)
}