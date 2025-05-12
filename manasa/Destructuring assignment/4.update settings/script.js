function updateSettigs(settings){
const {theme, notifications="true"}= settings;
console.log("Theme:",theme)
console.log("Notifications:", notifications)
}
const settings = {theme: 'dark'};
updateSettigs(settings)