if ($.exists('.js-shares-slider')) {

    new Splide('.js-shares-slider', {
        perPage: 4,
        autoplay: 3000,
        perMove: 1,
        rewind: false,
        pagination: false,
        drag: false,
        breakpoints: {
            1279: {
                perPage: 3,
            },
            959: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    }).mount();

}