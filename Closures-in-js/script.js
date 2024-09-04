function firstName(first)
{
    const name = first
    function lastName(last)
    {
        console.log(`My Name is ${first} ${last}.`)
    }
    return lastName;
}

const first = firstName("Gayatri")
first("bidwai")
