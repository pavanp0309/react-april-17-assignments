function processData(d){
const {id, name="Manasa"}=d;
console.log("ID: ",id);
console.log("Name: ",name)
}
const data= {id: 42};
processData(data)