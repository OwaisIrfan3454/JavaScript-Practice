//Function Invocation
function sum(a, b) {
    return a + b;
}
console.log (sum (3, 7));
console.log (sum (6, 7));
console.log (sum (2, 7));


// function greet() {
//     console.log ("Owais Irfan");
// }
// greet();


function count() {
    a = 10, b = 10;
    console.log (a + b);
}
count();


//Function Parameter & Arrgument
function greet (name) {
    console.log ("Hello  " + name + ", Welcome to JS course");
}
greet ("Owais");
greet ("Fahad");


function num (a, b) {
    console.log (a + b);
}
num (5, 8);
num (7, 9);

//Function Expressions
var result = function sum (a, b) {
    console.log (a + b);
}
result (15,37);


//Anonymous Function
var result = function (a, b) {
    console.log (a + b);
}
result (5,31);


//Return Expression
function data(a, b) {
    return a + b
}
var result = data(4, 4);
console.log (result);
console.log ("The sum of two number is " +  result);


function sum(a, b = 20) {
    return a +  b;
}
console.log (sum(5, 10));

//Syntax Function
var circle = (function (a , b) {
    console.log (a + b);
    return a + b;
})(5, 6);
console.log ("The sum of two number is " +  circle);


const calculator = (num1, num2, operator) => {
let result;
switch (operator) {
    case "+":
        return num1 + num2;

    case "-":
        result = num1 - num2;
        return result;

    case "*":
        result = num1 * num2;
        return result;

    case "/":
        if (num2 === 0) {
            return "0 is not allowed"
        } else {
            result = num1 / num2;
            return result;
        }

    default:
        return "no operator found"
 }
}
console.log (calculator(5, 5, "-"));
console.log (calculator(6, 39, "+"));
console.log (calculator(10, 0, "/"));
console.log (calculator(5, 5, "*"));


const isReverse = (str) => {
    let reverse = "";
    for (let char = str.length -1; char >= 0; char--) {
       reverse = reverse + str[char];
    }
    return reverse;
}; 
console.log (isReverse ("Owais Irfan"));



const ispalindrome = (str) => {
    let reverse = "";
    for (let char = str.length -1; char >= 0; char--) {
       reverse = reverse + str[char];
    }
    // if (str === reverse) {
    //     return true;
    // } else {
    //     return false;
    // }
    return str === reverse ? true : false; 
}; 
console.log (ispalindrome ("level"));