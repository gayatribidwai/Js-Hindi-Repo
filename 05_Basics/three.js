const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const great of greetings) {
    console.log(`Each char is ${great}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India") // Duplicate not repeted

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
};

// for (const [key, Value] of myObject) {
//     console.log(key, ':-', value);
// } // (not working) not the correct way

