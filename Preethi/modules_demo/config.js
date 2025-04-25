// 7.Exporting Objects:
// Create a file config.js that exports an object containing application settings
//  like appName, version, and author. Import this object in app.js and log the application details.

export const logInDetails={
    appname:"Instagram",
    version:1.8,
    author:"Kevin Systrom"
}
export function display(){
    console.log("Appname:"+logInDetails.appname+"\n"+"version: "+logInDetails.version+"\n"+"Author: "+logInDetails.author)
}