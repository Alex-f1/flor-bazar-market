if (window.matchMedia("(min-width: 768px)").matches) {
    if ($('.js-your-order').length) {
        var sidebar = new StickySidebar('.js-your-order', {
            topSpacing: 50,
            bottomSpacing: 50,
        });
    }
}