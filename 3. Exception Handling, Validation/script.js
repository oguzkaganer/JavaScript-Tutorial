function testInput() {
  var message, x;
  message = document.getElementById("message");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
    throw "correct";
  } catch (error) {
    message.innerHTML = "Input " + error;
  } finally {
    document.getElementById("demo").value = "";
  }
}

function validate() {
  var numberEntered = document.getElementById("numberBox");

  if (numberEntered.checkValidity() == false) {
    document.getElementById("mesaj").innerHTML =
      numberEntered.validationMessage;
  } else {
    document.getElementById("mesaj").innerHTML = "Input Ok";
  }
}
