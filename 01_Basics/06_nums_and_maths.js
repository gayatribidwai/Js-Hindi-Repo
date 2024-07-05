const score = 300
const balance = new Number(100.)

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 34.3924
// console.log(otherNumber.toPrecision(2));
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math.abs(-3));
console.log(Math.round(2.3));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.9));
console.log(Math.min(3,4,7,8));
console.log(Math.max(3,4,7,8));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) + min));