/// Methods implementation
$(window).on("click", function (event) {
    var x;
    var y;
    //var maxX = $(window).width() - $("#fish1Id").width();
    //var maxY = $(window).height() - $("#fish1Id").height();

    var maxX = parseInt($(window).width()) - parseInt($("#fish1Id").css("width"));
    var maxY = parseInt($(window).height()) - parseInt($("#fish1Id").css("height"));
    var minX = 0;
    var minY = 0;

    // get click position
    if (event.pageX || event.pageY) {
        x = event.pageX - ($("#fish1Id").width() / 2);
        y = event.pageY - ($("#fish1Id").height() / 2);
    }

    x=y=0;
    if (x > minX && x < maxX)
        if (y > minY && y < maxY)
            $("#fish1Id").stop().animate({ left: x + "px", top: y + "px" }, 100, "swing");

})

$("#fish1Id").on("dblclick", function () {
    var currWidth = this.clientWidth;
    var currHeight = this.clientHeight;

    this.style.width = (currWidth * 1.5) + "px";
    this.style.height = (currHeight * 1.5) + "px";
    $("#fish1Id").delay(300).animate({ height: currHeight, width: currWidth });

    // no no no, not allowed to blow up the fish, green peace will sue you :D
    if (this.style.height > (currWidth * 1.5))
        $("#fish1Id").delay(300).animate({ height: currHeight, width: currWidth });

})

$("#fish2Id").animate(function () { randomMovement(this); }, function () { randomMovement(this); });

/// Methods declaration
function randomMovement(IdRef) {
    var maxX = $(window).width() - $(IdRef).width();
    var maxY = $(window).height() - $(IdRef).height();
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    $(IdRef).animate({ left: randomX, top: randomY }, 10000, "swing", function () { randomMovement(IdRef); });
}