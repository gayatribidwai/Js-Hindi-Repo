// *******************************************************************************************
/*
 Remove the Comments and execute the Block.
 Video Link 1 : https://youtu.be/njs0Den1b5Y?si=lKCLF3GZxkEDZ7w5
 Video Link 2 : https://youtu.be/kl7ActKCQIU?si=ye58TiwMFvisSf-z
 JavaScript Visualizer : https://www.jsv9000.app/
 Paste your code here and Visualize Output
*/

// *******************************************************************************************
// #1

// let arr = [1,2,3,4,5]
// arr.unshift(6) // to inseart 6 at first of array.
// arr.unshift(7)
// arr.shift() // to remove first element from array.
// arr.push(11) // to inseart 11 at end of array.
// console.log(arr);

// *******************************************************************************************
// #2

// variable = 10;
// (()=> {
//     foo = 100;
//     console.log(variable);
//     var foo = 100;
//     variable = 20;
//     console.log(variable);
// })(); //iife

// console.log(foo);
// console.log(variable);
// var variable = 30;

// *******************************************************************************************
// #3

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

/*
var is function-scoped, so the value of i is shared across all iterations of the loop.
By the time the setTimeout callback executes (after the loop has completed), i will have incremented to 10 for all setTimeout calls.
Output: The console will log 10 ten times.

let is block-scoped, so a new i is created for each iteration.
Each setTimeout callback captures the current value of i at that iteration.
Output: The console will log numbers 0 to 9.

*/

// *******************************************************************************************
// #4

// console.log("Value of Age is ", age);
// var age = 20;
// console.log("Value of Age is ", age);

/*
Hoisting : Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
Hoisting works in case of let and const variable also.
A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value.

A variable declared with let , const , or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.

Global Excution Context: The global execution context is the top-level context in a JavaScript program. It represents the global scope, encompassing the entire program and all its components. 
This context sets the stage for the entire code execution process and plays a pivotal role in managing global variables and functions.

First, Memory Phase will be created then, all the variables will be listed with their default values
then while executing the code line by line the value will be assigned to the variables.
*/

// *******************************************************************************************
// #5

// myFun();

// var myFun = function () {
//   console.log("First");
// };

// myFun();

// function myFun() {
//   console.log("Second");
// }

// myFun();

/*
Need to know : How Execution Context Works.
Execution context in JavaScript is the environment in which JavaScript code is executed. 
It contains information about the current scope, variables, and functions. Each time a function is called, a new execution context is created.

*/

// *******************************************************************************************
// #6


