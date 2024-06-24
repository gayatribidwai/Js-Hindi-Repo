//Conversion of each datatype values into Number and oberving output.

let score="33abc"
let sc=null //typeof - object
let sco=undefined
let scor=true
let ss="Gayatri"

console.log(typeof score); //o/p - string
console.log(typeof(score)); //() - as a method o/p - string

let valueInNumber = Number(score)
let valuesc = Number(sc)
let valuesco = Number(sco)
let valuescor = Number(scor)
let valuess = Number(ss)

/*
console.log(typeof valueInNumber); //o/p - number
console.log(valueInNumber); //o/p - NaN
console.log(valuesc); //o/p - 0
console.log(valuesco); //o/p - NaN
console.log(valuescor); //o/p - 1
console.log(valuess); //o/p - NaN
*/

// "33" => 33
// "33abc" => NaN
// true -> 1, false => 0

let isLoggedIn="Gayu"
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // o/p=> true
// 1 => true; 0 => false
// "" => false
// "Gayu" => true

let somenumber =33
let stringNumber=String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)