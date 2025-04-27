// function displayUsername(data,keypath){
// const keys= keypath.split(".");
// let current = data;

// for (let key of keys){
//     if(current[key] === undefined){
//         return undefined;
//     }
//     current = current[key];
// }
// return current;
// }
// const data={ user: { profile: {username: "Manasa"}}};
// console.log(displayUsername(data,'user.profile.username'));


function displayUsername({user: {profile:{username}}}){
    console.log(`Username: ${username}`) 
}
const data={user: { profile: { username: 'Manasa' } } }
displayUsername(data)