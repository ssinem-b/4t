$(function () {

    $(".hi_txt").animate({ fontSize: 175, opacity: 1 }, 3000);

    $(window).on("load", function () {
        setTimeout(function () {
            window.location.href = "About.html";
        }, 5000);
    });
});