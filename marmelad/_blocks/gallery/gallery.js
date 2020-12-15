if ($.exists('.js-gallery-slider')) {

    new Splide( '.js-gallery-slider', {
        perPage: 3,
        rewind : true,
        pagination: false,
        breakpoints: {
            960: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    } ).mount();

}