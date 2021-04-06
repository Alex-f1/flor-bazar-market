$('.lot-thumb').each(function () {
    var $thisElemLot = $(this),
        $thisBtnToCart = $thisElemLot.find('.js-add-to-cart'),
        $thisAmount = $thisElemLot.find('.amount');

    $thisBtnToCart.on('click', function (event) {
        event.preventDefault();
        
        var $thisElemBtn = $(this);

        $thisElemBtn
            .siblings('.lot-thumb__btn-to-cart--added-to-cart')
            .addClass('is-added-to-cart');
        
        $thisElemBtn.hide();

        $thisAmount.addClass('is-amount-show');
    });

});