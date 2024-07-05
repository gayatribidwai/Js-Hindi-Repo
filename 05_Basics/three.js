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