$(function () {
    $(window).on("load", function () {
        setTimeout(function () {
            var v = $(".news_detail:visible");
            if (!v.length) {
                $(".news_link").click();
            }
        }, 5000);
    });
});