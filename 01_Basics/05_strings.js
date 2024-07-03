const name = "Gayatri"
const repoCount = 15

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} repo count is ${repoCount}`); // string interpulation

const gameName = new String('Gayatri-shivani-bidwai')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__); //Object
// console.log(gameName.length); //7 
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('t'));
// console.log(name);

const newString = gameName.substring(0,4); // negative values will be ignored.
console.log(newString); // Observ -index 4 not included
console.log("Hey")
const anotherString = gameName.slice(-9,4); // negative values starts from reverse
console.log(anotherString);

const newStringone = "    Gayatri   "
console.log(newStringone);
console.log(newStringone.trim()); // trim removes starting and ending spaces.
// refer more on 'trim javascript mdn' on web


const url = "https//gayatri.com/shivani%20bidwai/"
console.log(url.replace('%20', '-'));
console.log(url.includes("gaya"));
console.log(gameName);
console.log(gameName.split('-'));

// refer more on '{any string method} javascript mdn' on web