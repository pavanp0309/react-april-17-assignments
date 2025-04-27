function UserDetails(user){
  const {name, email} = user;
  console.log("Name : ",name);
  console.log("Email : ",email)
}

const user = { name: "manasa", email:"manasa123@gmail.com" }
UserDetails(user)