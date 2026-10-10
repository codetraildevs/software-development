
/*
Data types help to define the type of data that can be stored in a variable.

Primitive data types in javascript are data types that are not objects and have no methods. 
There are 7 primitive data types in JavaScript: string, number, boolean, undefined, null, 
bigint, and symbol.
*/
//1.string:used to store text information including everything inside the single quotes or double quotes
let FirstName='Fidele';//string
let myName="Kalisa";//string
let number='25';//string

/*
console.log(`Welcome, ${FirstName}! and you are ${number} years old.`);//string
templete literals are string literals allowing 
embedded expressions. You can use multi-line strings 
and string interpolation features with them. 
Template literals are enclosed by the back-tick (` `) (grave accent) 
character instead of double or single quotes.

console.log(typeof FirstName);//string
console.log(typeof myName);//string
console.log(typeof number);//string
*/

//2.number:used to store numeric values.
let age=25;//number
let height=5.9;//number
/*
console.log(typeof age);//number
console.log(typeof height);//number
*/
//3.boolean:used to store true or false values.(answer must yes or no)
let isMarried=true;
let isSingle=false;
let isStudent=true;
/*
console.log(typeof isMarried);//boolean
console.log(typeof isSingle);//boolean
console.log(typeof isStudent);//boolean
*/


//4.undefined:used to store a variable that has not been assigned a value.
let width;//undefined
/*
console.log(typeof width);//undefined   

width=5;//number

console.log(typeof width);//number
width='20'//string
console.log(typeof width);//string

//5.null:used to store a variable that has no value.

let length = null;//null absence of any value
console.log(typeof length);//object
let selectedCourse = null;
console.log(typeof selectedCourse);

let name='';//string empty string
//6.BigInt:used to store large integers that are beyond the safe integer limit for numbers in JavaScript.
let bigIntValue=1234567890123456789012345678901234567890n;

console.log(typeof bigIntValue);//bigint

*/

//7.symbol:used to create unique identifiers for objects.

let id1=Symbol('id');//create a unique symbol with the description 'id'
let id2=Symbol('id');//create another unique symbol with the same description 'id'

console.log(typeof id1);//symbol
console.log(typeof id2);//symbol

//check if id1 and id2 are equal
console.log(id1===id2);//false//===:strict equality operator checks for both value and type equality.

/*
Non-primitive data types in JavaScript are data types that are objects and have methods.
*/