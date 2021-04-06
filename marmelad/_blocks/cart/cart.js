$('.js-btn-remove-product').on('click', function () {
    var $this = $(this);
    
    $this.closest('.cart__item').fadeOut();

    

    setTimeout(function () {
        $this.closest('.cart__item').remove();
        if ($('.cart__item').length === 0) {
            $('.cart__empty').show();
            $('.cart__form').remove();
        }
    }, 500);
})

if ($('.cart__item').length === 0) {
    $('.cart__empty').show();
    $('.cart__form').remove();
}