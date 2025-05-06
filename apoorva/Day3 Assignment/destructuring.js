//Q1 Extract User Details : Write a function that extracts `name` and `email` from a user object and logs them

function extractUserDetails(user) {
    const { name, email } = user;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  }
  
  // Example usage:
  const user = {
    name: "Alice",
    email: "alice@example.com",
    
  };
  
  extractUserDetails(user);

  //Q2  Process Product Data: Write a function that extracts `name` and `price` from a product object and logs them, with a default value for `price`.

  function extractProductDetails(product) {
    const { name, price = 0.0 } = product;
    console.log(`Product Name: ${name}`);
    console.log(`Price: $${price}`);
  }
  
// Example usage:
  const product = {
    name: "Laptop",
    price: $500
  };
  
 extractProductDetails(product);
  // Output:
  // Product Name: Laptop
  // Price: $500

  //Q3 Handle API Response: Write a function that extracts `status` and `data` from an API response and logs them.
  
  function handleApiResponse(response) {
    const { status, data } = response;
    console.log(`Status: ${status}`);
    console.log('Data:', data);
  }
  
  // Example usage: 
  const apiResponse = {
    status: 200,
    data: {
      id: 101,
      title: "Learn JavaScript"
    },
    headers: {
      contentType: "application/json"
    }
  };
  
  handleApiResponse(apiResponse);
  // Output:
  // Status: 200
  // Data: { id: 101, title: 'Learn JavaScript' }

  //Q4  Update Settings: Write a function that extracts `theme` and `notifications` from a settings object and logs them, with a default value for `notifications`.
  
  function updateSettings(settings, newValues) {
    Object.assign(settings, newValues);
  }
  
  // Example usage:
  const settings = {
    theme: "dark",
    notifications: true
  };
  
  updateSettings(settings, {
    theme: "dark"
  });
  
  console.log(settings);
  // Output:
  // { theme: 'dark', notifications: true }
  
  //Q5 Filter Search Parameters: Write a function that extracts `query` and `page` from a search parameter object and logs them.

  function filterSearchParams(params) {
    const { query, page } = params;
    console.log(`Search Query: ${query}`);
    console.log(`Page Number: ${page}`);
  }
  
  // Example usage:
  const searchParams = {
    query: "JavaScript",
    page: 1,
    
  };
  
  filterSearchParams(searchParams);
  // Output:
  // Search Query: JavaScript
  // Page Number: 1

  //Q6  Log Task Details: Write a function that extracts `id` and `completed` from a task object and logs them.
  
  function logTaskDetails(task) {
    const { id, completed } = task;
    console.log(`Task ID: ${id}`);
    console.log(`Completed: ${completed}`);
  }
  
  // Example usage:
  const task = {
    id: 1,
    title: "Do homework",
    completed: false
  };
  
  logTaskDetails(task);
  // Output:
  // Task ID: 1
  // Completed: false
  
  //Q7 Extract Nested Profile Information: Write a function that extracts `name` and `city` from a nested profile object and logs them.
  
  function extractProfileInfo(profile) {
    const { name, address: { city } = {} } = profile;
    console.log(`Name: ${name}`);
    console.log(`City: ${city}`);
  }
  
  // Example usage:
  const profile = {
    name: "Bob",
    address: {
      city: "Berlin",
      country: "Germany"
    }
  };
  showProfile(profile);

  extractProfileInfo(profile);
  // Output:
  // Bob lives in Berlin

  //Q8  Map Over Users:  Write a function that logs the `name` and `email` of each user in an array of user objects.
  
  function logUserDetails(users) {
    users.forEach(({ name, email }) => {
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
    });
  }
  
  // Example usage:
  const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },

  ];
  logUsers(users);
  
  logUserDetails(users);
  // Output:
  // Name: Alice
  // Email: alice@example.com
  // Name: Bob
  // Email: bob@example.com

//Q9  Combine Properties Using Rest: Write a function that extracts `name` and combines the remaining properties of a user object into a seperate objects.

function extractNameAndRest(user) {
    const { name, ...rest } = user;
    console.log(`Name: ${name}`);
    console.log('Other Properties:', rest);
  }
  
  // Example usage:
  const user = {
    name: "Charlie",
    age: 30,
    city: "USA"
  };
  extractUserDetails(user);

  extractNameAndRest(user);
  // Output:
  // Name: Charlie
  // Other Properties: {name:Charlie, age: 30, city: 'USA' }
  
  //Q10  Handle Dynamic Destructuring: Write a function that dynamically extracts a value from an object using a provided key

  function extractValue(obj, key) {
    const value = obj[key];
    console.log(`${key}: ${value}`);
  }
  
  // Example usage:
  const user = {
    name: "Dave",
    age: 35,
    email: "dave@example.com"
  };
  
  console.log(getDynamicValue(user, 'email'));
  
  extractValue(user, "email");
  // Output:
  // email: dave@example.com
  
  //Q11 Extract Nested Properties with Default Values: Write a function that extracts `host`, `port`, and a default `user` from a nested configuration objects.

  function extractConfig(config) {
    const {
      server: {
        host = 'localhost',
        port = 5432
      } = {},
      user = 'admin'
    } = config || {};
    displayConfig(config);

    return { host, port, user };

    //Q12  Swap Variables Using Destructuring: Write a destructuring statement to swap the values of two variables.

    let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

  }

  //Q13  Handle Missing Keys Gracefully: Write a function that extracts `id` and `name` from an object, providing a default value for `name`
  
  function extractUserInfo(obj) {
    const {
      id = 42
      name = 'Unknown'
    } = obj || {};
  
    return { id, name };
  }
  console.log(extractUserInfo({ id: 42, name: 'Unknown' })); 
// { id: 42, name: 'Unknown' }

//Q14 Merge Objects with Rest and Destructuring: Write a function that combines two objects using destructuring and rest syntax.

const user1 = { name: 'Eve', age: 28 };
const user2 = { country: 'France'};
mergeUsers({ ...user1, ...user2 });
console.log(mergeObjects(user1, user2));
// Output: { name: 'Eve', age: 28,  country:'France' }

//Q15 Destructure Array Elements: Write a function that extracts the first two elements from an array and logs them.

function logFirstTwoElements(arr) {
  const [first, second] = arr;
  console.log('First:', first);
  console.log('Second:', second);
}
 
logFirstTwoElements([100,200,300]);
// Output:
// First: 100
// Second: 200

//Q17 Extract Values with Aliases: Write a function that destructures `id` and `name` from an object and logs them with aliases

function logUserInfo(user) {
  const { id: userId, name: userName } = user || {};

  console.log('User ID:', userId);
  console.log('User Name:', userName);
}
logUserInfo({ id: 7, name: 'John' });
// Output:
// User ID: 7
// User Name: John

//Q18  Flatten Nested Objects:  Write a function that extracts values from a deeply nested object and logs them in a flattened manner

function logFlattenedUserData(data) {
  const {
    user: {
      id,
      profile: {
        name,
        age,
      }
    }
  } = data || {};

  console.log('ID:', id);
  console.log('Name:', name);
  console.log('Age:', age);
}
const nestedData = {
  user: {
    id: 1,
    profile: {
      name: 'Anna',
      age: 25 

      }
    }
  }
  flattenObject(data);


logFlattenedUserData(nestedData);
// Output:
// ID: 1
// Name: Anna
// Age: 25

//Q19 Destructure Function Parameters with Defaults: Write a function that extracts `name` and `role` with a default value from its parameters.

function greetUser({ name, role = 'User' } = {}) {
  console.log(`Hello, ${name}! Your role is: ${role}`);
}
logRole({ name: 'Ella' });
greetUser({ name: 'Ella', role: 'user' });
// Output:
// name: 'Ella' 
// Role: Admin

//Q20 Destructure Arrays with Rest: Write a function that extracts the first element of an array and logs the rest as a separate array.

function logFirstAndRest(arr) {
  const [first, ...rest] = arr;
  console.log('First:', first);
  console.log('Rest:', rest);
}
extractRest(items);
logFirstAndRest([1, 2, 3, 4]);
// Output:
// First: 1
// Rest: [2, 3, 4]

//Q21 Dynamic Nested Destructuring: Write a function that extracts a nested property dynamically using a key.

function getNestedValue(obj, path) {
  return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}
const data = {
  details: {
    address: {
      city: 'Paris',
      }
    }
  }

  console.log(getNestedValue(obj, 'address.city'));
const value1 = getNestedValue(data, ['details', 'address', 'city']);   // 'Paris'

console.log(value1);

//Q22 Validate and Destructure: Write a function that validates the presence of specific properties before destructuring an object.

function validateAndDestructure(obj) {
  if (!obj || !obj.theme ) {
    throw new Error('Missing required properties: notifications');
  }

  const { theme } = obj;
  console.log('Theme');

}
try {
  validateAndDestructure({theme:'light' });
  // Output:
  // theme:light

  validateAndDestructure({ theme: 'light' });
  // Error: Missing required properties: notifications
} catch (error) {
  console.error(error.message);

  //Q23 Partial Destructuring: Write a function that extracts only specific keys from a larger object and ignores the rest.

  function extractKeys(obj, keys) {
    const result = {};
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }
  
  // Example usage:
  const bigObject = {
    id: 1,
    name: 'Test'
    extra:'Ignore me'
  
  };
  extractImportant(bigObject);
  const extracted = extractKeys(bigObject, ['id', 'name']);
  console.log(extracted); // { id: 1, name: 'Test' }

  //Q24 . Multi-Level Destructuring in Function Arguments: Write a function that extracts values from multiple levels of nesting within the function arguments.
  
  function displayUserInfo({
    Profile:{
    username,
    }
  }) {
    console.log(`username: ${name}`);

  }
  
  // Example usage:
  const user = {
    profile: {
    username: 'Max',
  
      }
    }
  };
  
  displayUserInfo(user);

  //*End    of    the    Assignment*
  
