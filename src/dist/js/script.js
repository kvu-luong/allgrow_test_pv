function setting_slick(s){$(s).slick({slidesToShow:1,slidesToScroll:1,infinite:!1,autoplay:!0,autoplaySpeed:8e3,arrow:!1,fade:!0,dots:!1,prevArrow:!1,nextArrow:!1})}$(document).ready(function(){setting_slick(".js-header-info__slider"),setting_slick(".js-sweet__slider");var s=$(window).width();console.log(s),s<768?$(".header-sp").css("display","block"):$(".header-sp").css("display","none"),$("#js-menu-icon").click(function(){$(this).toggleClass("open"),$("#js-menu-icon").hasClass("open")?($(".js-navbar-sp").css("display","flex"),$("  #js-menu-icon").css("margin","0 30px 0 0")):($(".js-navbar-sp").css("display","none"),$("  #js-menu-icon").css("margin","30px 30px 0 0"))})});