// var counter = 0;
// function add() {
//   counter += 1;
//   return counter;
// }

// function add10() {
//   counter += 10;
//   return counter;
// }

// 1. Closures
var add = (function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();

// exp2
var cnt1 = document.getElementById("cnt1");

function Counter() {
  let count = 0;
  this.getCount = () => count;
  this.increment = () => count++;
  this.decrement = () => count--;
  this.reset = () => (count = 0);
}
let counter1 = new Counter();

setInterval(incrementCounter, 1000);
function incrementCounter() {
  counter1.increment();
  let deger = counter1.getCount();
  if (deger === 100) counter1.reset();
  cnt1.innerHTML = deger;
}

// 2. Classes

function Customer(firstName, lastName) {
  // constructor
  this.firstName = firstName; //public
  this.lastName = lastName; //public

  var someField = "some value"; // private

  //this.sendProduct = () => console.log("Product sent!");
  this.sendProduct = function () {
    console.log("Product sent!");
  };
}

var cust1 = new Customer("Oğuz", "ER");
cust1.sendProduct();
