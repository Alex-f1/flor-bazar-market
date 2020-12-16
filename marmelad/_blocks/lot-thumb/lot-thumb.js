$('.lot-thumb').each(function () {
    var $thisElemLot = $(this),
        $thisBtnToCart = $thisElemLot.find('.js-add-to-cart'),
        $thisAmount = $thisElemLot.find('.amount');

    $thisBtnToCart.on('click', function (event) {
        event.preventDefault();
        
        var $thisElemBtn = $(this),
            $thisText = $thisElemBtn.find('span'),
            $thisDataText = $thisElemBtn.data('text');

        $thisText.html($thisDataText);
        $thisElemBtn.addClass('is-added-to-cart');
        $thisAmount.addClass('is-amount-show');
    });

});