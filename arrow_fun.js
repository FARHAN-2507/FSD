let firstname = "FARHAN" ;
let age = 6 ;
let welcome = (age < 18) ?
() => console.log(firstname + " is a child") :
() => console.log(firstname + " is an adult") ;

welcome() ; 


//SIMPLE FUNCTION
function simple()
{
    console.log('Hello World');
}
simple();




//parametries function 
function sum(a,b)
{
    return a+b;
    
}
console.log(sum(5,6));

//anynomous function
const sqr = function(n)
{
    return n*n;
}
console.log(sqr(5));
