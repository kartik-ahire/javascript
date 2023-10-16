

const acId = 101
let acEmail = "abc@gmail.com"
var acPass = "1234"
acCity = "Nashik"

// const = can't be changed further
// acId = 102  
acEmail = "kartik@gmail.com"
acPass = "5567"
acCity = "Pune"
let acState;
/* 
Prefer using 'let' over 'var' due to issue of block scope & functional scope. 
If you declare any variable but don't assign any value , it's type will be undefined.
*/
console.log(acId);
console.table([acId,acEmail,acPass,acCity,acState]);
console.log(typeof(acCity));