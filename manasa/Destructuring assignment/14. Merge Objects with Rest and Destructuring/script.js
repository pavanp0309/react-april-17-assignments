function mergeUsers(c){
const {name,city,country} = c
console.log("Name:", name);
console.log("City:",city);
console.log("Country:",country);
}
const user1 = {name:"Manasa", age:20}
const user2 = {city:"Hyd", state:"Telangana", country:"India"}
mergeUsers({...user1,...user2});