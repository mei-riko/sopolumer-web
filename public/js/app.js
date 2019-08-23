/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)("a.scroll").click(function () {
        (0, _jquery2.default)("html, body").animate({
            scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    // Input mask
    if ((0, _jquery2.default)('.phone').length > 0) {
        (0, _jquery2.default)(".phone").inputmask({
            mask: "8 999 999 99 99",
            placeholder: " ",
            showMaskOnHover: true,
            onincomplete: function onincomplete() {
                (0, _jquery2.default)(this).closest("form").addClass('error-phone');
                (0, _jquery2.default)(this).addClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
            },
            oncomplete: function oncomplete() {
                (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
                (0, _jquery2.default)(this).removeClass('error');
                (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
            }
        });
    }
    (0, _jquery2.default)('input.phone').on('keydown', function (event) {
        if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
            event.preventDefault();
            (0, _jquery2.default)(this).blur();
            return false;
        }
    });

    // Index Slider
    if ((0, _jquery2.default)('.slider-block .slider-block__content').length > 0) {
        (0, _jquery2.default)('.slider-block .slider-block__content').slick({
            slidesToShow: 4,
            variableWidth: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }]
        });
    }
    // Brand Slider
    if ((0, _jquery2.default)('.slider-brand').length > 0) {
        (0, _jquery2.default)('.slider-brand').slick({
            slidesToShow: 5,
            centerMode: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 4000,
            prevArrow: '<svg class="slick-prev slick-prev_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#C5C5C5" d="M28.7,2.2c14.4,0,26,11.6,26,26s-11.6,26-26,26s-26-11.6-26-26S14.3,2.2,28.7,2.2z"/><g><polygon fill="#FFF" points="35.2,15.5 33.3,13.5 18.2,28.2 33.3,42.9 35.2,40.9 22.1,28.2 		"/></g></svg>',
            nextArrow: '<svg class="slick-next slick-next_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#c5c5c5" d="M28.7,54.2c-14.4,0-26-11.6-26-26s11.6-26,26-26s26,11.6,26,26S43.1,54.2,28.7,54.2z"/><g><polygon fill="#FFFFFF" points="22.2,40.9 24.1,42.9 39.2,28.2 24.1,13.5 22.2,15.5 35.3,28.2 		"/></g></svg>'
        });
    }
    // Masonry
    if ((0, _jquery2.default)('.post-row').length > 0) {
        (0, _jquery2.default)('.post-row').masonry({
            // указываем класс элемента являющегося блоком в нашей сетке
            itemSelector: '.post-col',
            // true - если у вас все блоки одинаковой ширины
            singleMode: true,
            // перестраивает блоки при изменении размеров окна
            isResizable: true,
            // анимируем перестроение блоков
            isAnimated: true,
            // опции анимации - очередь и продолжительность анимации
            animationOptions: {
                queue: false,
                duration: 500
            }
        });
    }

    // Post Slider
    if ((0, _jquery2.default)('.slider-for').length > 0) {
        (0, _jquery2.default)('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        (0, _jquery2.default)('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            prevArrow: '<svg class="slick-prev slick-prev_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#323232" d="M28.7,2.2c14.4,0,26,11.6,26,26s-11.6,26-26,26s-26-11.6-26-26S14.3,2.2,28.7,2.2z"/><g><polygon fill="#FFF" points="35.2,15.5 33.3,13.5 18.2,28.2 33.3,42.9 35.2,40.9 22.1,28.2 		"/></g></svg>',
            nextArrow: '<svg class="slick-next slick-next_svg" x="0px" y="0px" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><path fill="#323232" d="M28.7,54.2c-14.4,0-26-11.6-26-26s11.6-26,26-26s26,11.6,26,26S43.1,54.2,28.7,54.2z"/><g><polygon fill="#FFFFFF" points="22.2,40.9 24.1,42.9 39.2,28.2 24.1,13.5 22.2,15.5 35.3,28.2 		"/></g></svg>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // Navbar Mobile
    (0, _jquery2.default)(".header__nav#mobile-nav").on("click", function (e) {
        if (!(0, _jquery2.default)(".mobile-nav").hasClass("mobile-nav--active")) {
            (0, _jquery2.default)(".mobile-nav").addClass("mobile-nav--active");
            (0, _jquery2.default)(".mobile-nav").slideDown();
        } else {
            (0, _jquery2.default)(".mobile-nav").removeClass("mobile-nav--active");
            (0, _jquery2.default)(".mobile-nav").slideUp();
        }
    });
    (0, _jquery2.default)(document).mouseup(function (e) {
        // событие клика по веб-документу
        var dropdownActive = (0, _jquery2.default)(".mobile-nav.mobile-nav--active"); // элемент

        if (!dropdownActive.is(e.target) // клик был не по блоку
        && dropdownActive.has(e.target).length === 0) {
            // и не по его дочерним элементам
            dropdownActive.removeClass("mobile-nav--active");
            dropdownActive.slideUp();
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);