// 6.Multiple Named Exports:
// In stringUtils.js, export three functions: toUpperCase(str), toLowerCase(str), and capitalize(str).
//  Import and use these functions in app.js to manipulate a string.

function toUpperCase(str){
    
  return str.toUpperCase();
}
function toLowerCase(str){
    return str.toLowerCase();
}
function capitalize(str){
    return str[0].toUpperCase()+str.slice(1).toLowerCase();
}
export {toLowerCase, toUpperCase, capitalize}