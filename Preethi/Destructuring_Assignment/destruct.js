// 1. Extract User Details
// Write a function that extracts `name` and `email` from a user object and logs them

const user={
    name:"preethi",
    email:"preet@gmail.com"
}
const UserDetails= ({name,email})=>  `Name: ${name}, Email: ${email}`;
console.log(UserDetails(user));

// 2. Process Product Data
//  Write a function that extracts `name` and `price` from a product object and logs them, with a default
//  value for `price`

const ProductData={
    name:"Air Conditioner",
    price:1000000
}
const  displayProduct= ({name,price})=> `${name} costs $${price}`;
console.log( displayProduct(ProductData));

// 3. Handle API Response
// Write a function that extracts `status` and `data` from an API response and logs them

const apiResponse = { 
    status: 200,
     data: { 
        id: 101,
         title: 'Learn JavaScript' 
        } 
        };
const  handleResponse= ({status , data:{id,title}}) => `Status: ${status}, Data: id:${id}, title:${title}`
console.log( handleResponse(apiResponse));

// 4. Update Settings
// Write a function that extracts `theme` and `notifications` from a settings object and logs them, with a
// default value for `notifications`

const settings = { theme: 'dark' };
const  updateSettings= ({theme:th, notification=true}) => `Theme: ${th}, Notifications: ${notification}`
console.log(updateSettings(settings));

// 5. Filter Search Parameters
// Write a function that extracts `query` and `page` from a search parameter object and logs them.

const searchParams = { 
    query: 'JavaScript',
     page: 1
    }
const  filterSearch= ({query, page}) => `Query: ${query}, Page: ${page}`;
console.log(filterSearch(searchParams));

// 6. Log Task Details
// Write a function that extracts `id` and `completed` from a task object and logs them

const task = { 
    id: 1,
    title: 'Do homework',
    completed: false }
const  logTaskDetails= ({id,completed})=> `Task ID: ${id}, Completed: ${completed}`
console.log(logTaskDetails(task));

// 7. Extract Nested Profile Information
// Write a function that extracts `name` and `city` from a nested profile object and logs them

const profile = { 
    name: 'Bob',
    location: { 
        city: 'Berlin', 
        country: 'Germany' }
     }
const showProfile = ({name, location:{city}}) => `${name} lives in ${city}`
console.log(showProfile(profile));

// Map Over Users
// Write a function that logs the `name` aand `email` of each user in an array of user objects

const users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
   ]
function logUsers(user){
  user.forEach(({name,email}) => {
    console.log(`Name: ${name}, Email: ${email}`)});
}
logUsers(users);

// 9. Combine Properties Using Rest
// Write a function that extracts `name` and combines the remaining properties of a user object into a
// separate object

const user1 = { 
    name: 'Charlie', 
    age: 30,
    country: 'USA' }
const extractUserDetails= ({name, ...details})=> {
    console.log(`Name: ${name},Details: `,details)
}
extractUserDetails(user1)

// 10. Handle Dynamic Destructuring
//  Write a function that dynamically extracts a value from an object using a provided key.

const user2 = { 
    name: 'Dave', 
    age: 35, 
    email: 'dave@example.com' }
function getDynamicValue(obj, key) {
    const { [key]: value } = obj;//{ [key]: value }, the square brackets let you dynamically destructure based on a variable key 
    return value;
    }
      
console.log(getDynamicValue(user2, 'email'));

// 11. Extract Nested Properties with Default Values
//  Write a function that extracts `host`, `port`, and a default `user` from a nested configuration object.

const config = { 
    database: { 
        host: 'localhost', 
        port: 5432 } 
    }
const displayConfig = ({database:{host,port},user="admin" }) => `Host: ${host}, Port: ${port}, User: ${user}`;
console.log(displayConfig(config));

// 12. Swap Variables Using Destructuring
//  Write a destructuring statement to swap the values of two variables

let a = 1, b = 2;
[a,b]=[b,a];
console.log("a:",a," b:",b)

// 13. Handle Missing Keys Gracefully
// Write a function that extracts `id` and `name` from an object, providing a default value for `name`

const data = { id: 42 }
const processData= ({id,name="Unknown"})=> `ID: ${id}, Name: ${name}`
console.log(processData(data));

// 14. Merge Objects with Rest and Destructuring
// Write a function that combines two objects using destructuring and rest syntax

const user3 = { name: 'Eve', age: 28 };
const user4 = { country: 'France' };

function mergeUsers(users){
    const {...mergedUser}=users;
    console.log(users)
}
mergeUsers({...user3, ...user4});

// Extract Coordinates from Object
//Write a function that extracts `x` and `y` coordinates from a point object and logs them.

const point = { x: 10, y: 20, z: 30 };
const extractCoordinates= ({x,y})=> `X: ${x}, Y:${y}`
console.log(extractCoordinates(point))

// 16. Destructure Array Elements
// Write a function that extracts the first two elements from an array and logs them

const numbers = [100, 200, 300];
function logFirstTwo([a,b]){
    console.log("First:",a,"Second:",b)
}
logFirstTwo(numbers)

// 17. Extract Values with Aliases
// Write a function that destructures `id` and `name` from an object and logs them with aliases.

const user5 = { userId: 7, userName: 'John' };
function logUser({userId:id,userName:name}){
    console.log("ID:",id,"Name:",name)
}
logUser(user5)

// 18. Flatten Nested Objects
// Write a function that extracts values from a deeply nested object and logs them in a flattened
//  manner

const data1 = { 
    user: { 
        id: 1, 
        profile: { 
            name: 'Anna', 
            age: 25 } 
        } }
function flattenObject({user:{id,profile:{name,age}}}){
    console.log("ID:",id,"Name:",name,"Age:",age)
}
flattenObject(data1)

// 19. Destructure Function Parameters with Defaults
// Write a function that extracts `name` and `role` with a default value from its parameters

const role={Role:"user"};
const logRole= ({name="Ella",Role})=> `Name: ${name}, Role: ${Role}`
console.log(logRole(role))

// 20. Destructure Arrays with Rest
// Write a function that extracts the first element of an array and logs the rest as a separate array

const items = [1, 2, 3, 4];
function extractRest([a,...i]){
    console.log("First:",a,",","Rest:",i)
}
extractRest(items)

// 21. Dynamic Nested Destructuring
//  Write a function that extracts a nested property dynamically using a key

// const obj = { 
//     details: { 
//         address: { 
//             city: 'Paris' } 
//         } 
//     }
// function getNestedValue(objec,key){
//     const {[key]:val}=objec;
//     return val;
// }
// console.log(getNestedValue(obj,'details.address.city'))
function getNestedValue(obj, path) {
    const keys = path.split('.'); // Split 'address.city' => ['address', 'city']
    
    let current = obj.details; // Start from obj.details
    
    for (const key of keys) {
      if (current && key in current) {
        current = current[key]; // Go deeper step-by-step
      } else {
        return undefined; // Key not found
      }
    }
    
    return current;
  }
  
  // Test case
  const obj = { details: { address: { city: 'Paris' } } };
  console.log(getNestedValue(obj, 'address.city'));
  

// 22. Validate and Destructure
// Write a function that validates the presence of specific properties before destructuring an object.

function validateAndLog(obj) {
    if (!('theme' in obj) || !('notifications' in obj)) {
      console.error('Error: Missing required property "notifications"');
      return;
    }
  
    const { theme, notifications } = obj;
    console.log(`Theme: ${theme}, Notifications: ${notifications}`);
  }
  
  // Test case
  const settings1 = { theme: 'light' };
  validateAndLog(settings1);

//   23. Partial Destructuring
//   Write a function that extracts only specific keys from a larger object and ignores the rest

const bigObject = { id: 1, name: 'Test', extra: 'Ignore me' }
function extractImportant({id,name,...i}){
    console.log("ID:",id,",","Name:",name);
}
extractImportant(bigObject)

// 24. Multi-Level Destructuring in Function Arguments
//  Write a function that extracts values from multiple levels of nesting within the function arguments.

const data6 = { user: { profile: { username: 'Max' } } }
function displayUsername({user:{profile:{username:name}}}){
    console.log("Username:",name)
}
displayUsername(data6)
