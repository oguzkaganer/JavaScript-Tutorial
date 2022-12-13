var Person = {
  name: "None",
  email: "None",
  sendEmail: function () {
    console.log("Mail sent to : " + this.name + " (" + this.email + ")");
  },
};

function Customer(name, email) {
  this.name = name;
  this.email = email;
}

function Employee(name, email) {
  this.name = name;
  this.email = email;
}

Customer.prototype = Person;
var customer1 = new Customer("Oğuz", "oguz@gmail.com");
customer1.sendEmail();

Employee.prototype = Person;
var employee1 = new Employee("Kübra", "kubra@gmail.com");
employee1.sendEmail();
