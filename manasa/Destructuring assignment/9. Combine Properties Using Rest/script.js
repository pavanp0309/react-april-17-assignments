function extractUserDetails(user){
const {name,...details}= user;
console.log(name);
console.log(details)
}
const user={name: 'Manasa', age: 20, country: 'India' }
extractUserDetails(user)