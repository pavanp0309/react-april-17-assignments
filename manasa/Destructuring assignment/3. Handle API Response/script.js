function handleResponse(obj){
const {status: a,data} = obj;
console.log("Status:",a);
console.log("Data:",data);
}
const  apiResponse= { status: 200, data: { id: 101, title: 'Learn JavaScript' } };
handleResponse(apiResponse)