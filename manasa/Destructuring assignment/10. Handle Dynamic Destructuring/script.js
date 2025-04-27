function getDynamicValue(obj,key){
 return obj[key]
}
const user = { name: "Mansa", age:20, email:"manasa@gmail.com" }
console.log(getDynamicValue(user,'name'))