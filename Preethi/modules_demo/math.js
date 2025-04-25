//1.Export and Import Basics:
//Create a file math.js that exports two functions, add(a, b) and subtract(a, b). 
// Create another file app.js that imports these functions and uses them to add and subtract two numbers.

function add(a,b){
    return a+b;
}

const sub= (x,y) => {
   return x-y;
}

export {add,sub}