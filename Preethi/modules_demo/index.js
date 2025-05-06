// 10.Re-exporting Modules:
// Create two files, math.js and string.js, each exporting some functions. 
// Create a third file index.js that re-exports all functions from math.js and string.js. Import everything in app.js and use it.

function toUpperCase(str){
    
    return str.toUpperCase();
  }
  function toLowerCase(str){
      return str.toLowerCase();
  }
  function capitalize(str){
      return str[0].toUpperCase()+str.slice(1).toLowerCase();
  }
  function add(a,b){
    return a+b;
}

const sub= (x,y) => {
   return x-y;
}

  export {toLowerCase, toUpperCase, capitalize, add,sub}