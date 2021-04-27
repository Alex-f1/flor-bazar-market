if ($(window).width() >= 1025) {
    $('.main-menu__nav > ul').flexMenu({
        showOnHover: false,
        linkText: "...",
        linkTitle: "",
        linkTextAll: "Меню",
        linkTitleAll: "Развернуть меню",
        popupClass: 'more-dropdown'
    });
}

setTimeout(function () {
    $('html').trigger('resize');
},100) 

$('.js-main-menu-has-img > a').mouseover(function () {
    $('.menu-level-main-img').addClass('is-hide-menu-level-main-img');
}).mouseout(function () {
    $('.menu-level-main-img').removeClass('is-hide-menu-level-main-img');
});



$('.has-level').mouseover(function () {

    var getThisMainImg = $(this).find('.menu-level-main-img').find('span');

    if (getThisMainImg.length > 1) {
        getThisMainImg.css('width', '45%')
    }

});