let myDate = new Date()
// console.log(myDate.toString()); // Wed Jul 03 2024 09:14:44 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Jul 03 2024
// console.log(myDate.toISOString()); // 2024-07-03T09:14:44.887Z
// console.log(myDate.toJSON()); // 2024-07-03T09:14:44.887Z
// console.log(myDate.toLocaleDateString()); // 7/3/2024

// console.log(typeof myDate); // Object

let myCreatedDate = new Date(2023, 0, 23) // Month started from 0 in js.
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-01-21")
let myCreatedDate4 = new Date("01-2-2024")
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // in Seconds.

let newDate =new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
 
console.log(`Date is ${newDate} and month is ${newDate.getMonth() + 1}`);

newDate.toLocaleString('default',
    {
        weekday:"long",
    }
)