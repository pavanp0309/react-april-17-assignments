function flattenObject(data){
const {user:{id,profile: {name,age}}}=data;
console.log("ID:",id);
console.log("Name:",name);
console.log("Age:",age);
}
const data = {user: { id: 1, profile: { name: 'Manasa', age: 20 } }}
flattenObject(data);