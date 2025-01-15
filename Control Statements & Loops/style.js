var temperature = 20;
if (temperature >= 30) {
    console.log ("Lets go to beach");
} else {
    console.log ("Watch the TV")
}




var userAge = 22;
var isCitizen = false;
var isRegistered = true;

if (userAge >= 18) {
    if (isCitizen){
        if (isRegistered) {
      console.log("You are eligible to vote") 
    } else {
      console.log("You are not eligible due to registration status")
        }
    } else {
      console.log("You are not eligible due to citizenship status")
    }
} else {
    console.log("You are not eligible to vote (Bcuz You are Younger)")
}



var num = "7";
if (num % 2 === 0) {
  console.log ("Num is even")
} else {
  console.log ("Num is odd");
}



var num = 0;
if (num === 0) {
  console.log ("num is zero");
} else if (num > 0) {
  console.log ("num is positive");
} else {
  console.log ("num is nagetive")
}



var marks = 40;
if (marks === 50) {
  console.log ("pass")
} else if (marks > 60) {
  console.log ("Extra Ordinary num according to score")
} else {
  console.log ("fail")
} 




var day = "Friday";

switch (day) {
  case "Monday":
    console.log ("Monday is a chest day");
    break;

    case "Wednesday": 
    console.log("Wednesday is a back day");
    break;

    case "Friday":
      console.log ("Friday is a biceps day");
      break;

      case "Sunday":
        console.log ("Sunady is a rest day");
        break;

  default:
    console.log ("No Condition");
}



// while loop
var num = 0;
while (num <= 9) {
  console.log (num);
  num++;
}




// Do-while loop
// var num = 1;
// do {
//   console.log (num);
//   num++;
// } while (num <= 10)





// For loop
// for (num = 1; num <= 10; num++) {
//   console.log (num);
// }



//Table pattern
// var num = 1;
// while (num <= 10); {
//   console.log ("5 *" + num + " = " + 5 * num);
//   num++
// }




// var userInput;
// var positiveNumber;
// do {
//   userInput = prompt("enter any positive number");
//   positiveNumber = parseFloat(userInput);
// }while (isNaN(positiveNumber) || positiveNumber < 0) {
//   console.log ("you are enter valid positive number", positiveNumber);
// }




// for loop convert into infinity
// for (;;) {

// }




var sum = 0;
for (var num = 1; num <= 10; num++) {
  var sum = sum + num; // 0 + 1 = 1 , 1+2=3, 3+3=5, 6 + 4 = 10, 10+5=15
}
console.log (sum);




var num = 19;
var isPrime = true;

for (var i = 2; i < num; i++) {
  console.log(i,"II")
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log ("Num is prime");
} else {
  console.log ("Num is not prime");
}



for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    var pattern = pattern + " *";
  }
  console.log (pattern);
}