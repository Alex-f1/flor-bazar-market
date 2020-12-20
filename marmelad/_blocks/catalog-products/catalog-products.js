$('.js-btn-sort').on('click', function (event) {
    event.preventDefault();
    $(this)
        .addClass('is-active-sorting')
        .siblings()
        .removeClass('is-active-sorting');
})

$('.js-btn-show-more').on('click', function () {
    $(this).fadeOut();
});