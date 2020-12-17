var secondarySlider = new Splide('.js-card-preview-secondary-slider', {
    rewind: true,
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

// Create the main slider.
var primarySlider = new Splide('.js-card-preview-primary-slider', {
    type: 'fade',
    // heightRatio: 0.5,
    pagination: false,
    arrows: false,
    // cover: true,
});

// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync(secondarySlider).mount();