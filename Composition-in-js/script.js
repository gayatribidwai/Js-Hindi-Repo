function add(a,b)
{
    return a+b;
}

function square(num)
{
    return num*num;
}

function multiply(a,b)
{
    return a*b;
}

function compose(fn1,fn2)
{
    return function(a,b)
    {
        return fn2(fn1(a,b));
    }
}

const composeFun = compose(add, square)
console.log(composeFun(2,3))

//using arrow function
const compo = (fn1, fn2) => (a,b) => fn2(fn1(a,b));
const task = compo(multiply, square)
console.log(task(2,3))


// console.log(add(2,3))
console.log("gayu")

function multiplyAll(args)
{
    return args[0] * args[1];
}

function compus(...fns)
{
    return function (...args)
    {
        return fns.reduce((a,b) => b(a), args);
    }
}

const again = compus(multiplyAll, square)
console.log(again(2,3)); 

// using Arrow Function
const composeAll = 
    (...fns) =>
    (...args) =>
        fns.reduce((a,b) => b(a), args);

const task1 = composeAll(multiplyAll, square)
console.log(task1(2,3));

const aagain = (...fns) => (...args) => fns.reduce((a,b) => b(a), args);
const task2 = aagain(multiplyAll, square)
console.log(task2(2,3));
