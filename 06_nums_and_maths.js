const score = 100.89;
// console.log(score);
// console.log(typeof(score));

// Declaring a variable strictly as a number
const balance = new Number(100);
// console.log(balance);
// console.log(typeof(balance));

// Converting number to string
const newBalance = balance.toString() // OR console.log(balance.toString().length());
// console.log(newBalance);
// console.log(typeof(newBalance));
// console.log(score.toFixed(2)); // Number of digits after decimal point [E-commerce]
// console.log(score.toPrecision(2));

// Number to LocaleString
const cost = 1000000;
// console.log(cost.toLocaleString()); //default - [en-US]
// console.log(cost.toLocaleString('en-IN'));

// Number MAX/MIN values and other values
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.EPSILON);

// ==================================== MATHS =================================

// console.log(Math);
// console.log(Math.abs(-4));      // returns positive values
// console.log(Math.round(4.5));   // return rounded integer value
// console.log(Math.ceil(4.5));    // returns top value
// console.log(Math.floor(4.5));   // returns bottom value
// console.log(Math.min(1,2,3,4));
// console.log(Math.max(1,2,3,4));
// console.log(Math.random());                      // Generates random value 0-1
// console.log((Math.floor(Math.random()*10)) + 1); // Generates random value 1-10 

// ------ Generating random value from MIN to MAX value -----------
const min = 10;
const max = 100;
console.log(Math.floor((Math.random() * (max-min+1) + min)));
