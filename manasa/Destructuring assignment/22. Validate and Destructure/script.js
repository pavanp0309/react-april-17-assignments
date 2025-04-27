function validateAndLog(obj){
const requiredprops = ["theme", 'notifications'];

for (let prop of requiredprops){
    if(!(prop in obj)){
        console.error(`Error: Missing required property ${prop}`)
    }
}

const {theme,notifications}=obj
console.log(`Theme: ${theme} Notifications: ${notifications}`);

}
const settings= { theme: "Light" , /*notifications:"enable"*/};
validateAndLog(settings)