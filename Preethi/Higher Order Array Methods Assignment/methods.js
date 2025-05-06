//Basic Level

// 1. Transform Elements with `.map()`
// Task: You have an array of names. Convert all names to uppercase

const names = ["alice", "bob", "charlie"];
let upperCase = names.map((ele,i) => ele.toUpperCase());
console.log(upperCase);

// 2. Filter Items with `.filter()`
// Task: You have an array of numbers. Filter out all numbers less than 10

const numbers = [5, 12, 8, 20, 3];
let lessThan = numbers.filter((ele,i)=> ele > 10);
console.log(lessThan);

// 3. Calculate Total with `.reduce()`
// Task: Find the sum of all elements in an array

const expenses = [100, 200, 50, 300];
let sumOfEle = expenses.reduce((sum,ele)=> sum+ele);
console.log(sumOfEle);

// 4. Find an Item with `.find()`
//  Task: You have a list of tasks. Find the first task that is marked as `completed`

const tasks = [
    { name: "Task 1", completed: false },
    { name: "Task 2", completed: true },
    { name: "Task 3", completed: false }
   ];
let taskCompleted = tasks.find((task)=>task.completed);
console.log(taskCompleted)

// 5. Sort Items with `.sort()`
//  Task: Sort an array of numbers in ascending order.

const scores = [45, 10, 85, 30];
let SortAscending = scores.sort((a,b)=> a-b);
console.log(SortAscending);

//Medium Level

// 1. Chain Methods
//  Task: Filter numbers greater than 10, then double them using `.map()`

 const numbers1 = [5, 12, 8, 20, 3];
 let greaterThan10 = numbers1.filter((ele,i)=> ele>10);
 let doubleEle = greaterThan10.map((ele)=> ele*2);
 console.log(doubleEle);

//  2. Find Total Stock
//  Task: Calculate the total stock from an array of products using `.reduce()`

const products = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 5 },
    { name: "Tablet", stock: 8 }
   ];
let totalStock = products.reduce((tot,prod)=> tot+prod.stock,0);
console.log(totalStock);

// 3. Validate Data with `.every()`
//  Task: Check if all users in an array are verified.

const users = [
    { name: "Alice", verified: true },
    { name: "Bob", verified: true },
    { name: "Charlie", verified: false }
   ];
let verifyUsers= users.every((user) => user.verified);
console.log(verifyUsers);

// 4. Identify Urgent Tasks with `.some()`
//  Task: Check if there are any urgent tasks in the list.

const tasks1 = [
    { name: "Task 1", urgent: false },
    { name: "Task 2", urgent: true },
    { name: "Task 3", urgent: false }
   ];
let checkUrgent = tasks1.some((task)=> task.urgent);
console.log(checkUrgent);

// 5. Custom Sorting**
//  Task: Sort an array of objects by age in descending order.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
   ];
let sortByAge = people.sort((per1,per2)=>per2.age - per1.age );
console.log(sortByAge);

//Advanced Level

// 1. Group Items by Category
//  Task: Group products by their category using `.reduce()`.

const products1 = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Pants", category: "Clothing" }
   ];
let grpProdByCate = products1.reduce((acc,prod)=>{
    const category = prod.category;
    if(!acc[category]){
        acc[category]=[]; 
    }
    acc[category].push(prod);
    return acc;
},{} );

console.log(grpProdByCate);

// 2. Chain Multiple Methods**
//  Task: Filter products in stock, then map their names, and sort alphabetically.

const products2 = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 5 }
   ];
let filterStock = products2.filter((ele)=> ele.stock);
let mapName = filterStock.map((ele)=> ele.name);
let sortName = mapName.sort()
console.log(sortName);

// 3. Advanced Search with `.find()` and `.filter()`
//  Task: Find the first product in a specific category that is in stock.

const products3 = [
    { name: "Laptop", category: "Electronics", stock: 0 },
    { name: "Shirt", category: "Clothing", stock: 5 },
    { name: "Phone", category: "Electronics", stock: 10 }
   ];
let searchFirstStock = products3
             .filter((prod)=> prod.stock)
             .find((prod)=> prod.category=="Electronics");
console.log(searchFirstStock);

// 4. Nested Data Transformation**
//  **Task: Flatten and extract unique tags from a list of posts.

const posts = [
    { id: 1, tags: ["javascript", "web"] },
    { id: 2, tags: ["javascript", "react"] },
    { id: 3, tags: ["web", "css"] }
   ];
let extractUniqueTags = posts.flatMap((post)=> post.tags)//Extracts all tags from each post and flattens them into one array
let newSet = [...new Set(extractUniqueTags)]
//new Set(...)= Removes duplicate tags, because a Set only stores unique values.
//[...new Set(...)]= Converts the Set back to a regular array.
console.log(newSet);

// 5. Implement Custom Methods**
// **Task: Write your own version of `.map()` as a function.

const numbers2 =  [1, 2, 3];
const double =  customMap(numbers2, (num) => num * 2);

function customMap(arr, callback){
    const result=[];
    for(let i=0; i < arr.length; i++){
       result.push(callback(arr[i],i,arr));
    }
    return result;
}
console.log(double);

