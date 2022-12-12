// 1. Tipler
var user = "Oğuz Kağan ER";
var value = 10;
user = user.substring(0, 4);
document.getElementById("1").innerHTML = user + " : " + value;

// 2. Diziler
var students1 = ["Ali", "Mehmet", 25, "Onur"];
document.getElementById("2").innerHTML = students1;

var students2 = new Array("Ayşe", "Dilek");
students2[0] = "Nazlı";
students2.push("Leyla"); //diziye eleman ekleme
students2[3] = "Senem";
students2[students2.length] = "Kübra";
document.getElementById("3").innerHTML = students2[4];

students1.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < students2.length; i++) {
  const element = students2[i];
  console.log(element);
}

// 3. Objeler
var student = { firstName: "Kağan", lastName: "Er", city: "İstanbul" };
student.firstName = "Oğuz Kağan";
document.getElementById("objectDemo").innerHTML = student.firstName;

// 4. Loose Typing
var number = 10;
number = "ten";
//alert(number);

// 5. Dynamic Typing
var customer = {
  id: 1,
  contactName: "Murat Nazım",
};
customer.county = "Türkiye";
customer.sayHello = function () {
  alert("Hello " + this.contactName);
};
//customer.sayHello();

// 6. Events
function eventCode() {
  alert("Event Code Run");
}
