"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ^^^
 * Глобальные-вспомогательные функции
 * ========================================================================== */

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Возвращает HTML-код иконки из SVG-спрайта
 *
 * @param {String} name Название иконки из спрайта
 * @param {Object} opts Объект настроек для SVG-иконки
 *
 * @example SVG-иконка
 * getSVGSpriteIcon('some-icon', {
 *   tag: 'div',
 *   type: 'icons', // colored для подключения иконки из цветного спрайта
 *   class: '', // дополнительные классы для иконки
 *   mode: 'inline', // external для подключаемых спрайтов
 *   url: '', // путь до файла спрайта, необходим только для подключаемых спрайтов
 * });
 */

function getSVGSpriteIcon(name, opts) {
  opts = _extends({
    tag: 'div',
    type: 'icons',
    "class": '',
    mode: 'inline',
    url: ''
  }, opts);
  var external = '';
  var typeClass = '';

  if (opts.mode === 'external') {
    external = "".concat(opts.url, "/sprite.").concat(opts.type, ".svg");
  }

  if (opts.type !== 'icons') {
    typeClass = " svg-icon--".concat(opts.type);
  }

  opts["class"] = opts["class"] ? " ".concat(opts["class"]) : '';
  return "\n    <".concat(opts.tag, " class=\"svg-icon svg-icon--").concat(name).concat(typeClass).concat(opts["class"], "\" aria-hidden=\"true\" focusable=\"false\">\n      <svg class=\"svg-icon__link\">\n        <use xlink:href=\"").concat(external, "#").concat(name, "\"></use>\n      </svg>\n    </").concat(opts.tag, ">\n  ");
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $('.js-btn-amount').on('click', function (event) {
    event.preventDefault();
    var amountBlock = $(this).closest('.amount'),
        amountValue = parseInt(amountBlock.find('input').val());

    if ($(this).hasClass('js-btn--minus') && amountValue != 1) {
      amountValue = amountValue - 1;
    } else if ($(this).hasClass('js-btn--plus')) {
      amountValue = amountValue + 1;
    }

    amountBlock.find('input').val(amountValue);
  });
  $('.amount input').keyup(function (e) {
    if (this.value == "0" || this.value == "-" || this.value == "") {
      this.value = "1";
    } else {
      this.value = this.value.replace(/[^0-9-\.]/g, '');
    }
  });
  $('.card-product-desc__tabs-head').on('click', '.js-btn-tab-card:not(.is-active-btn-tab-card)', function () {
    $(this).addClass('is-active-btn-tab-card').siblings().removeClass('is-active-btn-tab-card');
    $('.card-product-desc__tabs-container').find('.js-tab-content-card').removeClass('is-active-tab-content').hide().eq($(this).index()).fadeIn();
  });

  if ($.exists('.js-card-preview-secondary-slider')) {
    var secondarySlider = new Splide('.js-card-preview-secondary-slider', {
      rewind: false,
      fixedWidth: 52,
      fixedHeight: 52,
      isNavigation: true,
      gap: 25,
      focus: 'center',
      pagination: false,
      breakpoints: {
        '479': {
          focus: false
        }
      }
    }).mount();
    var primarySlider = new Splide('.js-card-preview-primary-slider', {
      type: 'fade',
      pagination: false,
      arrows: false
    });
    primarySlider.sync(secondarySlider).mount();

    if ($('.card-product-preview__item-thumb').length < 2) {
      $('.card-product-preview__items-thumbs').remove();
    }
  } // $('.label-elem-interface').on('click', function () {
  //     if (!$(this).hasClass('js-color-pick-interface')) {
  //         $('.js-color-pick').removeClass('is-active-color-pick');
  //     }
  // })


  $('.js-color-pick').on('click', function () {
    $(this).addClass('is-active-color-pick').siblings().removeClass('is-active-color-pick');
    $(this).closest('.js-color-pick-interface').find('input').prop("checked", false);
  });
  $('.js-btn-card-products-add-to-cart').on('click', function () {
    $(this).hide();
    $('.js-checkout-order').show();
  }); // $('.js-interface-radio').on('click', 'input', function () {
  //     var $thisInput = $(this);
  //     if (!$thisInput.attr('checked')) {
  //         $thisInput.attr('checked', 'checked');
  //         $($thisInput).prop("checked", true);
  //     } else {
  //         $thisInput.removeAttr('checked');
  //         $($thisInput).prop("checked", false);
  //     }
  // });
  // var el = document.querySelectorAll('.cart-mini__container');
  // for (var i = 0, len = el.length; i < len; i++) {
  //     SimpleScrollbar.initEl(el[i]);
  // }

  $('.js-btn-remove-product').on('click', function () {
    var $this = $(this);
    $this.closest('.cart__item').fadeOut();
    setTimeout(function () {
      $this.closest('.cart__item').remove();

      if ($('.cart__item').length === 0) {
        $('.cart__empty').show();
        $('.cart__form').remove();
      }
    }, 500);
  });

  if ($('.cart__item').length === 0) {
    $('.cart__empty').show();
    $('.cart__form').remove();
  }

  $('.js-sorting-title').on('click', function () {
    var $this = $(this);
    $this.siblings('.js-sorting-dropdown').fadeToggle();
  });
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
  $('.js-btn-your-order').on('click', function () {
    $('.js-your-order').toggleClass('is-show-your-order');
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 780) {
      $('.js-btn-your-order').addClass('position-bottom');
    } else {
      $('.js-btn-your-order').removeClass('position-bottom');
    }
  });
  $('.js-phone-mask-checkout').mask('+7 (000) 000-00-00');

  if ($('.js-payment-online').attr('checked', 'checked')) {
    $('.js-confirm-sms').fadeIn();
    $('.js-confirm-sms-note').fadeIn();
  } else {
    $('.js-confirm-sms').fadeOut();
    $('.js-confirm-sms-note').fadeOut();
  }

  $('.js-payment-interface').on('click', function () {
    var thisInput = $(this).find('.js-payment-online');

    if (thisInput.attr('checked', 'checked') && thisInput.hasClass('js-payment-online')) {
      $('.js-confirm-sms').fadeIn();
      $('.js-confirm-sms-note').fadeIn();
    } else {
      $('.js-confirm-sms').fadeOut();
      $('.js-confirm-sms-note').fadeOut();
    }
  });
  $(document).on('click', function (e) {
    if ($(e.target).closest('.js-btn-your-order').length) {
      return;
    }

    $('.is-show-your-order').removeClass('is-show-your-order');
  });
  $('.js-filter-name').on('click', function () {
    var $thisElem = $(this);
    $thisElem.toggleClass('is-active-name');
    $thisElem.siblings('.js-filter-options').stop().slideToggle();
    var el = document.querySelectorAll('.ss-container');

    for (var i = 0, len = el.length; i < len; i++) {
      SimpleScrollbar.initEl(el[i]);
    }

    $('.ss-container').trigger('mouseover');
  });
  $('.filter-products__item').each(function () {
    var $thisElem = $(this);
    var $thisElemInputsBlock = $thisElem.find('.filter-products__inputs');
    $thisElemInputsBlock.each(function () {
      var $thisElemInterface = $(this).find('.label-elem-interface');

      if ($thisElemInterface.length > 7) {
        $(this).closest($thisElemInputsBlock).addClass('ss-container');
      } else {
        $(this).closest($thisElemInputsBlock).css('height', 'auto');
      }
    });
  });

  $.fn.digitsFilter = function () {
    $(this).on('keydown', function (e) {
      // Allow: backspace, delete, tab, escape, enter and //.
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 || //, 110, 190
      // Allow: Ctrl+A, Command+A
      e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) || // Allow: home, end, left, right, down, up
      e.keyCode >= 35 && e.keyCode <= 40) {
        return;
      } // Ensure that it is a number and stop the keypress


      if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    });
  };

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
      onStart: function onStart() {
        setToInputsRangeData($range, true);
      }
    }); //--------------------------------------

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
    });
  } else {
    $('.js-filter-container').show();
  }

  if ($.exists('.js-gallery-slider')) {
    new Splide('.js-gallery-slider', {
      perPage: 3,
      autoplay: 3000,
      perMove: 1,
      rewind: false,
      pagination: false,
      breakpoints: {
        960: {
          perPage: 2
        },
        767: {
          perPage: 1
        }
      }
    }).mount();
  }

  if ($.exists('.js-hero-slider')) {
    new Splide('.js-hero-slider', {
      type: 'fade',
      autoplay: 4000,
      rewind: true,
      pagination: false
    }).mount();
  }

  $('.lot-thumb').each(function () {
    var $thisElemLot = $(this),
        $thisBtnToCart = $thisElemLot.find('.js-add-to-cart'),
        $thisAmount = $thisElemLot.find('.amount');
    $thisBtnToCart.on('click', function (event) {
      event.preventDefault();
      var $thisElemBtn = $(this);
      $thisElemBtn.siblings('.lot-thumb__btn-to-cart--added-to-cart').addClass('is-added-to-cart');
      $thisElemBtn.hide();
      $thisAmount.addClass('is-amount-show');
    });
  });

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
  }, 100);
  $('.js-main-menu-has-img > a').mouseover(function () {
    $('.menu-level-main-img').addClass('is-hide-menu-level-main-img');
  }).mouseout(function () {
    $('.menu-level-main-img').removeClass('is-hide-menu-level-main-img');
  });
  $.each($('.mobile-main-menu__nav ul').find('> li'), function (index, element) {
    if ($(element).find(' > ul').length) {
      var triggerIcon = ['<span class="trigger-arrow">', '</span>'].join('');
      var subMenuTrigger = $('<span class="sub-menu-trigger">' + triggerIcon + '</span>');
      $(element).addClass('haschild').append(subMenuTrigger);
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
  $('.js-btn-burger').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('btn-burger-is-active');
    $('.js-sidebar-menu').toggleClass('menu-is-active');
    $('.js-overlay-menu').toggleClass('overlay-is-active');
    $('html, body').toggleClass('is-scroll-hide');
  });
  $('.js-btn-mobile-search').on('click', function () {
    $('.mobile-panel__search .search').toggleClass('is-active-search');
  });
  $('.js-overlay-menu').on('click', function () {
    $(this).removeClass('overlay-is-active');
    $('.js-sidebar-menu').removeClass('menu-is-active');
    $('.js-btn-burger').removeClass('btn-burger-is-active');
    $('html, body').removeClass('is-scroll-hide');
  });
  var PAGE = $('html, body');
  var pageScroller = $('.page-scroller');
  var inMemoryClass = 'page-scroller--memorized';
  var isVisibleClass = 'page-scroller--visible';
  var enabledOffset = 60;
  var pageYOffset = 0;
  var inMemory = false;

  function resetPageScroller() {
    setTimeout(function () {
      if (window.pageYOffset > enabledOffset) {
        pageScroller.addClass(isVisibleClass);
      } else if (!pageScroller.hasClass(inMemoryClass)) {
        pageScroller.removeClass(isVisibleClass);
      }
    }, 150);

    if (!inMemory) {
      pageYOffset = 0;
      pageScroller.removeClass(inMemoryClass);
    }

    inMemory = false;
  }

  if (pageScroller.length > 0) {
    window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
      passive: true
    } : false);
    pageScroller.on('click', function (event) {
      event.preventDefault();
      window.removeEventListener('scroll', resetPageScroller);

      if (window.pageYOffset > 0 && pageYOffset === 0) {
        inMemory = true;
        pageYOffset = window.pageYOffset;
        pageScroller.addClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: 0
        }, 500, 'swing', function () {
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      } else {
        pageScroller.removeClass(inMemoryClass);
        PAGE.stop().animate({
          scrollTop: pageYOffset
        }, 500, 'swing', function () {
          pageYOffset = 0;
          window.addEventListener('scroll', resetPageScroller, window.supportsPassive ? {
            passive: true
          } : false);
        });
      }
    });
  }

  if ($.exists('.js-shares-slider')) {
    new Splide('.js-shares-slider', {
      perPage: 4,
      autoplay: 3000,
      perMove: 1,
      rewind: false,
      pagination: false,
      drag: false,
      breakpoints: {
        1279: {
          perPage: 3
        },
        959: {
          perPage: 2
        },
        767: {
          perPage: 1
        }
      }
    }).mount();
  }

  $('.js-subscribe-popup').on('submit', function (event) {
    var $this = $(this);
    event.preventDefault();
    $this.closest('.subscribe-popup__section').addClass('success');
    $this.closest('.subscribe-popup').addClass('success-form').find('.popup-success').fadeIn();
    setTimeout(function () {
      $this.closest('.app').find('.remodal-overlay').css('display', 'none');
      $this.closest('.app').find('.remodal-wrapper').css('display', 'none');
      $this.closest('.subscribe-popup__section').removeClass('success');
      $this.closest('.subscribe-popup').removeClass('success-form').find('.popup-success').fadeOut();
      $('html').removeClass('remodal-is-locked');
      $('body').css('padding-right', 0);
    }, 5000);
  });
  $('.js-btn-success-ok').on('click', function () {
    $('.remodal-close').trigger('click');
  });
  $('.js-subscribe-contact').on('click', function () {
    var $thisElem = $(this);
    var $inputContactGroup = $('.js-input-contact');
    var $inputContact = $('.js-input-contact').find('input');
    var $textareaCommentGroup = $('.js-textarea-comment');

    if ($thisElem.hasClass('subscribe-contact-other')) {
      $inputContactGroup.hide();
      $textareaCommentGroup.find('textarea').attr('required', 'required').addClass('js-textarea-in');
      $inputContact.removeAttr('required');
      $inputContact.val('');
      $inputContactGroup.find('input').removeClass('js-email-mask');
      inputChange();
    } else if ($thisElem.hasClass('subscribe-contact-email')) {
      $inputContactGroup.show().find('input').addClass('js-email-mask');
      $inputContact.attr('required', 'required');
      $inputContact.val('');
      $('.js-phone-mask').mask('+7 (000) 000-00-00').unmask();
      $inputContactGroup.show().find('input').attr('type', 'email').removeClass('js-phone-mask');
      $textareaCommentGroup.find('textarea').removeAttr('required').removeClass('js-textarea-in');
      $inputContact.removeAttr('minlength');
      inputChange();
      $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
    } else if ($thisElem.hasClass('subscribe-contact-phone')) {
      $inputContact.attr('required', 'required');
      $inputContact.attr('minlength', 18);
      $inputContact.val('');
      $inputContactGroup.show().find('input').addClass('js-phone-mask');
      $inputContactGroup.show().find('input').attr('type', 'text');
      $inputContactGroup.show();
      $('.js-phone-mask').mask('+7 (000) 000-00-00');
      $inputContact.val('+7');
      $textareaCommentGroup.find('textarea').removeAttr('required').removeClass('js-textarea-in');
      $inputContactGroup.show().find('input').removeClass('js-email-mask');
      inputChange();
    }
  });

  function inputChange() {
    $('.js-input-contact .js-phone-mask').on('click', function () {
      $('.js-phone-mask').on("keyup change", function (e) {
        if ($(this).val().length < 18) {
          $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
        } else {
          $('.subscribe-popup__btn-send').removeAttr('disabled');
        }
      });
    });
    $('.js-textarea-comment .js-textarea-in').on('click', function () {
      $('.js-textarea-in').on("keyup change", function () {
        if ($(this).val().length < 1) {
          $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
        } else {
          $('.subscribe-popup__btn-send').removeAttr('disabled');
        }
      });
    });
    $('.js-input-contact .js-email-mask').on('click', function () {
      $('.js-email-mask').on("keyup change", function () {
        if ($(this).val().length < 1) {
          $('.subscribe-popup__btn-send').attr('disabled', 'disabled');
        } else {
          $('.subscribe-popup__btn-send').removeAttr('disabled');
        }
      });
    });
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    if ($('.js-your-order').length) {
      var sidebar = new StickySidebar('.js-your-order', {
        topSpacing: 50,
        bottomSpacing: 50
      });
    }
  }

  var btnUp = $('.js-btn-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      btnUp.fadeIn();
    } else {
      btnUp.fadeOut();
    }
  });
  btnUp.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  $('input[type=checkbox], input[type=radio], select').styler();
  $('.table-style').each(function () {
    var tableBody = $(this).find('tbody').addClass('ss-container');

    if ($(window).width() >= 1024) {
      if (tableBody.height() > 529) {
        tableBody.addClass('table-body');
      }
    }

    var el = document.querySelectorAll('.ss-container');

    for (var i = 0, len = el.length; i < len; i++) {
      SimpleScrollbar.initEl(el[i]);
    }
  });
  $('table').each(function () {
    $(this).wrap('<div class="table-wrp"></div>');
  });
});