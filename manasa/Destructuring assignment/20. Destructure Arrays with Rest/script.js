function extractRest(items){
const [f, ...r]=items;
console.log("First:",f);
console.log("Rest:",r);
}
const items= [1,2,3,4,5];
extractRest(items);