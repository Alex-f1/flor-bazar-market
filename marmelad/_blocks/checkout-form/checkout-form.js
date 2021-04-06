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

if ($('.js-payment-online').attr('checked', 'checked')) {
    $('.js-confirm-sms').fadeIn();
    $('.js-confirm-sms-note').fadeIn();
} else {
    $('.js-confirm-sms').fadeOut();
    $('.js-confirm-sms-note').fadeOut();
}

$('.js-payment-interface').on('click', function () {
    var thisInput = $(this).find('.js-payment-online');

    if (thisInput.attr('checked', 'checked') && thisInput.hasClass('js-payment-online')) {
        $('.js-confirm-sms').fadeIn();
        $('.js-confirm-sms-note').fadeIn();
    } else {
        $('.js-confirm-sms').fadeOut();
        $('.js-confirm-sms-note').fadeOut();
    }
});

$(document).on('click', function (e) {
    if ($(e.target).closest('.js-btn-your-order').length) {
        return;
    }

    $('.is-show-your-order').removeClass('is-show-your-order');
});