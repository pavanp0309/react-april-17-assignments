function displayUser(user) {
    const { name, email } = user;
    console.log(`Name: ${name}, Email: ${email}`);
  }

  const user = { name: 'sri', email: 'laxmagounisrivani.goud5@gmail.com' };
  displayUser(user);
  
  //2
  function displayProduct(product) {
    const { name, price = 500 } = product;
    console.log(`${name} costs RS ${price}`);
  }
  
  const product = { name: 'Laptop' };
  displayProduct(product);

  //3
  function handleResponse(apiResponse) {
    const { status, data } = apiResponse;
    console.log(`Status: ${status}, Data:`, data);
  }
  
  const apiResponse = { status: 200, data: { id: 101, title: 'Learn JavaScript' } };
  handleResponse(apiResponse);
  //4
  function updateSettings(settings) {
    const { theme, notifications = true } = settings;
    console.log(`Theme: ${theme}, Notifications: ${notifications}`);
  }

  const settings = { theme: 'dark' };
  updateSettings(settings);
  //5
  function filterSearch(searchParams) {
    const { query, page } = searchParams;
    console.log(`Query: ${query}, Page: ${page}`);
  }
 
  const searchParams = { query: 'JavaScript', page: 1 };
  filterSearch(searchParams);
  
  //6
  function logTaskDetails(task) {
    const { id, completed } = task;
    console.log(`Task ID: ${id}, Completed: ${completed}`);
  }
  
  const task = { id: 1, title: 'Do homework', completed: false };
  logTaskDetails(task);
  
  //7
  function showProfile(profile) {
    const { name, location: { city } } = profile;
    console.log(`${name} lives in ${city}`);
  }
 
  const profile = { name: 'sri', location: { city: 'hyderabad', country: 'India' } };
  showProfile(profile);
  
  //8
  function logUsers(users) {
    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  }
  
  const users = [
    { name: 'sri', email: 'sri@gmail.com' },
    { name: 'vani', email: 'vani@gmail.com' }
  ];
  logUsers(users);
  
  
  //9
  function extractUserDetails(user) {
    const { name, ...details } = user;
    console.log(`Name: ${name}, Details:`, details);
  }
  
  const user1= { name: 'sri', age: 21, country: 'India' };
  extractUserDetails(user);

  //10
  function getDynamicValue(obj, key) {
    return obj[key];
  }
 
  const user2 = { name: 'Dave', age: 35, email: 'dave@example.com' };
  console.log(getDynamicValue(user2, 'email')); 
  
  //11
  function displayConfig(config) {
    const { database: { host, port }, user = 'admin' } = config;
    console.log(`Host: ${host}, Port: ${port}, User: ${user}`);
  }
  
  const config = { database: { host: 'localhost', port: 5432 } };
  displayConfig(config);

  //12
  let a = 1, b = 2;
[a, b] = [b, a];

console.log(`a: ${a}, b: ${b}`);

//13
function processData(data) {
  const { id, name = 'Unknown' } = data;
  console.log(`ID: ${id}, Name: ${name}`);
}

const data = { id: 42 };
processData(data);

//14
function mergeUsers(user3, user4) {
  const merged = { ...user3, ...user4 };
  console.log(merged);
}


const user3 = { name: 'Eve', age: 28 };
const user4 = { country: 'France' };
mergeUsers(user3, user4);

//15
function extractCoordinates(point) {
  const { x, y } = point;
  console.log(`X: ${x}, Y: ${y}`);
}


const point = { x: 10, y: 20, z: 30 };
extractCoordinates(point);


//16
function logFirstTwo(numbers) {
  const [first, second] = numbers;
  console.log(`First: ${first}, Second: ${second}`);
}


const numbers = [100, 200, 300];
logFirstTwo(numbers);

//17
function logUser({ userId: id, userName: name }) {
  console.log(`ID: ${id}, Name: ${name}`);
}


const user5 = { userId: 7, userName: 'John' };
logUser(user5);

//18
function flattenObject(data) {
  const { user: { id, profile: { name, age } } } = data;
  console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
}


const data1 = { user: { id: 1, profile: { name: 'Anna', age: 25 } } };
flattenObject(data);

//19
function logRole({ name, role = 'user' }) {
  console.log(`Name: ${name}, Role: ${role}`);
}

logRole({ name: 'Ella' });

//20
function extractRest([first, ...rest]) {
  console.log(`First: ${first}, Rest: ${JSON.stringify(rest)}`);
}

const items = [1, 2, 3, 4];
extractRest(items);

//21
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

// Test case
const obj = { details: { address: { city: 'Paris' } } };
console.log(getNestedValue(obj, 'address.city'));


//22
function validateAndLog(settings) {
  if (!settings.notifications) {
    console.error('Error: Missing required property "notifications"');
    return;
  }
  const { theme, notifications } = settings;
  console.log(`Theme: ${theme}, Notifications: ${notifications}`);
}

const setting = { theme: 'light' };
validateAndLog(settings);





  
  

  

  
 
  

  
  
  