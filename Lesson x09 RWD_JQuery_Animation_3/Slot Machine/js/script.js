/*globals $: false, setInterval: false, clearInterval: false*/
// Number of times a roller will flip after pressing the button
var noFlips = 10;
var credits = 10;

var imageSrcArray = ["images/one.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png", "images/seven.png", "images/eight.png"];

var newRoller1Value = null;
var newRoller2Value = null;
var newRoller3Value = null;

var img1 = true;
var img2 = true;
var img3 = true;

updateCredits();

$("#rollButton").click(function () {
    if (credits > 0)
        roll();
    updateCredits();
});

$("#claimButton").click(function () {
    bonusCredits();
    updateCredits();
})

$("#roller1").click(function () {
    if (img1 == true)
        img1 = false;
    else
        img1 = true;
});

$("#roller2").click(function () {
    if (img2 == true)
        img2 = false;
    else img2 = true;
});

$("#roller3").click(function () {
    if (img3 == true)
        img3 = false;
    else img3 = true;
});

//------------------------
// Function declarations
//------------------------
// Roll the rollers
function roll() {
    var counter = 0;
    // Run this sequency multiple times
    var intervalRef = setInterval(function () {
        showNewImage("#roller1", "#roller2", "#roller3");

        if (counter < noFlips) {
            counter++;
        } else {
            clearInterval(intervalRef);
        }
    }, 250); // Time between rolls

    credits--;
}

// Updates credits
function updateCredits() {
    $("#credits").text("Credits: " + credits);
}

// Picks a new image to show for a roller
function showNewImage(imageRef1, imageRef2, imageRef3) {
    if (img1 == true) {
        newRoller1Value = Math.ceil(Math.random() * 8);
        $(imageRef1).attr("src", imageSrcArray[newRoller1Value]);
    }

    if (img2 == true) {
        newRoller2Value = Math.ceil(Math.random() * 8);
        $(imageRef2).attr("src", imageSrcArray[newRoller2Value]);
    }

    if (img3 == true) {
        newRoller3Value = Math.ceil(Math.random() * 8);
        $(imageRef3).attr("src", imageSrcArray[newRoller3Value]);
    }
}

// claim bonus combination credits
function bonusCredits() {
    if (newRoller1Value == newRoller2Value && newRoller1Value == newRoller3Value)
        credits += 100;
    else if (newRoller1Value == newRoller2Value ||
        newRoller1Value == newRoller3Value ||
        newRoller2Value == newRoller3Value)
        credits += 10;
}