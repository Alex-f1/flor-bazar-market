$('.card-product-desc__tabs-head').on('click', '.js-btn-tab-card:not(.is-active-btn-tab-card)', function () {
    $(this)
        .addClass('is-active-btn-tab-card')
        .siblings()
        .removeClass('is-active-btn-tab-card');

    $('.card-product-desc__tabs-container')
        .find('.js-tab-content-card')
        .removeClass('is-active-tab-content')
        .hide().eq($(this).index()).fadeIn();
});