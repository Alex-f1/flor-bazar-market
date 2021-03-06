if ($.exists('.js-card-preview-secondary-slider')) {

    
    var secondarySlider = new Splide('.js-card-preview-secondary-slider', {
        rewind: false,
        fixedWidth: 52,
        fixedHeight: 52,
        isNavigation: true,
        gap: 25,
        focus: 'center',
        pagination: false,
        breakpoints: {
            '479': {
                focus: false,
            }
        }
    }).mount();

    var primarySlider = new Splide('.js-card-preview-primary-slider', {
        type: 'fade',
        pagination: false,
        arrows: false,
    });

    primarySlider.sync(secondarySlider).mount();

    if ($('.card-product-preview__item-thumb').length < 2) {
        $('.card-product-preview__items-thumbs').remove();
    }

    $('.card-product-preview__slider-thumb-list').find('.card-product-preview__item').remove();
}