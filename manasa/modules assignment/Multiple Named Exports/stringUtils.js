export  function toUpperCase(Str){
    return `Upper case string is: ${Str.toUpperCase()}`;
}

export function toLowerCase(Str){
    return `Lower case string is: ${Str.toLowerCase()}`;
}

export function capitalize(Str){
    return `Capitalized string is: ${Str.charAt(0).toUpperCase()+Str.slice(1)}`;
}