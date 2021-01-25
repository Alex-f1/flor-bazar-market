$('.js-btn-your-order').on('click', function () {
    $('.js-your-order').toggleClass('is-show-your-order')
})


$(window).scroll(function () {
    if ($(this).scrollTop() > 780) {
        $('.js-btn-your-order').addClass('position-bottom');
    } else {
        $('.js-btn-your-order').removeClass('position-bottom');
    }
});


$('.js-phone-mask-checkout').mask('+7 (000) 000-00-00');