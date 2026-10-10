let FirstName='Fidele';//statement1
let age=25;//statement2
console.log(age);
console.log(FirstName);
let l,w;// statement3
l=10;//statement4
w=5;//  statement5
let area=l*w;// statement6

console.log(area);

let myName='Fidele';//statement7
let myname='Fidele';//statement8
//myName and myname are two different variables because 
// they have different case letters. JavaScript is case sensitive language.
//camelCase is a naming convention in which 
// the first letter of the first word is lowercase 
// and the first letter of each subsequent word is capitalized.
let firstNumber=10;//statement9
let secondNumber=20;//statement10
let rectangleArea=firstNumber*secondNumber;//statement11
console.log(rectangleArea);
//function to calculate the area of a rectangle
function calculateRectangleArea(length,width){
    return length * width;
}