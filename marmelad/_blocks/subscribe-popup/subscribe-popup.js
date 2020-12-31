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

    var $inputContactGroup = $('.js-input-contact');
    var $inputContact = $('.js-input-contact').find('input');
    var $textareaCommentGroup = $('.js-textarea-comment');

    if ($thisElem.hasClass('subscribe-contact-other')) {
        $inputContactGroup.hide();
        $textareaCommentGroup.find('textarea').attr('required', 'required').addClass('js-textarea-in')
        $inputContact.removeAttr('required');
        $inputContact.val('');
        $inputContactGroup.find('input').removeClass('js-email-mask');
        inputChange();
    } else if ($thisElem.hasClass('subscribe-contact-email')) {
        $inputContactGroup.show().find('input').addClass('js-email-mask');
        $inputContact.attr('required', 'required');
        $inputContact.val('');
        $('.js-phone-mask').mask('+7 (000) 000-00-00').unmask();
        $inputContactGroup.show().find('input').attr('type', 'email').removeClass('js-phone-mask');
        $textareaCommentGroup.find('textarea').removeAttr('required').removeClass('js-textarea-in');
        $inputContact.removeAttr('minlength');
        inputChange();
        $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
    } else if ($thisElem.hasClass('subscribe-contact-phone')) {
        $inputContact.attr('required', 'required');
        $inputContact.attr('minlength', 18);
        $inputContact.val('');
        $inputContactGroup.show().find('input').addClass('js-phone-mask');
        $inputContactGroup.show().find('input').attr('type', 'text')
        $inputContactGroup.show();
        $('.js-phone-mask').mask('+7 (000) 000-00-00');
        $inputContact.val('+7');
        $textareaCommentGroup.find('textarea').removeAttr('required').removeClass('js-textarea-in');
        $inputContactGroup.show().find('input').removeClass('js-email-mask');
        inputChange();
    }

});

function inputChange() {

    $('.js-input-contact .js-phone-mask').on('click', function () {
    
        $('.js-phone-mask').on("keyup change", function (e) {
            if ($(this).val().length < 18) {
                $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
            } else {
                $('.subscribe-popup__btn-send').removeAttr('disabled');
            }
        });
    });
    
    $('.js-textarea-comment .js-textarea-in').on('click', function () {
        $('.js-textarea-in').on("keyup change", function () {
            if ($(this).val().length < 1) {
                $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
            } else {
                $('.subscribe-popup__btn-send').removeAttr('disabled');
            }
        });
    });
    
    $('.js-input-contact .js-email-mask').on('click', function () {
        $('.js-email-mask').on("keyup change", function () {
            if ($(this).val().length < 1) {
                $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
            } else {
                $('.subscribe-popup__btn-send').removeAttr('disabled');
            }
        });
    });
}