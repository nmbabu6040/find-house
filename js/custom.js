$(function(){
 
// Aos Animation
AOS.init();
   
// Property slider part
$('.propertise-slider').owlCarousel({
    loop:true,
    margin:30,
    stagePadding:0,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa-solid fa-long-arrow-left arrow-lft"></i>','<i class="fa-solid fa-long-arrow-right arrow-rigt"></i>'],
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:5,
        },
    },
});

// team slide by owl
$('.team_slider').owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 0,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fa-solid fa-long-arrow-left arrow-left"></i>','<i class="fa-solid fa-long-arrow-right arrow-right"></i>'],
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:4,
        },
        1200:{
            items:5,
        },
    },
});

// partner part carousel
$('.partner_slider').owlCarousel({
    loop:true,
    margin:50,
    stagePadding:15,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:6,
        },
        1200:{
            items:6,
        },
    },
});

// news and event slick slider
$('.news_part_slide').owlCarousel({
    loop:true,
    margin:20,
    stagePadding:15,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
        },

        600:{
            items:2,
        },
        1000:{
            items:3,
        },
        1200:{
            items:3,
        },
    },
});



});

