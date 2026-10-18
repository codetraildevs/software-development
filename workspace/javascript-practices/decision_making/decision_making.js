 

/*
const studentName = "Alice";
const feesRequired = 150000;
const feesPaid = 150000;
const balance = feesRequired - feesPaid;
if(balance>0){
   console.log(`Dear ${studentName}, Your ourstanding balance is ${balance}`)
}
 
else {
   console.log(`Dear ${studentName}, All amount full paid`)
}

const status=balance<=0?'Full paid':'pending balance'






syntax:
if(condition){
//block of code
}


const passMark = 70;
const studentMarks = 71;
//validate input
if(typeof studentMarks==='number'){
    if (studentMarks >= 0 && studentMarks <= 100) {
    if (studentMarks >= passMark) {
        console.log(`Dear Alice, Congulations you passed with ${studentMarks}`)
    }
    else {
        console.log(`Dear Alice, sorry you have failed ${studentMarks}`)
    }
}
else {
    console.log('The marks you entered is out of range, please enter marks bt 0 and 100.')
}
}
else {
    console.log('Marks must integer number.')
}

1.write a js program to check if a given number is odd or even
2.write a js program to check if a given number is positive or negative



 if else if used when you multiple conditions
 syntax 

 
 if(condition1){
 //statement1
 }
 else if (condition2){
 //statement2
 }
 else if (condition2){
 //statement3
 }
 .
 .
 .
 .
 else if (condition n){
 //statementn
 }
 else {
    statements
    }




3.Challenge: The Smart Shopper Discount
 Write a program that calculates a customer's final price based on
  how much money they spend (totalSpent).
• No discount: Under $50
• 10% discount: $50 to $100
• 20% discount: Over $100


let totalSpent = 200;
let finalPrice;//grobal
if (totalSpent < 50 && totalSpent > 0) {
    finalPrice = totalSpent;
}
else if (totalSpent >= 50 && totalSpent <= 100) {
    finalPrice = totalSpent * 0.1;//10%

}
else {
    finalPrice = totalSpent * 0.2;
}

console.log(`The customer Final price is: ${finalPrice}`)



Challenge 1: The Grade Calculator

Write a program that takes a variable score (from 0 to 100) and 
prints the correct letter grade.
• A: 90 or above
• B: 80 to 89
• C: 70 to 79
• F: Below 70


Challenge 2: Movie Ticket Pricing

Write a program that determines a ticket price based on a person's age.
• Free: Under 5 years old
• Child Price ($10): Age 5 to 12
• Adult Price ($15): Age 13 to 64
• Senior Price ($8): Age 65 and older


const marks=85;
let result;
if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
    console.log('Please enter valid marks');

}
else if(marks>=90){
    result='A';
}
else if(marks>=80){
    result='B';  
}
else if(marks>=70){
    result='C';  
}
else {
     result='F';  
}

console.log(`Grade is ${result}`)


const studentName = "Diane";
const attendance = 90;
const isRegistered = true;
if (attendance >= 80 || !isRegistered) {
 console.log(`${studentName}: Eligible for examination.`);
} else {
 console.log(`${studentName}: Not eligible for examination.`);
}


RBA :Role based access
role:student,instructor,school_admin




let isLoggedin=true;
let userRole='teacher';
if(isLoggedin){

    if(userRole==='teacher'){



        console.log('Record students marks')
    }
    else if(userRole==='student'){
          console.log('check their marks and result')
    }
    else if(userRole==='school_admin'){
        console.log('Manage reports')
    }
}
else {
    console.log('Please login first & Try again.')
}

display days of weeek using switch case




let day=5;
let message;
switch(day){
    case 1:
    message='Monday';
    break;

   case 2:
    message='Tuesday';
    break;
  case 3:
    message='Wednesday';
    break;
    case 4:
    message='Thursday';
    break;
    case 5:
    message='Friday';
    break;
    case 6:
    message='Saturday';
    break;
    case 7:
    message='Sunday';
    break;

    default:
      message='Invalid day,Please day between 1-7'
    
}
console.log(message);



const selectedService = "results";
switch (selectedService) {
 case "results":
 console.log("Visit the academic office for your results.");
 break;
 case "fees":
 console.log("Visit accounts for your fees statement.");
 break;
 case "library":
 console.log("Visit the library to borrow a book.");
 break;
  case "Discipline":
 console.log("Visit the displine port");
 break;
 default:
 alert("Service not recognised.");
}

let userRole='student';

switch(userRole){
    case 'teacher':
    console.log('Record marks')
    break;
    case 'student':
    console.log('view marks')
    break;
    case 'school_admin':
    console.log('manage report')
    break;

    default:
    console.log('Invalid role')
}
 

write program that takes two numbers and operators(+,-,*,/ and *) and display result based 
on operator chosen:*/
 
