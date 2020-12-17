$.each($('.mobile-main-menu__nav ul').find('> li'), function (index, element) {

    if ($(element).find(' > ul').length) {

        var triggerIcon = ['<span class="trigger-arrow">', '</span>'].join('');

        var subMenuTrigger = $('<span class="sub-menu-trigger">' + triggerIcon + '</span>');

        $(element)
            .addClass('haschild')
            .append(subMenuTrigger);
    }
});

$('.mobile-main-menu__nav ul .sub-menu-trigger').on('click', function (event) {
    $(this).toggleClass('is-drop-down');
    if (!$(this).closest('li').find('>ul').length) {
        return;
    }
    event.preventDefault();
    $(this).closest('li').toggleClass('open').find('>ul').stop().slideToggle();
});	