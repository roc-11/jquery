$(document).ready(function () {

    /*********  Example - change css ************/
    // $("h2").css("text-decoration", "underline"); // underlines all <h2> elements
    $("h2").addClass("underline");
    // $("ul").css("border", "solid 1px #ccc");
    $("ul").removeClass("border");

    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});