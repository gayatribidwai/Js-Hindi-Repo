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

function add(num1)
{
    return function (num2)
    {
        return function (num3)
        {
            console.log(num1+num2+num3);
        }
    }
}
add(1)(2)(3)

//using arrow function
const addMe = (a) => (b) => (c) => a+b+c;
console.log(addMe(1)(2)(3))


const sendEmailTo = (email) => (subject) => (body) => `sending email to : ${email} with subject : ${subject} and body : ${body}`
let step1 = sendEmailTo('gayatripbidwai@gmail.com')
let step2 = step1('Regarding joining date and location.')
// let step3 = 
console.log(step2('Hereby inform you that your Joining date is 26 Sept 2024 and joining location is Pune, Hinjewadi!'))


// check out MDN Docs for more info.