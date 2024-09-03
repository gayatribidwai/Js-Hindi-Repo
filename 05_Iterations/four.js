const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     // console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["rb", "js", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // prints the array index key- value
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
} // can not execute because it is not iterable, so not possible to write this in loop.