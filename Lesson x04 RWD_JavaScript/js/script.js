var document;
var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

var firstField = document.getElementById("firstFieldId");
firstField.innerHTML = firstField.innerHTML + " 15";

var firstLine = document.getElementById("firstLineId");
firstLine.innerHTML = firstLine.innerHTML + " 18";

var animalsArr = ["Cat", "Dog", "Parrot"];
var secondLine = document.getElementById("secondLineId");
secondLine.innerHTML = animalsArr[0] + " " + animalsArr[1] + " " + animalsArr[2];

var fruitsArr = ["Apple", "Banana"];
var fruitClass = document.getElementsByClassName("fruitClass");
fruitClass[0].innerHTML = fruitsArr[0];
fruitClass[1].innerHTML = fruitsArr[1];

var thirdLine = document.getElementById("thirdLineId");
thirdLine.innerHTML = "<b>" + thirdLine.innerHTML + "</b>";

var fourthLine = document.getElementById("fourthLineId");
fourthLine.innerHTML = "<ul><li>" + animalsArr[0] + "</li><li>" + animalsArr[1] + "</li><li>" + animalsArr[2] + "</li></ul>"