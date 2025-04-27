function getNestedValue(ob,keyPath){
    
    const keys= keyPath.split(".");
    let current= ob.details;

    for(let key of keys){
        if(current[key]=== undefined){
            return undefined;
        }
        current = current[key];
    }
    return current
}
const ob={ details: { address: { city: 'Paris' } } };
console.log(getNestedValue(ob,'address.city'));
