// 1. Functions
//Function Signature
function functionName(parameter1, parameter2) {
  //Do Something
  return parameter1 * parameter2;
}
console.log(functionName(2, 3));

//Function without "return"
function funcWithOutReturn(parameter1, parameter2) {
  console.log("This is a function without 'return' statement");
}
funcWithOutReturn(2, 4, 5);

//Parameter Defaults
function functionName2(x, y) {
  if (y === undefined) {
    y = 0;
  }
  console.log(x + "-" + y);
}
functionName2(3);

//The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  var i,
    max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);

// 2. Conditionals
//İF-ELSE
var date = new Date();
var hour = date.getHours();
//var hour = new Date().getHours(); -- Bu şekilde de yazılabilir.

if (hour >= 5 && hour <= 11) {
  console.log("Good Morning");
} else if (hour > 11 && hour < 17) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour < 23) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

//SWITCH-CASE
//var language = prompt("What is your language?");
var language = "tr";
switch (language) {
  case "fr":
    console.log("French");
    break;
  case "tr":
    console.log("Turkish");
    break;
  default:
    console.log("English");
    break;
}

// 3. Loops
// FOR
for (i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
  if (i == 8) {
    break;
  }
}

//WHILE
var number = 1;
while (number <= 10) {
  console.log("sayı : " + number);
  number += 1;
}

//DO - WHILE;
number = 1;
do {
  console.log(number);
  number++;
} while (number <= 3);
