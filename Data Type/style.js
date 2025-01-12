var isNumber = 5+5;
console.log (isNumber);
console.log (typeof isNumber);

var isNumber = "5+5";
console.log (isNumber);
console.log (typeof isNumber);

var isNumber = "5+5";
console.log (isNumber);
console.log (typeof +isNumber);

var isString = 6;
console.log (isString);
console.log (typeof (isString + ''));

var isString = "owais";
console.log (isString);
console.log (typeof isString);

var isBoolean = false;
console.log (isBoolean);
console.log (typeof isBoolean);

var isBoolean = true;
console.log (isBoolean);
console.log (typeof isBoolean);

var isNull = null;
console.log (isNull);
console.log (typeof isNull);  

var isBigInt = 4210129679235n;
console.log(isBigInt);
console.log (typeof isBigInt);

var myName = 0;
if (myName) {
    console.log("this is truthy value");
}
else {
    console.log ("its is falsy value");
}

// const myString = "45.5";
// const myNumber = parseInt(myString);
// console.log (myNumber);

const myString = "45.5";
const myNumber = parseFloat(myString);
console.log (myNumber);

console.log (isNaN("owais"));
console.log (isNaN("5"));

if ("owais" == "owais") {
    console.log ("both are equal")
}
else {
    console.log("both are not equal")
}

var str = "owais " + "irfan";
console.log (str);

// let sum = "5" + 10;
// console.log(sum);

let sum = 5 - "10";
console.log(sum);
// var isUndefined = owais;
// console.log (isUndefined);