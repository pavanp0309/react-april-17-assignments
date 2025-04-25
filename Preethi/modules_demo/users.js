//3.Named Exports:
// Create a file user.js that exports two named functions, getUser(name) and setUser(name). 
// Import these functions in app.js and use them to set and get a user's name.

const getUser=(name) => "hii "+name;
const setUser=(name) => "hloo r u  "+name;

export {getUser,setUser}