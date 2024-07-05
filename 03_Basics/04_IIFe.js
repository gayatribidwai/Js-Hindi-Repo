//Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    console.log("DB Connected");
})();

( (arg)=>
{
    console.log(`DB Connected ${arg} Successfully!`);
})("connection")