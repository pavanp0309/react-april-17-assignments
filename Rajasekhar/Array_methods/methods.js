          //Basic level
// 1. Transform Elements with `.map()`
const names = ["sekhar", "siva", "laxmanarao"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); 


// 2. Filter Items with `.filter()`
const numbers = [5, 12, 8, 20, 3];
const filteredNumbers = numbers.filter(num => num >= 10);
console.log(filteredNumbers); // [12, 20]


// 3. Calculate Total with `.reduce()`
const expenses = [100, 200, 50, 300];
const totalExpenses = expenses.reduce((acc, val) => acc + val, 0);
console.log(totalExpenses); // 650


// 4. Find an Item with `.find()`
const tasks = [
  { name: "Task 1", completed: false },
  { name: "Task 2", completed: true },
  { name: "Task 3", completed: false }
];
const firstCompleted = tasks.find(task => task.completed);
console.log(firstCompleted); // { name: "Task 2", completed: true }


// 5. Sort Items with `.sort()`
const scores = [45, 10, 85, 30];
const sortedScores = scores.sort((a, b) => a - b);
console.log(sortedScores); // [10, 30, 45, 85]


           //Medium Level

// 1. Chain Methods
//  Task: Filter numbers greater than 10, then double them using `.map()`
const numbers1 = [5, 12, 8, 20, 3];
let greaterThan10 = numbers1.filter((ele,i)=> ele>10);
let doubleEle = greaterThan10.map((ele)=> ele*2);
console.log(doubleEle);//[24, 40]


//  2. Find Total Stock
//  Task: Calculate the total stock from an array of products using `.reduce()`
const products = [
   { name: "Laptop", stock: 10 },
   { name: "Phone", stock: 5 },
   { name: "Tablet", stock: 8 }
  ];
let totalStock = products.reduce((tot,prod)=> tot+prod.stock,0);
console.log(totalStock);//23


// 3. Validate Data with `.every()`
//  Task: Check if all users in an array are verified.
const users = [
   { name: "Alice", verified: true },
   { name: "Bob", verified: true },
   { name: "Charlie", verified: false }
  ];
let verifyUsers= users.every((user) => user.verified);
console.log(verifyUsers);//false


// 4. Identify Urgent Tasks with `.some()`
//  Task: Check if there are any urgent tasks in the list.
const tasks1 = [
   { name: "Task 1", urgent: false },
   { name: "Task 2", urgent: true },
   { name: "Task 3", urgent: false }
  ];
let checkUrgent = tasks1.some((task)=> task.urgent);
console.log(checkUrgent);//true


// 5. Custom Sorting**
//  Task: Sort an array of objects by age in descending order.
const people = [
   { name: "Alice", age: 25 },
   { name: "Bob", age: 30 },
   { name: "Charlie", age: 20 }
  ];
let sortByAge = people.sort((per1,per2)=>per2.age - per1.age );
console.log(sortByAge);// {name: 'Bob', age: 30}{name: 'Alice', age: 25}{name: 'Charlie', age: 20}


   // Advanced Level

// 1. Group Items by Category
const groupedProducts = products.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
  console.log(groupedProducts);
  

  // 2. Chain Multiple Methods
  const availableProductNames = products
    .filter(product => product.stock > 0)
    .map(product => product.name)
    .sort();
  console.log(availableProductNames); // ["Laptop", "Tablet"]
  

  // 3. Advanced Search with `.find()` and `.filter()`
  const allProducts = [
    { name: "Laptop", category: "Electronics", stock: 0 },
    { name: "Shirt", category: "Clothing", stock: 5 },
    { name: "Phone", category: "Electronics", stock: 10 }
  ];
  const inStockElectronics = allProducts.find(
    product => product.category === "Electronics" && product.stock > 0
  );
  console.log(inStockElectronics); // { name: "Phone", category: "Electronics", stock: 10 }
  

  // 4. Nested Data Transformation
  const posts = [
    { id: 1, tags: ["javascript", "web"] },
    { id: 2, tags: ["javascript", "react"] },
    { id: 3, tags: ["web", "css"] }
  ];
  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
  console.log(uniqueTags); // ["javascript", "web", "react", "css"]
  

  // 5. Implement Custom Methods
  function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  const numbersList = [1, 2, 3];
  const double = customMap(numbersList, num => num * 2);
  console.log(double); // [2, 4, 6]