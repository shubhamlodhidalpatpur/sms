(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ "./node_modules/prismjs/themes/prism-tomorrow.css");
/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCollapse"],
    Prism: vue_prism_component__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  inheritAttrs: false,
  props: {
    codeLanguage: {
      "default": 'markup',
      type: String
    }
  },
  data: function data() {
    return {
      parentID: '',
      code_visible: false
    };
  },
  computed: {
    cardAttrs: function cardAttrs() {
      var cardAttrs = JSON.parse(JSON.stringify(this.$attrs));
      delete cardAttrs.title;
      delete cardAttrs['sub-title'];
      return cardAttrs;
    }
  },
  created: function created() {
    this.parentID = String(Math.floor(Math.random() * 10) + 1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _CarouselBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselBasic.vue */ "./resources/js/src/views/components/carousel/CarouselBasic.vue");
/* harmony import */ var _CarouselCaption_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselCaption.vue */ "./resources/js/src/views/components/carousel/CarouselCaption.vue");
/* harmony import */ var _CarouselCrossFade_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarouselCrossFade.vue */ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue");
/* harmony import */ var _CarouselInterval_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CarouselInterval.vue */ "./resources/js/src/views/components/carousel/CarouselInterval.vue");
/* harmony import */ var _CarouselKeyboard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CarouselKeyboard.vue */ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue");
/* harmony import */ var _CarouselProgrammaticSlide_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselProgrammaticSlide.vue */ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue");
/* harmony import */ var _CarouselVsupport_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CarouselVsupport.vue */ "./resources/js/src/views/components/carousel/CarouselVsupport.vue");
/* harmony import */ var _CarouselPause_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CarouselPause.vue */ "./resources/js/src/views/components/carousel/CarouselPause.vue");
/* harmony import */ var _CarouselWrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CarouselWrap.vue */ "./resources/js/src/views/components/carousel/CarouselWrap.vue");










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    CarouselCaption: _CarouselCaption_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CarouselBasic: _CarouselBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CarouselCrossFade: _CarouselCrossFade_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CarouselInterval: _CarouselInterval_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CarouselKeyboard: _CarouselKeyboard_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CarouselProgrammaticaSlide: _CarouselProgrammaticSlide_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CarouselVsupport: _CarouselVsupport_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CarouselPause: _CarouselPause_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    CarouselWrap: _CarouselWrap_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeCarouselBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeCarouselBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeCarouselCaption: _code__WEBPACK_IMPORTED_MODULE_2__["codeCarouselCaption"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeCarouselCrossfade: _code__WEBPACK_IMPORTED_MODULE_2__["codeCarouselCrossfade"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeCarouselInterval: _code__WEBPACK_IMPORTED_MODULE_2__["codeCarouselInterval"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeKeyboard: _code__WEBPACK_IMPORTED_MODULE_2__["codeKeyboard"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codePause: _code__WEBPACK_IMPORTED_MODULE_2__["codePause"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarouselSlide"],
    BButtonGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButtonGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      status: false,
      codeProgrammaticSlide: _code__WEBPACK_IMPORTED_MODULE_3__["codeProgrammaticSlide"]
    };
  },
  methods: {
    prev: function prev() {
      if (!this.status) {
        this.$refs.myCarousel.prev();
      }
    },
    next: function next() {
      if (!this.status) {
        this.$refs.myCarousel.next();
      }
    },
    start: function start() {
      this.status = !this.status;
      if (this.status) {
        this.$refs.myCarousel.pause();
      } else {
        this.$refs.myCarousel.start();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      slide: 0,
      sliding: null,
      codeVsupport: _code__WEBPACK_IMPORTED_MODULE_2__["codeVsupport"]
    };
  },
  methods: {
    onSlideStart: function onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd() {
      this.sliding = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/carousel/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCarouselSlide"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeWrap: _code__WEBPACK_IMPORTED_MODULE_2__["codeWrap"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card", _vm._g(_vm._b({
    attrs: {
      "no-body": ""
    }
  }, "b-card", _vm.cardAttrs, false), _vm.$listeners), [_c("div", {
    staticClass: "card-header"
  }, [_c("div", [_c("b-card-title", [_vm._v(_vm._s(_vm.$attrs.title))]), _vm._v(" "), _vm.$attrs["sub-title"] ? _c("b-card-sub-title", [_vm._v("\n        " + _vm._s(_vm.$attrs["sub-title"]) + "\n      ")]) : _vm._e()], 1), _vm._v(" "), _c("i", {
    staticClass: "code-toggler feather icon-code cursor-pointer",
    attrs: {
      "aria-expanded": !_vm.code_visible ? "true" : "false",
      "aria-controls": _vm.parentID
    },
    on: {
      click: function click($event) {
        _vm.code_visible = !_vm.code_visible;
      }
    }
  })]), _vm._v(" "), _vm.$attrs["no-body"] !== undefined ? [_vm._t("default"), _vm._v(" "), _c("b-collapse", {
    staticClass: "card-code",
    attrs: {
      id: _vm.parentID,
      visible: _vm.code_visible
    },
    model: {
      value: _vm.code_visible,
      callback: function callback($$v) {
        _vm.code_visible = $$v;
      },
      expression: "code_visible"
    }
  }, [_c("b-card-body", [_c("prism", {
    attrs: {
      language: _vm.codeLanguage
    }
  }, [_vm._t("code")], 2)], 1)], 1)] : _c("b-card-body", [_vm._t("default"), _vm._v(" "), _c("b-collapse", {
    staticClass: "card-code",
    attrs: {
      id: _vm.parentID,
      visible: _vm.code_visible
    },
    model: {
      value: _vm.code_visible,
      callback: function callback($$v) {
        _vm.code_visible = $$v;
      },
      expression: "code_visible"
    }
  }, [_c("div", {
    staticClass: "p-1"
  }), _vm._v(" "), _c("prism", {
    attrs: {
      language: _vm.codeLanguage
    }
  }, [_vm._t("code")], 2)], 1)], 2)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-row", {
    staticClass: "match-height"
  }, [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-basic")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-caption")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-interval")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-pause")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-wrap")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-cross-fade")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-keyboard")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-vsupport")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("carousel-programmatica-slide")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Basic Example"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeCarouselBasic) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("\n    The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with\n    a series of images, text, or custom markup.\n  ")]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-example-generic",
      controls: "",
      indicators: ""
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/01.jpg */ "./resources/js/src/assets/images/slider/01.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556 ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Optional captions"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeCarouselCaption) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Add captions to your slides easily with the prop")]), _vm._v(" "), _c("code", [_vm._v("caption")]), _vm._v(" "), _c("span", [_vm._v("element within any")]), _vm._v(" "), _c("code", [_vm._v("<b-carousel-slide>")]), _vm._v(".\n  ")]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-caption",
      controls: "",
      indicators: ""
    }
  }, [_c("b-carousel-slide", {
    staticClass: "card-img-overlay",
    attrs: {
      "caption-html": "<span class='text-white'>First Slide Label</span>",
      text: "Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.",
      "img-src": __webpack_require__(/*! @/assets/images/slider/08.jpg */ "./resources/js/src/assets/images/slider/08.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    staticClass: "card-img-overlay",
    attrs: {
      "caption-html": "<span class='text-white'>Second Slide Label</span>",
      text: "Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.",
      "img-src": __webpack_require__(/*! @/assets/images/slider/09.jpg */ "./resources/js/src/assets/images/slider/09.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    staticClass: "card-img-overlay",
    attrs: {
      "caption-html": "<span class='text-white'>Third Slide Label</span>",
      text: "Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing.",
      "img-src": __webpack_require__(/*! @/assets/images/slider/10.jpg */ "./resources/js/src/assets/images/slider/10.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Crossfade"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeCarouselCrossfade) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Set the")]), _vm._v(" "), _c("code", [_vm._v("<b-carousel>fade")]), _vm._v(" "), _c("span", [_vm._v("prop to")]), _vm._v(" "), _c("code", [_vm._v("true")]), _vm._v(" "), _c("span", [_vm._v("to animate slides with a fade transition instead of the default slide animation.")])]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-crossfade",
      controls: "",
      indicators: "",
      fade: ""
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/01.jpg */ "./resources/js/src/assets/images/slider/01.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Carousel Interval"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeCarouselInterval) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Carousel defaults to an ")]), _vm._v(" "), _c("code", [_vm._v("interval")]), _vm._v(" "), _c("span", [_vm._v(" of 5000ms (5 seconds).")])]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-interval",
      controls: "",
      indicators: "",
      interval: 400
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/01.jpg */ "./resources/js/src/assets/images/slider/01.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Keyboard Option"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeKeyboard) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("\n    Whether the carousel should react to keyboard events. User prop "), _c("code", [_vm._v("controls")]), _vm._v(" for keyboard event.\n  ")]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-interval",
      controls: "",
      indicators: "",
      interval: 400
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/07.jpg */ "./resources/js/src/assets/images/slider/07.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/08.jpg */ "./resources/js/src/assets/images/slider/08.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/09.jpg */ "./resources/js/src/assets/images/slider/09.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134 ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Pause Option"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codePause) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To disable this feature, set the")]), _vm._v(" "), _c("code", [_vm._v("no-hover-pause")]), _vm._v(" "), _c("span", [_vm._v(" prop on.")])]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-interval",
      "no-hover-pause": "",
      controls: "",
      indicators: "",
      interval: 5000
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/05.jpg */ "./resources/js/src/assets/images/slider/05.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/06.jpg */ "./resources/js/src/assets/images/slider/06.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Programmatic slide control"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeProgrammaticSlide) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("The ")]), _vm._v(" "), _c("code", [_vm._v("<b-carousel>")]), _vm._v(" "), _c("span", [_vm._v(" instance provides several public methods for controlling sliding:")]), _vm._v(" "), _c("code", [_vm._v("setSlide(index), next(), prev(), pause(), start()")])]), _vm._v(" "), _c("div", [_c("b-carousel", {
    ref: "myCarousel",
    attrs: {
      id: "carousel-1",
      interval: 4000,
      controls: "",
      indicators: "",
      background: "#ababab",
      "img-width": "924",
      "img-height": "380"
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      "img-src": __webpack_require__(/*! @/assets/images/slider/01.jpg */ "./resources/js/src/assets/images/slider/01.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    scopedSlots: _vm._u([{
      key: "img",
      fn: function fn() {
        return [_c("img", {
          staticClass: "d-block img-fluid w-100",
          attrs: {
            width: "924",
            height: "380",
            src: __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg"),
            alt: "image slot"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center justify-content-center mt-1"
  }, [_c("b-button-group", [_c("b-button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple.400",
      value: "rgba(113, 102, 240, 0.15)",
      expression: "'rgba(113, 102, 240, 0.15)'",
      modifiers: {
        400: true
      }
    }],
    attrs: {
      variant: "outline-primary"
    },
    on: {
      click: _vm.prev
    }
  }, [_vm._v("\n          Pre\n        ")]), _vm._v(" "), _c("b-button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple.400",
      value: "rgba(113, 102, 240, 0.15)",
      expression: "'rgba(113, 102, 240, 0.15)'",
      modifiers: {
        400: true
      }
    }],
    attrs: {
      variant: "outline-primary"
    },
    on: {
      click: _vm.start
    }
  }, [_vm._v("\n          " + _vm._s(_vm.status ? "Start" : "Pause") + "\n        ")]), _vm._v(" "), _c("b-button", {
    directives: [{
      name: "ripple",
      rawName: "v-ripple.400",
      value: "rgba(113, 102, 240, 0.15)",
      expression: "'rgba(113, 102, 240, 0.15)'",
      modifiers: {
        400: true
      }
    }],
    attrs: {
      variant: "outline-primary"
    },
    on: {
      click: _vm.next
    }
  }, [_vm._v("\n          Next\n        ")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "v-model support"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeVsupport) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Programmatically control which slide is showing via ")]), _vm._v(" "), _c("code", [_vm._v("v-model")]), _vm._v(" "), _c("span", [_vm._v(" (which binds to the ")]), _vm._v(" "), _c("code", [_vm._v("value")]), _c("span", [_vm._v(" prop).")])]), _vm._v(" "), _c("div", [_c("b-carousel", {
    attrs: {
      id: "carousel-1",
      interval: 4000,
      controls: "",
      indicators: "",
      background: "#ababab",
      "img-width": "924",
      "img-height": "380"
    },
    on: {
      "sliding-start": _vm.onSlideStart,
      "sliding-end": _vm.onSlideEnd
    },
    model: {
      value: _vm.slide,
      callback: function callback($$v) {
        _vm.slide = $$v;
      },
      expression: "slide"
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      "img-src": __webpack_require__(/*! @/assets/images/slider/05.jpg */ "./resources/js/src/assets/images/slider/05.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/06.jpg */ "./resources/js/src/assets/images/slider/06.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    scopedSlots: _vm._u([{
      key: "img",
      fn: function fn() {
        return [_c("img", {
          staticClass: "d-block img-fluid w-100",
          attrs: {
            width: "924",
            height: "380",
            src: __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg"),
            alt: "image slot"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("b-card-text", {
    staticClass: "mt-1 mb-0"
  }, [_c("strong", [_vm._v("Slide #:")]), _vm._v(" " + _vm._s(_vm.slide) + " "), _c("strong", [_vm._v("Sliding:")]), _vm._v(" " + _vm._s(_vm.sliding) + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card-code", {
    attrs: {
      title: "Wrap Option"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeWrap) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To disable carousel slide wrapping, set the ")]), _vm._v(" "), _c("code", [_vm._v("no-wrap")]), _vm._v(" "), _c("span", [_vm._v(" prop to true.")])]), _vm._v(" "), _c("b-carousel", {
    attrs: {
      id: "carousel-interval",
      "no-wrap": "",
      controls: "",
      indicators: "",
      interval: 400
    }
  }, [_c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/01.jpg */ "./resources/js/src/assets/images/slider/01.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg")
    }
  }), _vm._v(" "), _c("b-carousel-slide", {
    attrs: {
      "img-src": __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg")
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-code[data-v-246ffd4f] {\n  /* width */\n  /* Track */\n  /* Handle */\n  /* Handle on hover */\n}\n.card-code pre[class*=language-][data-v-246ffd4f] {\n  max-height: 350px;\n}\n[dir] .card-code pre[class*=language-][data-v-246ffd4f] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-246ffd4f] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-246ffd4f] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-246ffd4f] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-246ffd4f] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-246ffd4f] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-246ffd4f] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-246ffd4f] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-246ffd4f] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-246ffd4f] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-246ffd4f] {\n  background: red;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/BCardCode.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/BCardCode.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true");
/* harmony import */ var _BCardCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BCardCode.vue?vue&type=script&lang=js */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BCardCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "246ffd4f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/b-card-code/BCardCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BCardCode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=style&index=0&id=246ffd4f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_style_index_0_id_246ffd4f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/b-card-code/BCardCode.vue?vue&type=template&id=246ffd4f&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BCardCode_vue_vue_type_template_id_246ffd4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/components/b-card-code/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/components/b-card-code/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/src/assets/images/slider/01.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/01.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/slider/01.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/05.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/05.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/slider/05.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/07.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/07.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/slider/07.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/08.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/08.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/slider/08.jpg";

/***/ }),

/***/ "./resources/js/src/views/components/carousel/Carousel.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/Carousel.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=1f29a5a0 */ "./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0 ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=1f29a5a0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/Carousel.vue?vue&type=template&id=1f29a5a0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_1f29a5a0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselBasic.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselBasic.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselBasic.vue?vue&type=template&id=458d919e */ "./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e");
/* harmony import */ var _CarouselBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselBasic.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselBasic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselBasic.vue?vue&type=template&id=458d919e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselBasic.vue?vue&type=template&id=458d919e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselBasic_vue_vue_type_template_id_458d919e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCaption.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCaption.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselCaption.vue?vue&type=template&id=12f3a556 */ "./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556");
/* harmony import */ var _CarouselCaption_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselCaption.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselCaption_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselCaption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCaption_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselCaption.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCaption_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556 ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselCaption.vue?vue&type=template&id=12f3a556 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCaption.vue?vue&type=template&id=12f3a556");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCaption_vue_vue_type_template_id_12f3a556__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCrossFade.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselCrossFade.vue?vue&type=template&id=1d826568 */ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568");
/* harmony import */ var _CarouselCrossFade_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselCrossFade.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselCrossFade_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselCrossFade.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCrossFade_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselCrossFade.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCrossFade_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568 ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselCrossFade.vue?vue&type=template&id=1d826568 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselCrossFade.vue?vue&type=template&id=1d826568");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselCrossFade_vue_vue_type_template_id_1d826568__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselInterval.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselInterval.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselInterval.vue?vue&type=template&id=30bb6c05 */ "./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05");
/* harmony import */ var _CarouselInterval_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselInterval.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselInterval_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselInterval.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselInterval_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselInterval.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselInterval_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05 ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselInterval.vue?vue&type=template&id=30bb6c05 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselInterval.vue?vue&type=template&id=30bb6c05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselInterval_vue_vue_type_template_id_30bb6c05__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselKeyboard.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2 */ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2");
/* harmony import */ var _CarouselKeyboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselKeyboard.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselKeyboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselKeyboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselKeyboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselKeyboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselKeyboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2 ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselKeyboard.vue?vue&type=template&id=ca7ccbb2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselKeyboard_vue_vue_type_template_id_ca7ccbb2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselPause.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselPause.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselPause.vue?vue&type=template&id=47768134 */ "./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134");
/* harmony import */ var _CarouselPause_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselPause.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselPause_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselPause.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselPause_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselPause.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselPause_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134 ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselPause.vue?vue&type=template&id=47768134 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselPause.vue?vue&type=template&id=47768134");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselPause_vue_vue_type_template_id_47768134__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb */ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb");
/* harmony import */ var _CarouselProgrammaticSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselProgrammaticSlide.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselProgrammaticSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselProgrammaticSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselProgrammaticSlide.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselProgrammaticSlide_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselProgrammaticSlide.vue?vue&type=template&id=1ed653cb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselProgrammaticSlide_vue_vue_type_template_id_1ed653cb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselVsupport.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselVsupport.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselVsupport.vue?vue&type=template&id=a850a84e */ "./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e");
/* harmony import */ var _CarouselVsupport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselVsupport.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselVsupport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselVsupport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselVsupport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselVsupport.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselVsupport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselVsupport.vue?vue&type=template&id=a850a84e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselVsupport.vue?vue&type=template&id=a850a84e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselVsupport_vue_vue_type_template_id_a850a84e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselWrap.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselWrap.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselWrap.vue?vue&type=template&id=2ea5e10a */ "./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a");
/* harmony import */ var _CarouselWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselWrap.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/carousel/CarouselWrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselWrap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselWrap.vue?vue&type=template&id=2ea5e10a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/carousel/CarouselWrap.vue?vue&type=template&id=2ea5e10a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselWrap_vue_vue_type_template_id_2ea5e10a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/carousel/code.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/components/carousel/code.js ***!
  \************************************************************/
/*! exports provided: codeCarouselBasic, codeCarouselCaption, codeCarouselCrossfade, codeCarouselInterval, codeVsupport, codeProgrammaticSlide, codeWrap, codePause, codeKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCarouselBasic", function() { return codeCarouselBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCarouselCaption", function() { return codeCarouselCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCarouselCrossfade", function() { return codeCarouselCrossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeCarouselInterval", function() { return codeCarouselInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVsupport", function() { return codeVsupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeProgrammaticSlide", function() { return codeProgrammaticSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeWrap", function() { return codeWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePause", function() { return codePause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeKeyboard", function() { return codeKeyboard; });
var codeCarouselBasic = "\n<template>\n  <b-carousel\n    id=\"carousel-example-generic\"\n    controls\n    indicators\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codeCarouselCaption = "\n<template>\n  <b-carousel\n    id=\"carousel-caption\"\n    controls\n    indicators\n  >\n    <b-carousel-slide\n      caption-html=\"<span class='text-white'>First Slide Label</span>\"\n      class=\"card-img-overlay\"\n      text=\"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.\"\n      :img-src=\"require('@/assets/images/slider/08.jpg')\"\n    />\n    <b-carousel-slide\n      caption-html=\"<span class='text-white'>Second Slide Label</span>\"\n      class=\"card-img-overlay\"\n      text=\"Tart macaroon marzipan I love souffl\xE9 apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.\"\n      :img-src=\"require('@/assets/images/slider/09.jpg')\"\n    />\n    <b-carousel-slide\n      caption-html=\"<span class='text-white'>Third Slide Label</span>\"\n      class=\"card-img-overlay\"\n      text=\"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing.\"\n      :img-src=\"require('@/assets/images/slider/10.jpg')\"\n    />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codeCarouselCrossfade = "\n<template>\n  <b-carousel\n    id=\"carousel-crossfade\"\n    controls\n    indicators\n    fade\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport {BCarousel, BCarouselSlide} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codeCarouselInterval = "\n<template>\n  <b-carousel\n    id=\"carousel-interval\"\n    controls\n    indicators\n    :interval=\"400\"\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codeVsupport = "\n<template>\n  <div>\n    <b-carousel\n      id=\"carousel-1\"\n      v-model=\"slide\"\n      :interval=\"4000\"\n      controls\n      indicators\n      background=\"#ababab\"\n      img-width=\"924\"\n      img-height=\"380\"\n      @sliding-start=\"onSlideStart\"\n      @sliding-end=\"onSlideEnd\"\n    >\n      <!-- Text slides with image -->\n      <b-carousel-slide\n        text=\"Nulla vitae elit libero, a pharetra augue mollis interdum.\"\n        :img-src=\"require('@/assets/images/slider/05.jpg')\"\n      />\n\n      <!-- Slides with custom text -->\n      <b-carousel-slide :img-src=\"require('@/assets/images/slider/06.jpg')\" />\n\n      <!-- Slides with image only -->\n      <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n\n      <!-- Slides with img slot -->\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class=\"d-block img-fluid w-100\"\n            width=\"924\"\n            height=\"380\"\n            :src=\"require('@/assets/images/slider/04.jpg')\"\n            alt=\"image slot\"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <b-card-text class=\"mt-1 mb-0\">\n      <strong>Slide #:</strong> {{ slide }} <strong>Sliding:</strong> {{ sliding }}\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BCardText } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BCardText,\n  },\n  data: () => ({\n    slide: 0,\n    sliding: null,\n  }),\n  methods: {\n    onSlideStart() {\n      this.sliding = true\n    },\n    onSlideEnd() {\n      this.sliding = false\n    },\n  },\n}\n</script>\n";
var codeProgrammaticSlide = "\n<template>\n  <div>\n    <b-carousel\n      id=\"carousel-1\"\n      ref=\"myCarousel\"\n      :interval=\"4000\"\n      controls\n      indicators\n      background=\"#ababab\"\n      img-width=\"924\"\n      img-height=\"380\"\n    >\n      <!-- Text slides with image -->\n      <b-carousel-slide\n        text=\"Nulla vitae elit libero, a pharetra augue mollis interdum.\"\n        :img-src=\"require('@/assets/images/slider/01.jpg')\"\n      />\n\n      <!-- Slides with custom text -->\n      <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n\n      <!-- Slides with image only -->\n      <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n\n      <!-- Slides with img slot -->\n      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class=\"d-block img-fluid w-100\"\n            width=\"924\"\n            height=\"380\"\n            :src=\"require('@/assets/images/slider/04.jpg')\"\n            alt=\"image slot\"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <!-- programmatically  -->\n    <div class=\"d-flex align-items-center justify-content-center mt-1\">\n      <b-button-group>\n        <b-button\n          v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n          variant=\"outline-primary\"\n          @click=\"prev\"\n        >\n          Pre\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n          variant=\"outline-primary\"\n          @click=\"start\"\n        >\n          {{ status ? 'Start' : 'Pause' }}\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n          variant=\"outline-primary\"\n          @click=\"next\"\n        >\n          Next\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BButtonGroup, BButton} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    status: false,\n  }),\n  methods: {\n    prev() {\n      if (!this.status) {\n        this.$refs.myCarousel.prev()\n      }\n    },\n    next() {\n      if (!this.status) {\n        this.$refs.myCarousel.next()\n      }\n    },\n    start() {\n      this.status = !this.status\n      if (this.status) {\n        this.$refs.myCarousel.pause()\n      } else {\n        this.$refs.myCarousel.start()\n      }\n    },\n  },\n}\n</script>\n";
var codeWrap = "\n<template>\n  <b-carousel\n    id=\"carousel-interval\"\n    no-wrap\n    controls\n    indicators\n    :interval=\"400\"\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/04.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codePause = "\n<template>\n  <b-carousel\n    id=\"carousel-interval\"\n    no-hover-pause\n    controls\n    indicators\n    :interval=\"5000\"\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/04.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/05.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/06.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";
var codeKeyboard = "\n<template>\n  <b-carousel\n    id=\"carousel-interval\"\n    controls\n    indicators\n    :interval=\"400\"\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/07.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/08.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/09.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n</script>\n";

/***/ })

}]);