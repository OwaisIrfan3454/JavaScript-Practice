//Var Usage
// var name = "Owais";

// if (true) {
//     var name = "Irfan";
//     console.log (name);
// }
// name = "Abbasi"
// console.log (name);


//Let Usage
// let name = "Owais";

// if (true) {
//     let name = "Irfan";
//     console.log (name);
// }
// name = "Abbasi";
// console.log (name);


//Const Usage
// const name = "Owais";

// if (true) {
//     const name = "Irfan";
//     console.log (name);
// }
// // name = "Abbasi";
// console.log (name);

let firstName = "Owais"; 
let lastName = "Irfan"; 
let fullName = `${firstName} ${lastName}`;
console.log (fullName);


let age = 24;
let massage = `I am ${age} year old`;
console.log (massage);


let multiString = `
It's me Owais
I am 24 year old
I am a WebDeveloper`;
console.log (multiString);



let i = 5;
for (i = 1; i <= 10; i++) {
    console.log (`5 * ${i} = ${5 * i}`);
}


const num = function (a, b) {
    let result = `The num of ${a} and ${b} is ${a + b}`;
    console.log (result);
};
num (5, 5);

const circle = (a, b) => `The num of ${a} and ${b} is ${a + b}`;
console.log (circle(5,5));


const square = a => `The square of ${a} is ${a * a}`;
console.log (square(5));

const greet = () => console.log ("I am Muhammad Owais Irfan");
greet();