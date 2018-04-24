var document;
var listItemArray = document.getElementsByTagName("li");

listItemArray[0].innerHTML = listItemArray[0].innerHTML + " " + add_two_numbers(5, 7);
listItemArray[1].innerHTML = listItemArray[1].innerHTML + " " + multiply_three_number(2, 2, 2);
listItemArray[2].innerHTML = listItemArray[2].innerHTML + " " + calculate_area_circle(10);
listItemArray[3].innerHTML = listItemArray[3].innerHTML + " " + random_color();
listItemArray[4].innerHTML = listItemArray[4].innerHTML + " current date is: " + current_date() + ", days since 1/1-2015: " + days_since();
listItemArray[5].innerHTML = listItemArray[5].innerHTML + " " + even_or_odd_Number();

var counter1 = document.getElementById("counter1Id");
var counter2 = document.getElementById("counter2Id");
counter1.innerHTML = counter1.innerHTML + " " + timedIncrement(0, 100, 1000);
counter2.innerHTML = counter2.innerHTML + " " + timedIncrement(0, 200, 2000);

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

function multiply_three_number(n1, n2, n3) {
    return n1 * n2 * n3;
}

function calculate_area_circle(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function random_color() {
    var tempArr = ["red", "blue", "green", "black", "white"];
    var randomNumber = Math.round(Math.floor(Math.random() * 4));
    return tempArr[randomNumber];
}

function current_date() {
    return new Date();
}

function days_since() {
    return Math.round(Math.abs(new Date() - new Date(2015, 0, 1)) / (1000 * 60 * 60 * 24));
}

function even_or_odd_Number(days_since) {
    var daysSince = Math.round(Math.abs(new Date() - new Date(2015, 0, 1)) / (1000 * 60 * 60 * 24));
    if ((daysSince % 2) == 0)
        return "number is even"
    else
        return "numbe is odd";
}

//NOT FINISHED VALUE NOT DISPLAYED/ OR NOT INCREASING
function timedIncrement(value, incrementAmount, timeInterval) {
    var myIntervalRef = setInterval(function () {
        if (value < 1000) {
            value += incrementAmount;
        }
        else {
            clearInterval(myIntervalRef)
        }
    }, timeInterval);
    return myIntervalRef;    
}