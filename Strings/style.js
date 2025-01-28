let text = "My Name Is 'Muhammad Owais Irfan' & \\ \n My Father Name Is \"Muhammad Irfan\" I Am a Developer";
console.log (text);

let name = "Owais Irfan";
let str = Array.from (name);
console.log (str);
let strMap = str.map ((curElem, owais) => {
    return `${curElem} - ${owais}`});
console.log (strMap);


let search = "Muhammad Owais Irfan Muhammad Irfan";
let searchResult = search.search(/irfan/i);
console.log (searchResult);


let match = "Muhammad Owais Irfan Muhammad Irfan irfan";
let matchResult = match.match(/irfan/gi);
console.log (matchResult);


let matchAll = "Muhammad Owais Irfan Muhammad Irfan Irfan";
let matchAllresult = matchAll.matchAll("Irfan");
// console.log (...matchAllresult);
for (let item of matchAllresult) {
    console.log (item[0]);
};


let include = "Hello Javascript welcome to best course";
let includeResult = include.includes("Java");
console.log (includeResult);


let start = "Hello Javascript welcome to best course";
let width = start.startsWith("welcome", 17);
console.log (width);


let slice = "Muhammad Owais Irfan";
let sliceResult = slice.slice(2,20);
console.log (sliceResult);


let replace = "Muhammad Owais Irfan & Muhammad Owais Irfan";
let replaceAll = replace.replaceAll ("Owais", "Raza");
console.log (replaceAll);


let charAt = "Welcome to Javascript";
let charAtresult = charAt.charAt (6);
console.log (charAtresult);


let charCode = "Welcome to Javascript";
let charcoderesult = charCode.charCodeAt (8);
console.log (charcoderesult);


let at = "Muhammad Owais Irfan";
let atResult = at.at(-11);
console.log (atResult);


let trim = "    Owais Abbasi   ";
let trimResult = trim.trim();
console.log (trimResult);


let split = "Apple,Orange,Banana";
let splitResult = split.split (",").reverse().join();
console.log (splitResult);


console.log ("a".charCodeAt(0));
console.log ("z".charCodeAt(0));
for (let char = 97; char <= 122; char++) {
    console.log (String.fromCharCode(char));
    // console.log (char);
};


const checkAllVowels = (str) => {
    const vowels = "aeiou"
    for (let char of vowels) {

       if (!str.includes(char)) {
         return false;
       }
    }

    return true;
};
console.log (checkAllVowels("my name is owais irfan"));



const countVowels = (str) => {
    const vowels = "aeiou"
    let count = 0;
    for (let char of str) {

       if (vowels.includes(char)) {
         count++;
       }
    }

    return count;
};
console.log (countVowels("my name is owais irfan"));


const pangramCheck = (str) => {
    let inputArr = str.toLowerCase().split("");
    // console.log (inputArr);
    const value = inputArr.filter ((curElem) =>
        curElem.charCodeAt() >= "a".charCodeAt() &&
        curElem.charCodeAt() <= "z".charCodeAt()
    );
    console.log (value);

    return [...new Set(value)].length === 26;
};
console.log (pangramCheck("The quick brown  fox jumps over the lazy dog"));