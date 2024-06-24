const accountId=123234
let accountEmail="gayatri@gmail.com"
var accountPass="12309746"
accountCity="Ahemadabad" //Possible to declare but not good manners😅
let account_State; // output - by default = undefined

accountEmail="bidwai@gmail.com"
accountPass=2122132
accountCity="Maharastra"

console.log(accountId);
/*
preffered not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,account_State])