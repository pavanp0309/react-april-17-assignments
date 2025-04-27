function logUser(user){
const {id:i, name:n}=user;
console.log("ID: ",i);
console.log("Name: ",n);
}
const user = { id:42, name:"Manasa sai",age:20}
logUser(user)