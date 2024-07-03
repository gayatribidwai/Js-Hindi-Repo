//primitive - call by value - copied reference is used and changes made on copy not actual data.
// 7 types -> String, Number, Boolean, null, undefined, Symbol(to make any value unique), Bigint
// 

const score = 100
const isLoggedin = false
const outsideTemp = null
let userEmail; // default value undefined.

const id = Symbol('123')
const anotheId = Symbol('123')

console.log(id === anotheId); //symbol always give unique values in case of same data also.

const bigNumber = 56835264940372648n // automatically become bigint (n at the end)


//reference type (nonprimitive)
// Array, Objects, Functions.


const heros = ["Shaktiman", "nagraj", "doga"];

//Object
let myObj = {
    name: "Gayatri",
    age: 22
}

// Function as a variable

const myFunction = function()
{
    console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof myFunction); // function - some documentation (function object)
console.log(typeof heros); //Object




// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) Heap(nonprimitivez)

let myName = "Gayatri"
let newName = myName
newName = "Shivani"

console.log(myName);
console.log(newName);

let userOne = {
    email: "user@gmail.com",
    upiId: "user@ybl"
}

let userTwo = userOne
userOne.email = "gayatri@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);