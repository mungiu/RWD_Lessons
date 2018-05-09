/////////////////////////////////////////// Methods implementation ////////////////////////////////////////
randomMovement("#fish1Id");
randomMovement("#fish2Id");
bubbleMania("#bubble1Id");
bubbleMania("#bubble2Id");
bubbleMania("#bubble3Id");

$(window).on("click", function (event) {
    var fish1W = $("#fish1Id").width();
    var fish1H = $("#fish1Id").height();
    // centering fish on  click
    var x = event.pageX - (fish1W / 2);
    var y = event.pageY - (fish1H / 2);
    // max height $ width
    var maxX = $(this).width() - fish1W;
    var maxY = $(this).height() - fish1H;
    // upper/left boundaries
    if (x < (fish1W / 16))
        x = (fish1W / 16);
    if (y < (fish1H / 16))
        y = (fish1H / 16);
    // lower/right boundaries
    if (x > maxX)
        x = maxX;
    if (y > maxY)
        y = maxY;
    // move on click
    $("#fish1Id").stop().animate({ left: x, top: y }, 1000, "swing", function () { randomMovement(this) });
})

$("#fish1Id").on("dblclick", function () {
    // saving height/width
    var exponent = 1.5;
    // increase/decrease fish + callback random movement
    $(this)
        .stop().animate({ height: this.clientHeight * exponent, width: this.clientWidth * exponent }, 500)
        .delay(3000).animate({ height: this.clientHeight, width: this.clientWidth }, 500,
            function () { randomMovement(this); });
})

$("#fish2Id").on("mouseover", function () {
    $(this).stop().animate(randomMovement(this, true));
})

//////////////////////////////////// Methods declaration ////////////////////////////////////////////
function randomMovement(IdRef, fastMove) {
    var maxX = $(window).width() - $(IdRef).width();
    var maxY = $(window).height() - $(IdRef).height();
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    // animation
    if (fastMove)
        $(IdRef).animate({ left: randomX, top: randomY }, 1000, "swing", function () { randomMovement(IdRef); });
    else
        $(IdRef).animate({ left: randomX, top: randomY }, 10000, "swing", function () { randomMovement(IdRef); });
}

function bubbleMania(IdRef) {
    var rX = Math.floor(Math.random() * ($(window).width() - $(IdRef).width()));
    var yDown = $(window).height() + $(IdRef).height();
    var yUp = 0 - ($(IdRef).height() * 1.5);
    // animation
    $(IdRef).delay(1000).animate({ top: yDown, left: rX }, 1, "linear", function () { bubbleMania(IdRef); });
    $(IdRef).animate({ top: yUp, left: rX }, 10000, "linear", function () { bubbleMania(IdRef); });
}