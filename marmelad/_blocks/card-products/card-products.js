// $('.label-elem-interface').on('click', function () {

//     if (!$(this).hasClass('js-color-pick-interface')) {
//         $('.js-color-pick').removeClass('is-active-color-pick');
//     }
    
// })

$('.js-color-pick').on('click', function () {
    $(this)
        .addClass('is-active-color-pick')
        .siblings()
        .removeClass('is-active-color-pick');
    $(this)
        .closest('.js-color-pick-interface')
        .find('input')
        .prop("checked", false);
});

$('.js-btn-card-products-add-to-cart').on('click', function () {
    $(this).hide();
    $('.js-checkout-order').show();
})

// $('.js-interface-radio').on('click', 'input', function () {
//     var $thisInput = $(this);
    
//     if (!$thisInput.attr('checked')) {
//         $thisInput.attr('checked', 'checked');
//         $($thisInput).prop("checked", true);
//     } else {
//         $thisInput.removeAttr('checked');
//         $($thisInput).prop("checked", false);
//     }
// });