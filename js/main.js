

$(document).ready(function(){
    /*--- Navbar Shrink ---*/
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar"),addclass("navber-shrink")
        }
        else{
            $(".navbar"),removeclass("navber-shrink")
        }
    });
    /*--- Video Popup ---*/

    /*--- Features Corousel ---*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*--- Screenshorts Corousel ---*/
    $('.screenshorts-corousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    /*--- Testimonials Corousel ---*/
    $('.testimonials-corosel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });


});