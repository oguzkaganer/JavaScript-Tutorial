function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Student(favoriteCourse) {
  this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Oğuz", "ER");

var student1 = new Student("Programming");

//student1.firstName = "Oğuz";
//student1.lastName = "ER";

console.log(
  student1.firstName +
    " " +
    student1.lastName +
    " loves " +
    student1.favoriteCourse
);
