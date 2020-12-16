$('.js-btn-sort').on('click', function (event) {
    event.preventDefault();
    $(this)
        .addClass('is-active-sorting')
        .siblings()
        .removeClass('is-active-sorting');
})