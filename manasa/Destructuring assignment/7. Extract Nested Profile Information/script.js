function showProfile(profile){
    const {name,location}=profile;
    console.log(name, " is living in ", location.city);
}
const profile={name:"Manasa",location:{ city:"hyd", state:"Telangana"}}
showProfile(profile)