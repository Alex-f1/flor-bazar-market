if ($.exists('.js-hero-slider')) {
    new Splide('.js-hero-slider', {
        type: 'fade',
        autoplay: 4000,
        rewind: true,
        pagination: false,
    }).mount();
}