$(document).ready(function () {

    setting_slick(".js-header-info__slider");
    setting_slick(".js-sweet__slider");

    var browser_w = $(window).width();
    console.log(browser_w);
    if (browser_w < 768) {
        $(".header-sp").css("display", "block");
    } else {
        $(".header-sp").css("display", "none");
    }
    $('#js-menu-icon').click(function () {
        $(this).toggleClass('open');

        if ($("#js-menu-icon").hasClass("open")) {
            $(".js-navbar-sp").css("display", "flex");
            $("  #js-menu-icon").css("margin", "0px 0px 0 0");
        } else {
            $(".js-navbar-sp").css("display", "none");
            $("  #js-menu-icon").css("margin", "30px 30px 0 0");

        }
    });


});

function setting_slick(class_name) {
    $(class_name).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 8000,
        arrow: false,
        fade: true,
        dots: false,
        prevArrow: false,
        nextArrow: false,
    });
}