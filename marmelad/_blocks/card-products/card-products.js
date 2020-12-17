$('.label-elem-interface').on('click', function () {
    if (!$(this).hasClass('js-color-pick-interface')) {
        $('.js-color-pick').removeClass('is-active-color-pick');
    }
})

$('.js-color-pick').on('click', function (e) {
    $(this)
        .addClass('is-active-color-pick')
        .siblings()
        .removeClass('is-active-color-pick');
});

$('.js-btn-card-products-add-to-cart').on('click', function () {
    $(this).hide();
    $('.js-checkout-order').show();
})

