$(function () {

    $(".news_link").click(function (e) {
        e.preventDefault();
        $(".news_detail").toggle(1000);
    });


    $(".has_sub").hover(function () {
        $(".left_menu_overlay").show("1000");
        $(this).find(".left_link_sub").show("1000");
        $(this).find(".left_link_sub_line").show("1000");
    }, function () {
        $(".left_menu_overlay").hide();
        $(this).find(".left_link_sub").hide();
        $(this).find(".left_link_sub_line").hide();
    });

});