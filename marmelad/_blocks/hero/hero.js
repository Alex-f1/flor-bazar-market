if ($.exists('.js-hero-slider')) {
    new Splide('.js-hero-slider', {
        type: 'fade',
        rewind: true,
        pagination: false,
    }).mount();
}