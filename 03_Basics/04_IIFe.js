
// check out : https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// Immediately Invoked Function Expressions (IIFE)
// IIFE : is a JavaScript function that runs as soon as it is defined.
// Self-Executing Anonymous Function

(function () {
    console.log("DB Connected");
})();

( (arg)=>
{
    console.log(`DB Connected ${arg} Successfully!`);
})("connection");

//add 2 + 3
(function add(a,b){
    console.log(a+b)
})(2,3);

// using modern javascript - es6
(() => console.log("I am es6"))();

// you can return value from a IIFE function
const value = (() => 100)();
console.log(value)


// 
let data1;
async function getData() {
    data = await fetch()
}
getData();

// instead of this try this

const data2 = (async() => fetch())


// IIFE can also be used to create private and public variables
console.log("ATM ")
const atm = function (initialBalance)
{
    let balance = initialBalance // this is now private, as i guess because we are returning function directly - maybe 
    function withdraw(amt)
    {
        if(amt > balance)
        {
            console.log("Amount should be less than current balance.")
        }
        else{
            balance-=amt;
            return balance;
        }
    }
    return {withdraw};
};

const piyush = atm(1000)
console.log(piyush.withdraw(100))
console.log(piyush.withdraw(100))
console.log(piyush.withdraw(1000))