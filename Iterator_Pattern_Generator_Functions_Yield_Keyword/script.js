// Iterators 

// accessing for loop using build in iterators.
// for(const val of [1, 2, 3, 4, 5])
// {
//     console.log(val);
// }

// 
function makeIterator(start = 0, end = Infinity, step = 1)
{
    let nextStart = start;
    let iterationCount = 0;
    const it = {
        next()
        {
            let result;
            if(iterationCount < end)
            {
                result = { value : nextStart, done : false}
                nextStart = nextStart + 1;
                iterationCount++;
                return result;
            }
            return { value : iterationCount, done : true};
        },
    };
    return it;
}

const myIterator = makeIterator(1, 10, 1);
let result = myIterator.next();

while(!result.done)
{
    console.log(result.value);
    result = myIterator.next();
}

// Generator Function

function* count()
{
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}
const even = count()
for( const v of even)
{
    console.log(v);
}

function* MakeIteratorNew(start, end, step=1)
{
    for(let i=start;i<=end;i+=step)
    {
        yield i;
    }
}
console.log("Hii")
const one = MakeIteratorNew(1, 10, 1);

// for(const val of one)
// {
//     console.log(val);
// }

const btn = document.getElementById("clickMe")
btn.addEventListener("click", () => {
    btn.innerText = one.next().value;
});