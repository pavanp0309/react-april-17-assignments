function displayConfig(config){
    const {database:{host,port},user="admin"}= config;
    // console.log(database.host);
    // console.log(database.port)
    console.log("Host: ",host)
    console.log("Port: ",port)
    console.log("User: ",user)

}
const config = {database: { host: 'localhost', port: 5432 }}
displayConfig(config)