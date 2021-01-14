$('.js-btn-burger').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn-burger-is-active');

    $('.js-sidebar-menu').toggleClass('menu-is-active');
    $('.js-overlay-menu').toggleClass('overlay-is-active')
    $('html, body').toggleClass('is-scroll-hide')
});

$('.js-btn-mobile-search').on('click', function () {
    $('.mobile-panel__search .search').toggleClass('is-active-search');
});

$('.js-overlay-menu').on('click', function () {
    $(this).removeClass('overlay-is-active')
    $('.js-sidebar-menu').removeClass('menu-is-active');
    $('.js-btn-burger').removeClass('btn-burger-is-active');
});