$('.js-btn-amount').on('click', function (event) {
    event.preventDefault();
    
    var amountBlock = $(this).closest('.amount'),
        amountValue = parseInt(amountBlock.find('input').val());

    if ($(this).hasClass('js-btn--minus') && amountValue != 1) {
        amountValue = amountValue - 1;
    } else if ($(this).hasClass('js-btn--plus')) {
        amountValue = amountValue + 1;
    }

    amountBlock.find('input').val(amountValue);
});