
// console.log("Kartik " + "Ahire");

/*
// -------------------------------------
// Outdated syntax
// -------------------------------------
const num = 10; 
const fname = "Lionel"
console.log(fname + " Messi " + num);
*/

// -------------------------------------
// Modern Syntax
// -------------------------------------
// String interpolation : `...  ${var} ....`
// It is useful as you can apply functions like to uppercase etc.
const num = 10; 
const fname = "Lionel"
// console.log(`${fname} Messi ${num}`);

// -------------------------------------
// Declaring strings
// -------------------------------------
const gameName1 = 'Call of Duty';
const gameName2 = "Pubg";
const gameName3 = new String('Forza horizon 5'); // using object and assigning value "Forza" in it's constructor

// console.log(gameName3[0]);
// console.log(gameName3.__proto__); // syntax to access prototype methods (optional)

// console.log(gameName3.toLowerCase);
// console.log(gameName3.toLowerCase());
// console.log(gameName3.toUpperCase());
// console.log(gameName3.charAt(1));
// console.log(gameName3.indexOf('o'));

// const gameName3Substring = gameName3.substring(0,5); // don't obey reverse/negative values
// console.log(gameName3Substring);
// const gameName3Slice = gameName3.slice(0,5); // Obeys reverse/negative values
// console.log(gameName3Slice);
// const gameName3SliceRev = gameName3.slice(-15,-10);
// console.log(gameName3SliceRev);


// ----------------------------------------------
// Removes spaces/new line only
// ----------------------------------------------
const gameName4 = "  GTA   ";
// console.log(gameName4);
const gameName4Trim = gameName4.trim();
// console.log(gameName4Trim);

// ----------------------------------------------
// Replace symbols
// ----------------------------------------------
const url = "https://kartik%20%ahire.com";
// const urlReplace = url.replace('%20','-');
// console.log(urlReplace);
console.log(url.replace('%20','-'));
console.log(url.includes('ahire'));
console.log(url.split('%'));    // splits the string
// ----------------------------------------------
// 
// ----------------------------------------------
