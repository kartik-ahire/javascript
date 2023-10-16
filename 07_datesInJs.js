// Creating a date object
// ---------------------------------------------------
let myDate = new Date();
// console.log(myDate);
// console.table([typeof(myDate)]); // object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());

// console.log(typeof(myDate.toJSON()));

// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toDateString());


// Creating a custom date object
// ---------------------------------------------------
// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,3,1); // Month starts from 0 in JS.
let myCreatedDate = new Date("2023-01-14"); // Month starts from 1 in JS string.
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());      
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());

// Creating a timestamp
// ---------------------------------------------------
let myTimeStamp = Date.now();
// console.log(myTimeStamp);               // returns time in milliseconds
// console.log(myCreatedDate.getTime());   // returns time in milliseconds till now from 1st Jan,1970

// Converting current time into seconds
// ---------------------------------------------------
console.log(Math.floor(Date.now()/1000));

// Getting current day/month/year
// ---------------------------------------------------
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); // as month start from 0 indexing
console.log(newDate.getFullYear());

// Use String interpolation to use date `${}`

// Defining custom locale string
newDate.toLocaleString('default',{
    weekday: "long"
})
