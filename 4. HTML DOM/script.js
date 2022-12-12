// 1. getElementById("")
var firstParagraph = document.getElementById("intro1");
var message = document.getElementById("message");
message.innerHTML = "Message : " + firstParagraph.innerHTML;

// 2. getElementsByTagName("")
var allUnorderedLists = document.getElementsByTagName("ul");
var unorderedList = allUnorderedLists[0];

var allListItems = unorderedList.getElementsByTagName("li");

for (let i = 0; i < allListItems.length; i++) {
  const element = allListItems[i].textContent;
  //const element = allListItems[i].firstChild.data;
  console.log(element);
}

// 3. getElementsByClassName("")
var allItemsWithClassName = document.getElementsByClassName("intro1");
console.log(allItemsWithClassName[0].innerHTML);

// 4. querySelectorAll("")
var allItemsWithSelector = document.querySelectorAll("p.intro2");
console.log(allItemsWithSelector.length);
console.log(allItemsWithSelector[0].innerHTML);

// 5. getElementsByName("")
var names = document.getElementsByName("customerName");
console.log(names[0].value);

// 6.addEventListener("event", funcName)
document.getElementById("tryIt").addEventListener("click", changeColor);
document.getElementById("tryIt").style.cursor = "pointer";

function changeColor() {
  document.getElementById("intro1").style.backgroundColor = "green";
  setTimeout(changeColor2, 1000);
}

function changeColor2() {
  document.getElementById("intro1").style.backgroundColor = "grey";
}

// 7.removeEventListener
document.getElementById("tryIt").removeEventListener("click", changeColor);

// 8. Working With Nodes
var nodeText = document.getElementById("nodes").childNodes[0].nodeValue;
console.log(nodeText);

var heading = document.createElement("h2"); // <h2></h2> oluşturuyor
var node = document.createTextNode("Hello JavaScript");
heading.appendChild(node); //<h2>Hello JavaScript</h2> yapıyor.  -- append:eklemek

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(heading, p2); // div1'in içinde p2'den önce heading ekle

div1.removeChild(p2); // p2'yi sil

var heading2 = document.createElement("h1"); // <h1></h1> oluşturuyor
var node2 = document.createTextNode("This is a REPLACEMENT");
heading2.appendChild(node2); //<h1>This is a REPLACEMENT</h1> yapıyor.

var p1 = document.getElementById("p1");
div1.replaceChild(heading2, p1); // div1'in içindeki p1 yerine heading2 ekle
