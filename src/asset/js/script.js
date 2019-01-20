$(document).ready(function(){

    setting_slick(".js-header-info__slider");
    setting_slick(".js-sweet__slider");

        $('#js-menu-icon').click(function(){
            $(this).toggleClass('open');
            
            if($( "#js-menu-icon" ).hasClass( "open")){
                $(".js-navbar-sp").css("display","block");
            }else{
                $(".js-navbar-sp").css("display","none");
            }
        });
       
   
});
function setting_slick(class_name){
    $(class_name).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 8000,
        arrow:false,
        fade: true,
        dots: false,
        prevArrow: false,
        nextArrow: false,
    });
}
