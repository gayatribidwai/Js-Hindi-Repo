//typescript never allows to compare two different datatypes.

// console.log("2" > 1); // true
// console.log("02" > 1); // true

// Equality check == and comparisons > < >= <= work differently.
// Comparison convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true


// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

//strict check ===

// console.log("2" == 2); // true
// console.log("2" === 2); // false