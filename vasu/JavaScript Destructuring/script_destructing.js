const user={
    name:"vasu",
    email:"vasu@gmail"
}

const {name:n,email:e}=user
console.log(n)
console.log(e)


const prod ={
    name:"laptop"
}
const {name:n1,price=500}=prod
console.log(price)

const api={
    status:200,
    data:{
        id:1,
        title:"react"
    }
}

const {status:s,data:d}=api
console.log(s,d)

const settings={
    theme:"dark"
}
const{theme,notification=true}=settings
console.log("theame:"+theme,"notification:"+notification)


const sp={
    querry:"javascript",pages:1
}
const{querry,pages}=sp
console.log("query:"+querry,"page:"+pages)

const task={
    id:1,
    title:"do hw"
    ,completed:false
}
const{id,title,completed}=task

console.log("Task id:"+id,"completed:"+completed)

const profile={
    name2:"vasu",
    location:{
        city:"hyd",
        country:"india"
    }
}
const{name2,location:{city,country}}=profile
console.log(name2+"livesin"+country)

const users = [
    { name4: "vasu", email1: 'alice@example.com' },
    { name5: "dev", email2: 'bob@example.com' }
  ];

const[{name4,email1},{name5,email2}]=users

console.log(name4,email1)
console.log(name5,email2)

const user1={
    name6:"vasu",age:22,country:"ind"
}

const{name6,...r}=user1
const op={name6,r}
console.log("name:",name6,"DEtails",r)

const config ={
    database:{host:"localhost",port:5463}
}
const {database:{host,port}}=config

console.log("host",host,"port",port)

let a=1,b=2;
[a,b]=[b,a]

console.log(a,b)


const data1 = { id1: 42 };

const { id1, names = "Unknown" } = data1;

console.log(id1,names);

const us1={na:"eva",age1:41}
const us2={contry1:"belgium"}

const{...u}=us1
const{...c}=us2

const merg=({...us1,...us2})

console.log(merg)

const point={
    x:10,y:20,z:30
}
const{x,y,z}=point

console.log("x:",x,"y:",y)

const num=[10,20,30]

const[f,s3,t]=num

console.log("first:",f,"second:",s3)

const uid={
    userid:411,username:'vasu'
}

const{userid:ids,username:nam}=uid

console.log(id,nam)


const datas={
    us:{
        idp:1,
        iprofile:{
            iname:"vasu",iage:45
        }
    }
}

const{us:{idp,iprofile:{iname,iage}}}=datas

console.log(idp,iname,iage)


const role={
    rname:"vasu"
}

const{rname,rolee="user"}=role

console.log(rname,rolee)

const items=[1,2,3,4]

const[ai,...ti]=items

console.log("first",ai,ti)


const obj={dt:{add:{cy:"hyd"}}}

const{dt:{add:{cy}}}=obj

console.log(cy)


const st={
    the:"dark"
}
const {the,notifications}=st

if(notifications==""||notifications==undefined){
    console.log("error:notification is not given")
}
else{
    console.log(the,notifications)
}

const st1={
    the1:"dark",
    notifications1:"sucess"
}
const {the1,notifications1}=st1

if(notifications1==""||notifications1==undefined){
    console.log("error:notification is not given")
}
else{
    console.log(the1,notifications1)
}


const bigobj={
    oid:1,oname:"vasu",otest:"ignore"
}

const{oid,oname}=bigobj

console.log(oid,oname)

const data4 = { user4: { profile4: { username4: 'Max' } } };
const{user4:{profile4:{username4}}}=data4

console.log(username4)