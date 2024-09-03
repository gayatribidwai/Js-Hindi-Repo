// const coding = ["ruby", "js", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item; // output - undefined.
// })
// // forEach loop doesn't return anything 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1st way
const newNums =myNums.filter ( (num) => num > 4)
console.log(newNums);

// 2nd way
const newNums1 =myNums.filter ( (num) => {
    return num > 4; // return is copulsory.
})
console.log(newNums1);





