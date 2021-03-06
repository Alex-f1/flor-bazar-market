/* ^^^
 * Глобальные-вспомогательные функции
 * ========================================================================== */

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
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
  opts = Object.assign({
    tag: 'div',
    type: 'icons',
    class: '',
    mode: 'inline',
    url: '',
  }, opts);

  let external = '';
  let typeClass = '';

  if (opts.mode === 'external') {
    external = `${opts.url}/sprite.${opts.type}.svg`;
  }

  if (opts.type !== 'icons') {
    typeClass = ` svg-icon--${opts.type}`;
  }

  opts.class = opts.class ? ` ${opts.class}` : '';

  return `
    <${opts.tag} class="svg-icon svg-icon--${name}${typeClass}${opts.class}" aria-hidden="true" focusable="false">
      <svg class="svg-icon__link">
        <use xlink:href="${external}#${name}"></use>
      </svg>
    </${opts.tag}>
  `;
}

/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function() {

  'use strict';

  /**
   * определение существования элемента на странице
   */
  $.exists = (selector) => $(selector).length > 0;

  //=require ../_blocks/**/*.js


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
        tableBody.addClass('table-body')
      }
      
    }

    var el = document.querySelectorAll('.ss-container');
    for (var i = 0, len = el.length; i < len; i++) {
      SimpleScrollbar.initEl(el[i]);
    }
  })

  $('table').each(function () {
    $(this).wrap('<div class="table-wrp"></div>');
  })
  
});
