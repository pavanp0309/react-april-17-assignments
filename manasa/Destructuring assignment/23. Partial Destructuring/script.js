function extractImportant(bo){
const {id,name}=bo;
console.log("ID: ",id,"," ,"Name: ",name);
}
const bigObject={id: 1, name: 'Test', extra: 'Ignore me'};
extractImportant(bigObject);