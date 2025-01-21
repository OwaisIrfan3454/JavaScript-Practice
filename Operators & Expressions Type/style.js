// Assigment Symbols (=)
// Arrthimetic Symbols (+)
// Subtraction Symbols (-)
// Multiplication Symbols (*)
// Division Symbols (/)
// Remainder Symbols (%)

// Example
var result = "hello" / 5;
console.log (result);

var result = 0.1 + 0.2;
console.log (result.toFixed(2));

var result = 55 * "hello";
console.log (result);

var str1 = "hello ";
var str2 = "world";
var str3 = str1 + str2;
console.log (str3);

var string = 5 === "5";
console.log (string);

var string = 5 == "5";
console.log (string);

var num = 5 != 5;
console.log (num);

// Greater Than
console.log (5 > 2);

// Less Than
console.log (5 < 2);

// Greater Than Equal
console.log (12 >= 10);

// Less Than Equal
console.log (12 <= 10);

var num1 = 1;
var num2 = "1";
if (num1 === num2) {
    console.log ("equal");
}
else {
    console.log ("not equal");
}

// False Symbol (&&)
var x = 5;
var y = 10;
console.log (x > 0 && y < 0);

// True Symbol (||)
var a = 15;
var b = 15;
console.log (a > 10 || b < 10);

var isOpen = false;
console.log (!isOpen);

// Condition Practice
var age = 18;
var drivingLicense = true;
// age > 18
// age == 18
// console.log (drivingLicense);
console.log (age >= 18 && drivingLicense);

var age = 15;
var result = age >= 18 ? "Yes" : "No";
console.log (result);

var score = 58;
var result = score >= 60 ? "Pass" : "Fail";
console.log (result);

console.log ("5" - 3);
console.log (2 < 12 < 5);
console.log ("20" + 10 + 10);