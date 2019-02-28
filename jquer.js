$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination:false,
    autoplay: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})