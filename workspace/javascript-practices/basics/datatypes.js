
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


//7.symbol:used to create unique identifiers for objects.

let id1=Symbol('id');//create a unique symbol with the description 'id'
let id2=Symbol('id');//create another unique symbol with the same description 'id'

console.log(typeof id1);//symbol
console.log(typeof id2);//symbol

//check if id1 and id2 are equal
console.log(id1===id2);//false//===:strict equality operator checks for both value and type equality.


2.Non-primitive or complex  data types in JavaScript are data types that are objects and have methods.
examples of non-primitive data types include objects, arrays, and functions.

1. Object: An object is a collection of properties, where each property is a key-value pair.
syntax for creating an object in JavaScript:
const objectName = {
  property1: value1,
  property2: value2,
  // ...
};
objects are collections of key-value pairs, where each key is a string (or symbol)
and each value can be any data type, including other objects or functions.

const studentInfo={studentName:'Kelvin',age:30,course:'JavaScript',isPromoted:true};//object
console.log(typeof studentInfo);//object
console.log(studentInfo.age);//30
studentInfo.age=20;//update the value of age property
console.log(studentInfo.age);//20

console.log(studentInfo);//{ studentName: 'Kelvin', age: 20, course: 'JavaScript', isPromoted: true }

2. Array: An array is an ordered collection of values, where each value can be of any data type.


syntax for creating an array in JavaScript:
const arrayName = [value1, value2, value3, ...];


we use index to access the elements of an array. 0,1...n-1 
last index of an array is always length-1.  
for example if the length of an array is 5, the last index will be 4.

The index starts from 0 for the first element, 1 for the second element, and so on.

const studentMarks=[10,30,100,90,50,'kevin',77,88,99,'Fidele'];//array length-1=>9-1=8

let sum=0;
for(let i=0;i<studentMarks.length;i++){//return true if the value of i is less than the length of the array, otherwise return false
  //sume of the elements of an array
  if(typeof studentMarks[i]==='number'){
  sum=sum+studentMarks[i]; //sum=0+10=10, sum=10+30=40, etc.i=6> sum=40+77=117, i=7> sum=117+88=205, i=8> sum=205+99=304
  }
}
console.log(typeof studentMarks);//object 
 console.log(studentMarks[8]);//index out of bounds, returns undefined
 console.log(`Sum of all numeric elements in the array: ${sum}`);//sum of all elements in the array
console.log(studentMarks[7]);//99


let programmingLanguages=['JavaScript','Python','Java','C++','C#',20,100,true,undefined,null];//array

3. A function is a reusable block of code that performs a task. Functions are also objects in
JavaScript.

syntax for creating a function in JavaScript:
function functionName(parameters) {
  // code to be executed
}

syntax for calling a function in JavaScript:
functionName(arguments);

function add(a, b) {
 return a + b;
}


function add(a, b) { //a and b are parameters of the function add
 return a + b;
}

const add=(a,b)=>a+b;//arrow function
console.log(typeof add);//function
//console.log(add(10, 20));//10 and 20 are arguments passed to the function add, which returns 30

//
function insertProduct(productName, quantity, productPrice,isFeatured,isPopular,isNew){
  //body of the function
} 


//arrow function: An arrow function is a concise way to write a function in JavaScript.
//syntax for creating an arrow function in JavaScript:
const functionName = (parameters) => {
  // code to be executed
};

const calculateSimpleInterest=(principal,rate,time)=>principal*rate*time/100;//concise way to write a function in JavaScript

function simpleInterest(principal,rate,time){
  return principal*rate*time/100;
}

console.log(simpleInterest(1000,5,2));//1000*5*2/100=100

console.log(calculateSimpleInterest(1000,5,2));//1000*5*2/100=100
 
function greetings(name){
  return `Hello, ${name}! Welcome to JavaScript programming.`;
}
console.log(greetings('kallisa'));//Hello, kallisa! Welcome to JavaScript programming.
 */