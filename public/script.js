console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
    window.location.assign(url);
}

window.onload = function(event){
    console.log("Page has loaded");
}

let myobj = {
    "name": "Bob",
    "balance": 10
}

console.log(myobj.name);

let obj2 = myobj;
obj2.name = "Shelly";

console.log(myobj.name);
let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);

