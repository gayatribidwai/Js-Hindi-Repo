//Conversion of each datatype values into Number and oberving output.

let score="33abc"
let sc=null //typeof - object
let sco=undefined
let scor=true
let ss="Gayatri"

// console.log(typeof score); //o/p - string
// console.log(typeof(score)); //() - as a method o/p - string

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
//console.log(booleanIsLoggedIn) // o/p=> true

// 1 => true; 0 => false
// "" => false
// "Gayu" => true

let somenumber =33
let stringNumber=String(somenumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// **************************************** Operations **********************************

 let value =3
 let negValue=-value
//  console.log(negValue);
//  console.log(2*2);// 4
//  console.log(2**3);// 2 to the power 3 = 8

let str1="Hello"
let str2=" Gayatri"
let str3=str1+str2
//console.log(str3);

// console.log("1"+2); // 12
// console.log(1+"2"); // 12
// console.log("1"+"2"); // 12
// console.log("1"+2+2); // 122
// console.log(1+2+"2"); // 32
//Output Produces according to Ecma Script Guidelines. //research topic for creating browser engine and all.😶

//console.log( (3+4) * 5 % 3); // Review your code.

// console.log(+true); //o/p => 1
// //console.log(true+); //o/p => Error
//console.log(+""); //o/p => 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter =100
++gameCounter
console.log(gameCounter); //learn prefix, postfix 

// Learn anything on Ecma something.😅 