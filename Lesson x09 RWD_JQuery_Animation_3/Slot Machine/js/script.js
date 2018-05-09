/*globals $: false, setInterval: false, clearInterval: false*/
// Number of times a roller will flip after pressing the button
var noFlips = 10;

var imageSrcArray = ["images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png","images/seven.png","images/eight.png"]; 

$("#rollButton").click(function(){
    roll();
});

//------------------------
// Function declarations
//------------------------
// Roll the rollers
function roll() {
    var counter = 0;
    // Run this sequency multiple times
    var intervalRef = setInterval(function() { 
        showNewImage("#roller1");

        if(counter < noFlips) {
            counter++;
        } else {
            clearInterval(intervalRef);
        }
    }, 250); // Time between rolls
}

// Picks a new image to show for a roller
function showNewImage(imageRef) {
    var newRollerValue = Math.ceil(Math.random() * 8);
    $(imageRef).attr("src",imageSrcArray[newRollerValue]);
}
