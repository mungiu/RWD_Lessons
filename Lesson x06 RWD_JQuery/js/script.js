/*globals $:false*/
$("#exampleButtonId").on("click", function () {
    var attributeContent = $("#imageId").attr("src");
    $(this).text(attributeContent);
});

//selecting the element to listen to for "click" event
$("#fontSizeChangeButtonId").on("click", function () {
    //selecting what to do on click
    //selecting which tag to change and what to change in it
    $("h2").css("font-size", "350%");
});

$("#textButtonId").on("click", function () {
    $("#textButtonId").text("I change this text");
})

$("#imageId").on("click", function () {
    var temp = $("#imageId").attr("src");

    if (temp.match("sad"))
        $("#imageId").attr("src", "images/glad.jpg");
    else
        $("#imageId").attr("src", "images/sad.jpg");
})

$("u").on("click", function () {
    var temp = $("u").text();

    if (temp.match("NOT"))
        $("u").text("NEVER");
    else
        $("u").text("NOT");
})

$("li").on("click", function () {
    var temp = $(this).attr("value");

    $("#spanFieldId").text(temp);
})


$("*").click(function (event) {
    var x = event.pageX;
    var y = event.pageY;

    $("#xcoordId").text(x);
    $("#ycoordId").text(y);
})

$("#colorBox1Id").mouseenter(function () {
    var coloursArr = ["blue", "red", "yellow", "green"];
    var randomNr = Math.floor(Math.random() * 4);

    $("#colorBox1Id").css("background-color", coloursArr[randomNr]);
})

$("#textFieldId").keypress(function () {
    var coloursArr = ["blue", "red", "yellow", "green"];
    var randomNr = Math.floor(Math.random() * 4);

    $("#colorBox1Id").css("background-color", coloursArr[randomNr]);
})

$("#textFieldId").focus(function() {
    $("#colorBox2Id").css("background-color", "green");
})

$("#textFieldId").blur(function() {
    $("#colorBox2Id").css("background-color", "black");
})
