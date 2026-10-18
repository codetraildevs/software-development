/*
2. JavaScript Operators
An operator is a symbol or keyword that performs an operation on one or more values.
For example, the + operator adds two numbers together, while the === operator checks if two values are equal.


let number1=100;
let number2='50';
//Arithmetic operators
let sum=number1/number2;//division operator
console.log(sum);//2
//type conversion:  - JavaScript automatically converts the string '50' 
// to a number before performing the multiplication operation.
//for + operator, JavaScript performs string concatenation instead of addition 
// when one of the operands is a string.

Types of Operators in JavaScript:
1. Arithmetic Operators: used to perform mathematical operations on numbers. (+,-,*,/,%)
2. Assignment Operators: used to assign values to variables. (=+,-=,...)
3. Comparison Operators: used to compare two values and return a boolean value (true or false). (<,>,<=)
4. Logical Operators: used to combine multiple boolean expressions and return a boolean value.(&,||,! )
6. Tenary operator used for shorthand of if (?:)

Arithmetic operators for calculation


let dbMarks=50;
let jsMarks=100;
console.log(`Sum:${dbMarks+jsMarks}`)
console.log(`diff:${dbMarks-jsMarks}`)
console.log(`Product:${dbMarks*jsMarks}`)
if(jsMarks!==0){
console.log(`Quotient:${dbMarks/jsMarks}`) //checking if denominator different from 0, n/0 error
console.log(`Remainder:${dbMarks%jsMarks}`)
}


2.Assignment Operators


let A=30;

A+=30///A=A+30
console.log(A)
let balance = 1000;
balance+=500;

console.log(balance); // 1500


2.Assigment Operators


let x=10;
x+=5;//x=x+5
console.log(x)//15
x-=5;//x=15-5=10
console.log(x)//10
x*=5;//x=x*5
console.log(x)//50
x/=5;//x=x/5
console.log(x)//10

x%=5;//x=x%5/10%5=0
console.log(x)//

x**=5;//x=x**5  0 power 5
console.log(x)


3.Comparisons operators


let myAge=20;

console.log(myAge>=18)//true
console.log(myAge<=18)//true
console.log(5=='5');//true
console.log(5!='5');//false
console.log(5==='5');//false
console.log(5!=='5');//true

4.Logical Operator
AND logical return true when both expressions are true otherwise return false
OR logical return true when atleast one condition is true otherwise false



let hasDrivingLisence=false;
let isDrivingLisenceValid=false;
let age=25;
// console.log(age>=20 && hasDrivingLisence && isDrivingLisenceValid )//true
 console.log(age>=20 || !hasDrivingLisence)//true &true =true

 console.log(!isDrivingLisenceValid)//true

 let hasLaptop=true;
 let hasInternet=false;

console.log(hasLaptop||hasInternet);

let userName='Fidele005';
let password='01234567';

console.log(password==='01234567' && userName==='Fidele005')//


if(password==='01234567' && userName==='Fidele005'){
    console.log(`Welcome ${userName}`); //template string literals

}
else{
    console.log('Invalid username or password, Try again');
}




5.Increment and decrement  increase ot decrease value by 1

   let count=10;

  let x= --count//pre-increment means add 1 before operations count++:post-increment means add 1 after operations
  let d=x+20;
  console.log(d)//10+1+20=3
  console.log(x);
  console.log(count);
  
  

  let y=10;

  let k=20;
  console.log(k)
  let p=(++y)-(k++);//11-20=-9 k=21
console.log(y)


  let r=(p++)+ (--k);//-9+20=11

  console.log(p)//-9+1 =-8>-9
  console.log(r)//11



5. Ternary Operator
The ternary operator is a shorter way to write a simple if...else expression.
Syntax:
condition ? valueIfTrue : valueIfFalse;
*/
let passMarks=50;

if(passMarks>=50){
    console.log('Passed')
}
else {
    console.log('Failed')
}

let userStatus=passMarks>=50? 'passed':'Failed';//ternary operator
console.log(userStatus);