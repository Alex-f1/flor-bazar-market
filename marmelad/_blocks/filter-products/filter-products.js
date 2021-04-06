$('.js-filter-name').on('click', function () {
    var $thisElem = $(this);
    $thisElem.toggleClass('is-active-name');
    $thisElem.siblings('.js-filter-options').stop().slideToggle();

    var el = document.querySelectorAll('.ss-container');
    for (var i = 0, len = el.length; i < len; i++) {
        SimpleScrollbar.initEl(el[i]);
    }

    $('.ss-container').trigger('mouseover')
});

$('.filter-products__item').each(function () {
    var $thisElem = $(this);
    var $thisElemInputsBlock = $thisElem.find('.filter-products__inputs');

    $thisElemInputsBlock.each(function () {
        var $thisElemInterface = $(this).find('.label-elem-interface')
        if ($thisElemInterface.length > 7) {
            $(this).closest($thisElemInputsBlock).addClass('ss-container')
        } else {
            $(this).closest($thisElemInputsBlock).css('height', 'auto')
        }
    });
});


$.fn.digitsFilter = function () {

    $(this).on('keydown', function (e) {

        // Allow: backspace, delete, tab, escape, enter and //.
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 || //, 110, 190
            // Allow: Ctrl+A, Command+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {

            return;
        }

        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}

$('.filter-products__range').each(function () {

    var $range = $(this);
    var $inputs = $range.closest('.filter-products__range-controlls').find('.from, .to');
    var $inputMin = $inputs.eq(0);
    var $inputMax = $inputs.eq(1);

    function setToInputsRangeData($_this, upd) {

        var from = $_this.data("from"),
            to = $_this.data("to"),
            postfix = $_this.data('postfix');

        if (upd) {
            $inputMin.val(postfix ? from + postfix : from);
            $inputMax.val(postfix ? to + postfix : to);
        }

    }

    $inputs.digitsFilter();

    $range.ionRangeSlider({
        onStart: function () {
            setToInputsRangeData($range, true);
        }
    });

    //--------------------------------------

    var updateInputs = true;

    $range.on("change", function () {

        setToInputsRangeData($range, updateInputs);
        updateInputs = true;

    });

    $inputs.on('change', function () {

        //accounting.formatNumber(4999.99, 0, " ");

        updateInputs = false;

        var inputMinVal = Number($inputMin.val().replace(/\D+/g, ''));
        var inputMaxVal = Number($inputMax.val().replace(/\D+/g, ''));
        var postfix = $range.data('postfix') || 0;

        if ($(this)[0] == $inputMin[0]) {

            if (inputMinVal > inputMaxVal) {
                $inputMin.val(inputMaxVal + postfix);
            }

            if (inputMinVal < $range.data('min')) {
                $inputMin.val($range.data('min') + postfix);
            }

        } else {

            if (inputMaxVal < inputMinVal) {
                $inputMax.val(inputMinVal + postfix);
            }

            if (inputMaxVal > $range.data('max')) {
                $inputMax.val($range.data('max') + postfix);
            }

        }

        $range.data('ionRangeSlider').update({
            from: $inputMin.val().replace(/\D+/g, ''),
            to: $inputMax.val().replace(/\D+/g, '')
        });
    });

});

if ($(window).width() <= 959) {
    $('.js-filter-head').on('click', function () {
        $(this).toggleClass('is-active-head');
        $('.js-filter-container').stop().slideToggle();
    })
} else {
    $('.js-filter-container').show();
}
