// Testimonail Section SLider Code
$('.reviews').owlCarousel({
    loop:true,
    margin:40,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2,
        },
        1000:{
            items:2,
            loop:false
        }
    }
});


// Partner Section SLider COde
$('.partner').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});