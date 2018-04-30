/*globals $:false*/
// saving original state
var originalOrangeBox = $("#orangeBoxId").clone();
var originalGreenBox = $("#greenBoxId").clone();
var originalRedBox = $("#redBoxId").clone();
var originalBlueBox = $("#blueBoxId").clone();

// Call to function
$("#orangeBoxId").animate({ left: "+=200" }, "slow", function () { squareMovement(this) });

$("#stopButtonId").click(function () {
    $("#orangeBoxId").stop(true, true);
})

$("#startButtonId").click(function () {
    // re-calling animation function again
    squareMovement("#orangeBoxId");
})

$("#greenBoxId").hover(function () {
    randomMovement(this);
})

$("#redBoxId").click(function () {
    randomFade(this);
})

$("#blueBoxId").click(function () {
    randomFade(this);
})

$("#showButtonId").click(function () {
    bringBackBox();
})

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 39:
            $("#blueBoxId").animate({ left: "+=50" });
            break;
        case 37:
            $("#blueBoxId").animate({ left: "-=50" });
            break;
        case 38:
            $("#blueBoxId").animate({ top: "-=50" });
            break;
        case 40:
            $("#blueBoxId").animate({ top: "+=50" });
            break;

    }
})

// Declaration of function
function squareMovement(IdRef) {
    $(IdRef).delay(1000).animate({ top: "+=100" })
        .delay(1000).animate({ left: "+=100" })
        .delay(1000).animate({ top: "-=100" })
        .delay(1000).animate({ left: "-=100" },
            function () { squareMovement(IdRef); });
}

function randomMovement(IdRef) {
    var maxX = $(window).width() - $(IdRef).width();
    var maxY = $(window).height() - $(IdRef).height();
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    $(IdRef).animate({ left: randomX, top: randomY })
}

function randomFade(IdRef) {
    var randomNr = Math.floor(Math.random() * 10);
    if (randomNr < 5)
        $(IdRef).slideUp();
    else
        $(IdRef).fadeOut();
}

function bringBackBox() {
    $("#orangeBoxId").replaceWith(originalOrangeBox),
        $("#greenBoxId").replaceWith(originalGreenBox),
        $("#redBoxId").replaceWith(originalRedBox),
        $("#blueBoxId").replaceWith(originalBlueBox)
}