/*globals $: false*/
var turn = 0;

$("#btn").click(function () {
    $("#ul").attr("src", "images/blank.png");
    $("#um").attr("src", "images/blank.png");
    $("#ur").attr("src", "images/blank.png");
    $("#ml").attr("src", "images/blank.png");
    $("#mm").attr("src", "images/blank.png");
    $("#mr").attr("src", "images/blank.png");
    $("#ll").attr("src", "images/blank.png");
    $("#lm").attr("src", "images/blank.png");
    $("#lr").attr("src", "images/blank.png");
})

$("img").click(function () {
    var currentSrc = $(this).attr("src");

    var ul = $("#ul").attr("src");
    var um = $("#um").attr("src");
    var ur = $("#ur").attr("src");
    var ml = $("#ml").attr("src");
    var mm = $("#mm").attr("src");
    var mr = $("#mr").attr("src");
    var ll = $("#ll").attr("src");
    var lm = $("#lm").attr("src");
    var lr = $("#lr").attr("src");

    if (currentSrc.match("blank") && ((turn % 2 == 0) || turn == 0)) {
        $(this).attr("src", "images/cross.png");
        turn++;
    } else if (currentSrc.match("blank") && (turn % 2 != 0)) {
        $(this).attr("src", "images/circle.png");
        turn++;
    } else
        $(this).attr("src", "images/blank.png");

    if (turn > 7 && ul.match("images/circle.png") && mm.match("images/circle.png") && lr.match("images/circle.png")) {
        $("#ul").attr("src", "images/circleWin.png");
        $("#mm").attr("src", "images/circleWin.png");
        $("#lr").attr("src", "images/circleWin.png");
    } else if (turn > 7 && ul.match("images/cross.png") && mm.match("images/cross.png") && lr.match("images/cross.png")) {
        $("#ul").attr("src", "images/crossWin.png");
        $("#mm").attr("src", "images/crossWin.png");
        $("#lr").attr("src", "images/crossWin.png");
    } else if (turn > 7 && ur.match("images/cross.png") && mm.match("images/cross.png") && ll.match("images/cross.png")) {
        $("#ur").attr("src", "images/crossWin.png");
        $("#mm").attr("src", "images/crossWin.png");
        $("#ll").attr("src", "images/crossWin.png");
    } else if (turn > 7 && ur.match("images/circle.png") && mm.match("images/circle.png") && ll.match("images/circle.png")) {
        $("#ur").attr("src", "images/circleWin.png");
        $("#mm").attr("src", "images/circleWin.png");
        $("#ll").attr("src", "images/circleWin.png");
    }
});