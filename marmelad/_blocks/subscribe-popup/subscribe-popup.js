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
    }, 3000);
});