// This is a function inside an object
var student = {
  firstName: "Oğuz",
  lastName: "Er",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(student.fullName());

// Object constructor
// This is an object
function Customer(first, last, city, country, age) {
  this.first = first;
  this.last = last;
  this.city = city;
  this.age = age;
  this.country = country;
}

var customer1 = new Customer("Kağan", "Er", "istanbul", "türkiye", 28);
var customer2 = new Customer("Hilal", "Er", "Ankara", "Türkiye", 30);
console.log(customer1.first);

// 2. Prototyping
Customer.prototype.eMail;
customer1.eMail = "oguz@gmail.com";
Customer.prototype.fullName = function () {
  return this.first + " " + this.last;
};

customer2.eMail = "hilal@gmail.com";
console.log(customer1);
console.log(customer1.fullName());
console.log(customer2.eMail);
