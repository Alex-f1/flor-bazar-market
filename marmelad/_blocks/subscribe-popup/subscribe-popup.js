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

$('.js-btn-success-ok').on('click', function () {
    $('.remodal-close').trigger('click')
})


$('.js-subscribe-contact').on('click', function () {
    var $thisElem = $(this);

    var $inputContact = $('.js-input-contact');
    var $textareaComment = $('.js-textarea-comment');

    if ($thisElem.hasClass('subscribe-contact-other')) {
        $inputContact.hide();
        $textareaComment.find('textarea').attr('required', 'required')
        $inputContact.find('input').removeAttr('required');
    } else if ($thisElem.hasClass('subscribe-contact-email')) {
        $inputContact.find('input').attr('required', 'required');
        $inputContact.find('input').val('');
        $inputContact.show();
        $('.js-phone-mask').mask('+7 (000) 000-00-00').unmask();
        $inputContact.show().find('input').attr('type', 'email').removeClass('js-phone-mask');
        $textareaComment.find('textarea').removeAttr('required');
    } else if ($thisElem.hasClass('subscribe-contact-phone')) {
        $inputContact.find('input').attr('required', 'required');
        $inputContact.find('input').val('');
        $inputContact.show().find('input').addClass('js-phone-mask');
        $inputContact.show().find('input').attr('type', 'text')
        $inputContact.show();
        $('.js-phone-mask').mask('+7 (000) 000-00-00');
        $inputContact.find('input').val('+7');
        $inputContact.find('input').trigger("focus");   
        $textareaComment.find('textarea').removeAttr('required');
        console.log($inputContact.find('input').trigger("focus"))
    }

})

$('.js-phone-mask').on("keyup change", function (e) {
    if ($('.js-phone-mask').val().length < 18) {
        $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
    } else {
        $('.subscribe-popup__btn-send').removeAttr('disabled');
    }
})