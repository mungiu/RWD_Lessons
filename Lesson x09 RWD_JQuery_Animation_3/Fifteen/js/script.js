/*globals $: false */
var square_size = 125;

var numberArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

var shuffledArray = shuffle(numberArray); // Shuffles the picture boxes when the page loads

var index = 0;
$("#outerFrame div").each(function(){
    // Find which part of the picture this box should show    
    var xPos = -(shuffledArray[index] % 4) * square_size;
    var yPos = -Math.floor(shuffledArray[index] / 4) * square_size;
    index++;
    $(this).css({
       backgroundPositionX: xPos,
       backgroundPositionY: yPos
    });
    
    // Attach an event listener to the box
    $(this).click(switchBoxes(this));
});


//------------------------
// Function declarations
//------------------------

// Function which checks whether or not the clicked box is bordering the "empty" box (box16), and if that is the case, then switch position with box16.
function switchBoxes(clickedBoxRef) {
    // Missing implementation
    // Hint: First find the co-ordinates of the clicked box and box16 and check if they are currently bordering eachother. If so, use the co-ordinates to switch position of the two boxes. Try to make the switch in a smooth animation.
}


// Helper function to randomize the elements inside an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Function that makes boxes switch positions
function switchBoxes(boxRef) {
  
}