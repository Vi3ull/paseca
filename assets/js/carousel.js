"use strict";
(self["webpackChunkunithelp"] = self["webpackChunkunithelp"] || []).push([["/js/carousel"],{

/***/ "./src/components/carousel/_.js":
/*!**************************************!*\
  !*** ./src/components/carousel/_.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initCarousel)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _c_utils_throttle___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @c/utils/throttle/_ */ "./src/components/utils/throttle/_.js");


function initCarousel($carousel, options) {
  var init = function init() {
    var slidesPerView = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesCount");
    var carouselSlidesGap = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesGap");
    var $pagination = $carousel.querySelector(".carousel__pagination");
    if (slidesPerView != "auto") options.slidesPerView = slidesPerView;
    if (carouselSlidesGap != "0") options.spaceBetween = parseInt(carouselSlidesGap.replace(/\D+/g, ""));
    if ($pagination) options.pagination.el = $pagination;
    $carousel.classList.add("carousel--inited");
    var carousel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($carousel, options); // const group = document.querySelectorAll([data-id=`${carousel.el.dataset.id}`])
    // console.log(carousel);
    // thumbs: {
    //   swiper: thumbsSwiper
    // }
    // const swipeAllSliders = (index) => {
    //   carousel.slideTo(index);
    // }
    // carousel.on('slideChange', () => {
    //   console.log(carousel);
    //   swipeAllSliders(carousel.activeIndex)
    // });
  };

  init();
  var optimizedHandler = (0,_c_utils_throttle___WEBPACK_IMPORTED_MODULE_1__["default"])(init, 250);
  window.addEventListener("resize", optimizedHandler);
}
;

/***/ }),

/***/ "./src/components/utils/throttle/_.js":
/*!********************************************!*\
  !*** ./src/components/utils/throttle/_.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throttle)
/* harmony export */ });
function throttle(callee, timeout) {
  var timer = null;
  return function perform() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) return;
    timer = setTimeout(function () {
      callee.apply(void 0, args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

/***/ })

}]);