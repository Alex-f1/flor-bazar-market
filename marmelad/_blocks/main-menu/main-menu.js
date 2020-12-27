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