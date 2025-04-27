function logUsers(users){
    users.forEach(user=>{
        console.log(`Name:${user.name}, Email:${user.email}`)
})
        
    }


const users= [  { name: 'Manasa', email: 'manasa@gmail.com' },
                { name: 'Alekya', email: 'alekya@gmail.com' },
                { name: 'Sushma', email: 'sushma@gmail.com' },
                { name: 'Madhu', email: 'madhu@gmail.com' }]
logUsers(users)