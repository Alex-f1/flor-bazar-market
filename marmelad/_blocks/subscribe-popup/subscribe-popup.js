$('.js-subscribe-popup').on('submit', function (event) {
    var $this = $(this);
    event.preventDefault();
    $this.closest('.subscribe-popup__section').addClass('success');
    $this.closest('.subscribe-popup').addClass('success-form').find('.popup-success').fadeIn();
    setTimeout(function () {
        $this.closest('.app').find('.remodal-overlay').css('display', 'none');
        $this.closest('.app').find('.remodal-wrapper').css('display', 'none');
        $this.closest('.subscribe-popup__section').removeClass('success');
        $this.closest('.subscribe-popup').removeClass('success-form').find('.popup-success').fadeOut();
        $('html').removeClass('remodal-is-locked');
        $('body').css('padding-right', 0);
    }, 5000);
});

$('.js-subscribe-contact').on('click', function () {
    var $thisElem = $(this);

    if ($thisElem.hasClass('subscribe-contact-other')) {
        $('.js-input-contact').hide().find('input').remove();
    } else if ($thisElem.hasClass('subscribe-contact-email')) {
        $('.js-input-contact').find('input').val('');
        $('.js-phone-mask').mask('+7 (000) 000-00-00').unmask();
        $('.js-input-contact').show().find('input').attr('type', 'email').removeClass('js-phone-mask');
    } else if ($thisElem.hasClass('subscribe-contact-phone')) {
        $('.js-input-contact').find('input').val('');
        $('.js-input-contact').show().find('input').addClass('js-phone-mask');
        $('.js-phone-mask').mask('+7 (000) 000-00-00');
        $('.js-input-contact').find('input').val('+7');
    }

})