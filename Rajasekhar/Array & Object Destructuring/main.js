// 1. Extract User Details
function dd({ name, id }) {
    console.log(`Name: ${name}, ID: ${id}`);
  }
  const rrr={name:'raju',email:"rrr@grs.com",id:101}
  dd(rrr);


  
  // 2. Process Product Data
  function rr1({ name, price = 500 }) {
    console.log(`${name} costs $${price}`);
  }
  rr1({ name: "Mobile" }); 
  rr1({name: "Laptop", price: 1200});
  


  // 3. Handle API Response
  function hr({ status, data }) {
    console.log(`Status: ${status}, Data:${ data}`);
    console.log(`Status: ${status}, Data:`,data);
   }
  const apiResponse = {status: 200, data: { id: 1,  message: "Success" }, time: "30:00am" };
  
  hr(apiResponse);
  


  // 4. Update Settings
  function updateSettings({ theme, notifications = true }) {
    console.log(`Theme: ${theme}, Notifications: ${notifications}`);
  }
  const us={theme:"dark",notifications:false};
  const us1={theme:"light"};
  updateSettings(us);
  updateSettings(us1);
  


  // 5. Filter Search Parameters
  function filterSearch({ query, page:{id} }) {
    console.log(`Query: ${query}, Page: ${id}`);
  }
const pf={id:332,query:"landon",page:{id:109,nn:"rrr"}};
filterSearch(pf);


  
  // 6. Log Task Details
  function logTaskDetails({ id, completed }) {
    console.log(`Task ID: ${id}, Completed: ${completed}`);
  }
  const task = { id: 1, title: "Do homework", completed: "yes" };
  logTaskDetails(task);
 
  

  // 7. Extract Nested Profile Information
  function showProfile({ name, location: { city } }) {
    console.log(`${name} lives in ${city}`);
  }
  const en={name:"rrr",location:{city:"sklm"}};
  showProfile(en);
  


  // 8. Map Over Users
  function logUsers(users) {
    users.forEach(({ name, email }) => {
      console.log(`Name: ${name}, Email: ${email}`);
    });
  }
  const users = [{ name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }];
logUsers(users);
  
 

// 9. Combine Properties Using Rest
  function extractUserDetails({ name, ...details }) {
    console.log(`Name: ${name}, Details:`, details);
  }
  const a={name:"raj",id:120,rrr:2233,details:"1-19c",final:"end"};
  extractUserDetails(a);
  

  
  // 10. Handle Dynamic Destructuring
  function getDynamicValue(obj, key) {
    return obj[key];
  }
  const ob={kkr:"drop",rcb:"win"};
  const ke="rcb";
  const value = getDynamicValue(ob, ke);
  console.log(value);
  


  // 11. Extract Nested Properties with Default Values
  function displayConfig({ database: { host, port }, user = 'admin' }) {
    console.log(`Host: ${host}, Port: ${port}, User: ${user}`);
  }
  displayConfig({user:"you",database:{host:"all"}});
  


  // 12. Swap Variables Using Destructuring
  let a1 = 1, b1 = 2;
  [a1, b1] = [b1, a1];
  console.log(`a: ${a1}, b: ${b1}`);


  
  // 13. Handle Missing Keys Gracefully
  function processData({ id, name = 'Unknown' }) {
    console.log(`ID: ${id}, Name: ${name}`);
  }
  processData({id:1111});
  


  // 14. Merge Objects with Rest and Destructuring
  function mergeUsers(user) {
    const newUser = { ...user, role: "User" };
    console.log(newUser);
  }
  const user = { name: "Alice", age: 25 };
  mergeUsers(user);



  // 15. Extract Coordinates from Object
  function extractCoordinates({ x, y }) {
    console.log(`X: ${x}, Y: ${y}`);
  }
  extractCoordinates({});
  


  // 16. Destructure Array Elements
  function logFirstTwo([first, second]) {
    console.log(`First: ${first}, Second: ${second}`);
  }
  logFirstTwo([12,"rrr"]);
  


   // 17. Extract Values with Aliases
  function logUser({ id, name }) {
    console.log(`ID: ${id}, Name: ${name}`);
  }
  const abc={id:12,nm:"raj",name:"ssmb"};
  logUser(abc);
  

  
  // 18. Flatten Nested Objects
  function flattenObject({ user: { id, profile: { name, age } } }) {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
  }
  const sekhar={user:{profile:{name:"raju"}}};
  flattenObject(sekhar);


  
  // 19. Destructure Function Parameters with Defaults
  function logRole({ name, role = 'user' }) {
    console.log(`Name: ${name}, Role: ${role}`);
  }
  const a2={name:"123",role:"developer"};
  logRole(a2);
  


  // 20. Destructure Arrays with Rest
  function extractRest([first, ...rest]) {
    console.log(`First: ${first}, Rest:`, rest);
  }
  const b2=[11,20,80,"first",23,89,"rest",98];
  extractRest(b2);
  


  // 21. Dynamic Nested Destructuring
  function getNestedValue(obj, path) {
    return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
  }
  const c2={name:{rr:{sr:"raju"}}};
  console.log(getNestedValue(c2,"name.id"));
  console.log(getNestedValue(c2,"name.rr.sr"));
  


  // 22. Validate and Destructure
  function validateAndLog({ theme, notifications }) {
    if (notifications === undefined) {
      console.log('Error: Missing required property "notifications"');
    } else {
      console.log(`Theme: ${theme}, Notifications: ${notifications}`);
    }
  }
  const settings1 = { theme: "dark", notifications: true};
  const settings2 = {theme: "light" };
  validateAndLog(settings1);
  validateAndLog(settings2);
 
 

  // 23. Partial Destructuring
  function extractImportant({ id, name }) {
    console.log(`ID: ${id}, Name: ${name}`);
  }
  extractImportant({name:"raju",rollno:88});
  


  // 24. Multi-Level Destructuring in Function Arguments
  function displayUsername({ user: { profile: { username } } }) {
    console.log(`Username: ${username}`);
  }
  const data={user:{profile:{username:"101",id:102}}};
displayUsername(data);
  