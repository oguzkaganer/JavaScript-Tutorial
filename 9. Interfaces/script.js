function sendEmail(personInterface) {
  var to = personInterface.eMail;
  var name = personInterface.name;

  var send = () => console.log("Mail sent to : " + name + " (" + to + ")");

  send();
}

function Customer(name, eMail) {
  this.name = name;
  this.eMail = eMail;
}

function Employee(name, eMail) {
  this.name = name;
  this.eMail = eMail;
}

var customer1 = new Customer("Harun", "harun@gmail.com");
sendEmail(customer1);

var employee1 = new Employee("Senem", "senem@gmail.com");
sendEmail(employee1);
