export function touppercase(str){
    return str.toUpperCase()
}

export function tolowercase(str){
    return str.toLowerCase()
}

export function captlize(str){
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  
}
