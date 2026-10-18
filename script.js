$(document).ready(function () {

    $("#messageButton").click(function () {

        $("#message")
            .hide()
            .text("Thank you for visiting my website!")
            .fadeIn(500);

    });

});