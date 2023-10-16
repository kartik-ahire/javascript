// JS is dynamically typed language.

// 2 types of data types
// ---------------------
// 1. Primitive / Non-Reference datatypes
// 2. Non-primitive / Reference datatypes
// They are being categorized on call-by-value & call-by-reference basis

// PRIMITVE : Call by value
// Examples : String, Number, Null, Boolean, Undefined, Symbol[to make any value unique], BigInt
// Number includes integer & float as well

// Symbol : returns unique values
// const id1 = Symbol('123')
// const id2 = Symbol('123')
// console.log(id1 == id2);

// BigInt : write n at end of the number
// const bigNum = 23234234324n;
// console.log(typeof bigNum);

// ----------------------------------------------------
// NON-PRIMITIVE/Reference : Call by Reference 
// Array, Objects, Functions

// Array
const heros = ["Shaktiman","Superman","Heman"];

// Object
let myObj = {
    name : "Kartik",
    age : 21
}

// Function : storing function as a variable
const myFunc = function() {
    console.log("Hello world!");
}


// console.table([heros,typeof(heros)]);
// console.table([myFunc,typeof(myFunc)]);
// console.table([myObj,typeof(myObj)]);


/*
    type of         ||      result
    --------------------------------------
    undefined           undefined 
    null                object
    function            function to be precise (object function)
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY MANAGEMENT IN JAVASCRIPT

// Types of memory : 
// 1. Stack(Primitive data type)    = changes in copy of variable. 
// 2. Heap(Non-primitive data type) = changes in actual variable.

// Example 1 : Stack - changes don't occur in first variable
let name1 = 'Kartik'
// console.log(name1);
let name2 = 'Krishna'
// console.log(name2);
name2 = name1
// console.log(name1);
// console.log(name2);

// Example 2 : Heap - changes occur in first variable also, as both points towards the same address.
let obj1 = {
    name : "Kartik",
    age : 21
}
// console.log(obj1.age);
let obj2 = obj1;
obj2.age = 24;
// console.log(obj2.age);
// console.log(obj1.age);
// console.log(obj2.age);
