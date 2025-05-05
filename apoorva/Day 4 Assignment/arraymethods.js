//Basic Level
//Q1 Transform Elements with `.map()`** You have an array of names. Convert all names to uppercase.

const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(name => name.toUpperCase());

console.log(uppercasedNames); // ['ALICE', 'BOB', 'CHARLIE']

//Q2 Filter Items with `.filter()`** You have an array of numbers. Filter out all numbers less than 10

const numbers = [5,12,8,20,3];
const filteredNumbers = numbers.filter(number => number >= 10);

console.log(filteredNumbers); // [12,20]

//Q3 Calculate Total with `.reduce()`** Find the sum of all elements in an array

const numbers = [100,200,50,300];
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total); // 650

//Q4 Find an Item with `.find()`** You have a list of tasks. Find the first task that is marked as `completed`.

const tasks = [
    { name:"Task 1", completed: false },
    { name:"Task 2", completed: true },
    { name:"Task 3" , completed: false}
  ];
  
  const firstCompletedTask = tasks.find(task => task.completed);
  
  console.log(firstCompletedTask);
  // { name:"Task 2", completed: true }

  //Q5 Sort Items with `.sort()`** Sort an array of numbers in ascending order

  const numbers = [45,10,85,30];
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers); // [10,30,45,85]

//Medium Level 

//Q1 . Chain Methods**  Filter numbers greater than 10, then double them using `.map()`.

const numbers = [5, 12, 8, 20, 3];
const result = numbers
  .filter(num => num > 10)
  .map(num => num * 2);

console.log(result); // [24, 40] 

//Q2 Find Total Stock** Calculate the total stock from an array of products using `.reduce()

const products = [
    { name: 'Laptop', stock: 10 },
    { name: 'Phone', stock: 5},
    { name: 'Tablet', stock: 8 }
  ];
  
  const totalStock = products.reduce((total, product) => total + product.stock, 0);
  
  console.log(totalStock); // 23

  //Q3 Validate Data with `.every()`** Check if all users in an array are verified.
  
  const users = [
    { name: 'Alice', verified: true },
    { name: 'Bob', verified: true },
    { name: 'Charlie', verified: false }
  ];
  
  const allVerified = users.every(user => user.verified);
  
  console.log(allVerified); // false

  //Q4 Identify Urgent Tasks with `.some()`** Check if there are any urgent tasks in the list.
  
  const tasks = [
    {name:"Task 1", urgent: false },
    { name:"Task 2", urgent: true },
    { name:"Task 3" urgent: false }
  ];
  
  const hasUrgentTask = tasks.some(task => task.urgent);
  
  console.log(hasUrgentTask); // true

  //Q5  Custom Sorting** Sort an array of objects by age in descending order.
  
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30,
    { name: "Charlie", age: 20 }
  ];
  
  people.sort((a, b) => b.age - a.age);
  
  console.log(people);

  //Advanced Level 

  //Q1  Group Items by Category** Group products by their category using `.reduce()`.
  
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Pants", category: "Clothing" },

  ];
  
  const groupedByCategory = products.reduce((acc, product) => {
    // If the category doesn't exist in the accumulator, create it
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // Push the product into the appropriate category
    acc[product.category].push(product);
    return acc;
  }, {});
  
  console.log(groupedByCategory);

  //Q2 Chain Multiple Methods** Filter products in stock, then map their names, and sort alphabetically.
  
  const products = [
    { name: "Laptop",Stock: 10},
    { name: "Phone", Stock: 0 },
    { name: "Tablet",Stock: 5},
  ];
  
  const result = products
    .filter(product => product.inStock)          // Filter products that are in stock
    .map(product => product.name)                // Map to only get product names
    .sort((a, b) => a.localeCompare(b));         // Sort names alphabetically
  
  console.log(result);

  //Q3 Advanced Search with `.find()` and `.filter()`** Find the first product in a specific category that is in stock
  
  const products = [
    { name: "Laptop", category: "Electronics",Stock: 0 },
    { name: "Shirt", category: "Clothing", Stock: 5},
    { name: "Phone", category: "Electronics", Stock:10 },
    
  ];
  
  const categoryToSearch = "Electronics";
  
  const firstInStockProduct = products
    .filter(product => product.category === categoryToSearch && product.inStock) // Filter by category and inStock
    .find(product => product); // Find the first one (returns the first product found)
  
  console.log(firstInStockProduct);

  //Q4 Nested Data Transformation** Flatten and extract unique tags from a list of posts.
  
  const posts = [
    { id:1, tags: ["JavaScript", "Web"] },
    { id:2, tags: ["JavaScript", "react"] },
    { id:3 , tags: ["web","css"] },
    
  ];
  
  // Flatten the tags and remove duplicates using Set
  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
  
  console.log(uniqueTags);

  //Q5 . Implement Custom Methods** Write your own version of `.map()` as a function.
   
  function myMap(array, callback) {
    const result = [];  // Initialize an empty array to store the results
    
    for (let i = 0; i < array.length; i++) {
      // Apply the callback function to each element and push the result into the result array
      result.push(callback(array[i], i, array));
    }
    
    return result;  // Return the transformed array
  }
  
  // Example usage
  const numbers = [1, 2, 3];
  const doubledNumbers = myMap(numbers, (num) => num * 2);
  
  console.log(doubledNumbers);  // Output: [2, 4, 6]
  