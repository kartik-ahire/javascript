// Basic comparisons : > < != == <= >=

// JS converts string into a number
// console.log("2" > 1);
// console.log("2" < 1);

// !!! Avoid Below comparisons

// Equality operators(==) && 
// Comparator operators act differently (< > <= >=). This converts null to a number
console.log(null > 0);   // converts null to number
console.log(null >= 0);  // converts null to number
console.log(null == 0);  // converts null to NaN

console.log(undefined > 0);   // give false 
console.log(undefined >= 0);  // give false  
console.log(undefined == 0);  // give false 

// Strict Check
// ==   - compares values only
// ===  - compares values & data type

console.log("2" == 2);  // return true
console.log("2" === 2); // return false

