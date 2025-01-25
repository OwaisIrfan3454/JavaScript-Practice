//Arrays Constructor
let fruit = new Array ("Apple", "Orange", "Banana");
console.log (fruit);


//Arrays Literal
let fruits = ["Apple", "Orange", "Banana"];
console.log (fruits);


let fruitss = ["Apple", "Orange", "Banana"];
console.log (fruitss [0]);


let fruitsss = ["Apple", "Orange", "Banana"];
fruitsss[3] = "mango";
console.log (fruitsss);


let fruitx1 = ["Banana", "Mango", "Graps", "Leechi", "Orange"];
// for (let item of fruitx1) {
//     console.log (item); 
// }

// for (let item = 0; item <= fruitx1.length -1; item++) {
//     console.log (fruitx1[item]);
// }


// for (let item in fruitx1) {
//     console.log (item); 
// }


fruitx1.forEach((curElem, item, arr) => {
    console.log (`${curElem}${item}`);
});


const myMapArr = fruitx1.map ((curEle, index, arr) => {
    return `${curEle}${index}`
});
console.log (myMapArr);


let fruitx2 = ["apple", "mango", "orange",];
console.log (fruitx2.push("anar"));
console.log (fruitx2);


console.log (fruitx2.pop());
console.log (fruitx2);


console.log (fruitx2.unshift("anar"));  
console.log (fruitx2);


console.log (fruitx2.shift());  
console.log (fruitx2);


let fruitx3 = ["mango", "apple", "graps",]
fruitx3.splice(1,1,"red apple");
console.log (fruitx3);


const data = ["Owais", "Raza", "Saad", "Huzaifa", "Saad", "Fahad", "Usama", "Ahad"];
console.log (data.indexOf("Saad"));    


const number = ["Owais", "Raza", "Saad", "Huzaifa", "Saad", "Fahad", "Usama", "Ahad"];
console.log (number.lastIndexOf("Saad"));    


const name = ["Owais", "Raza", "Saad", "Huzaifa", "Saad", "Fahad", "Usama", "Ahad"];
console.log (name.includes("Amaan"));   



const month = ["Jan", "Feb", "Nov", "April", "May", "June"];
month.splice (month.length, 0, "July");
// console.log (month);
const indexToUpdate = month.indexOf ("Nov");
month.splice (indexToUpdate, 1, "March");
console.log (month);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const result = numbers.map ((curElem) => curElem * 5);
console.log (result);
const result2 = result.findIndex((curElem) =>  {
    return curElem > 22;
});
console.log (result2);



let value = "6";
const count = [1, 2, 3, 4, 5, 6, 7, 6, 8, 9,];
let updatedCart = count.filter ((curElem) => {
    return curElem != value;
});
console.log (updatedCart);



const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mobile", price: 800 },
    { name: "Charger", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "SmartWatch", price: 150 },
];
const filterProducts = products.filter ((curElem) => {
return curElem.price <= 500;
});
console.log (filterProducts);



const num = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9,];
// let uniqueValue = num.filter ((curElem, index, arr) => {
//     return arr.indexOf (curElem) === index;
// });
console.log([...new Set (num)]);


const numberData = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9,];
numberData.sort ((a, b) =>  {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log (numberData);


const word = ["Apple", "Cherry", "Oats"];
const result3 = word.map ((curElem) => {
    return curElem.toUpperCase();
});
console.log (result3);


const type = [1, 2, 3, 4, 5];
const evensquare = type.map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
.filter ((curElem) => curElem !== undefined);
console.log (evensquare);


const owais = ["Irfan", "Raza", "Owais"];
const prefixName = owais.map((curElem) => `Mr. ${curElem}`);
console.log (prefixName);


const productPrice = [100,200, 300, 400, 500];
const totalPrice = productPrice.reduce ((curElem, accum) => {
    return curElem + accum
}, 0)
console.log (totalPrice);