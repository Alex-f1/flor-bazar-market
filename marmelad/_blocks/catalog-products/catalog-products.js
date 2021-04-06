$('.js-sorting-title').on('click', function () {
    var $this = $(this);
    $this.siblings('.js-sorting-dropdown').fadeToggle();
})

$('.js-sorting-list-item').on('click', function () {
    var $this = $(this),
        itemText = $this.text(),
        itemData = $this.data('sort');
    
    $('.js-sort-current').attr('data-carrent-sort', itemData);
    $('.js-sort-current').html(itemText);
    $('.js-sorting-dropdown').fadeOut();
});

$(document).on('click', function (e) {
    if ($(e.target).closest('.sorting-products').length) {
        return;
    }
    $('.js-sorting-dropdown').fadeOut();
});


$('.js-btn-show-more').on('click', function () {
    $(this).fadeOut();
});