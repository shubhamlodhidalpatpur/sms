(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _FormSpinbuttonBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonBasic.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue");
/* harmony import */ var _FormSpinbuttonMinMax_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormSpinbuttonMinMax.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue");
/* harmony import */ var _FormSpinbuttonStep_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormSpinbuttonStep.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue");
/* harmony import */ var _FormSpinbuttonWrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormSpinbuttonWrap.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue");
/* harmony import */ var _FormSpinbuttonSize_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormSpinbuttonSize.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue");
/* harmony import */ var _FormSpinbuttonInline_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormSpinbuttonInline.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue");
/* harmony import */ var _FormSpinbuttonVertical_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormSpinbuttonVertical.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue");
/* harmony import */ var _FormSpinbuttonLocale_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormSpinbuttonLocale.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue");
/* harmony import */ var _FormSpinbuttonDisabledReadonly_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSpinbuttonDisabledReadonly.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue");
/* harmony import */ var _FormSpinbuttonWidth_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormSpinbuttonWidth.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue");
/* harmony import */ var _FormSpinbuttonValidation_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormSpinbuttonValidation.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue");
/* harmony import */ var _FormSpinbuttonFormater_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormSpinbuttonFormater.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue");
/* harmony import */ var _FormSpinbuttonSlots_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FormSpinbuttonSlots.vue */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue");














/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    FormSpinbuttonBasic: _FormSpinbuttonBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FormSpinbuttonMinMax: _FormSpinbuttonMinMax_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FormSpinbuttonStep: _FormSpinbuttonStep_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormSpinbuttonWrap: _FormSpinbuttonWrap_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormSpinbuttonSize: _FormSpinbuttonSize_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormSpinbuttonInline: _FormSpinbuttonInline_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    FormSpinbuttonVertical: _FormSpinbuttonVertical_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormSpinbuttonLocale: _FormSpinbuttonLocale_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormSpinbuttonDisabledReadonly: _FormSpinbuttonDisabledReadonly_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    FormSpinbuttonWidth: _FormSpinbuttonWidth_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormSpinbuttonValidation: _FormSpinbuttonValidation_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    FormSpinbuttonFormater: _FormSpinbuttonFormater_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    FormSpinbuttonSlots: _FormSpinbuttonSlots_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"]
  },
  data: function data() {
    return {
      value: 50,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"]
  },
  data: function data() {
    return {
      value: 50,
      codeDisabledReadonly: _code__WEBPACK_IMPORTED_MODULE_2__["codeDisabledReadonly"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      value: 0,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      codeFormater: _code__WEBPACK_IMPORTED_MODULE_2__["codeFormater"]
    };
  },
  methods: {
    dayFormatter: function dayFormatter(value) {
      return this.days[value];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      value: 50,
      codeInline: _code__WEBPACK_IMPORTED_MODULE_2__["codeInline"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: 0,
      locale: 'fr-CA',
      locales: [{
        value: 'en',
        text: 'English'
      }, {
        value: 'de',
        text: 'German'
      }, {
        value: 'fr-CA',
        text: 'French (Canadian)'
      }, {
        value: 'fa',
        text: 'Persian'
      }, {
        value: 'ar-EG',
        text: 'Arabic (Egyptian)'
      }],
      codeLocale: _code__WEBPACK_IMPORTED_MODULE_2__["codeLocale"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: 5,
      codeMinMax: _code__WEBPACK_IMPORTED_MODULE_2__["codeMinMax"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeSize: _code__WEBPACK_IMPORTED_MODULE_2__["codeSize"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"]
  },
  data: function data() {
    return {
      value: 50,
      codeSlots: _code__WEBPACK_IMPORTED_MODULE_2__["codeSlots"],
      day: 0,
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };
  },
  methods: {
    dayFormatter: function dayFormatter(value) {
      return this.days[value];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value1: 50,
      codeStep: _code__WEBPACK_IMPORTED_MODULE_2__["codeStep"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: 50,
      codeValidation: _code__WEBPACK_IMPORTED_MODULE_2__["codeValidation"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      value: 50,
      codeVertical: _code__WEBPACK_IMPORTED_MODULE_2__["codeVertical"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      value: 0,
      codeWidth: _code__WEBPACK_IMPORTED_MODULE_2__["codeWidth"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSpinbutton"],
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
      lg: "6"
    }
  }, [_c("form-spinbutton-basic")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-size")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-min-max")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-step")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-wrap")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-vertical")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-locale")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-width")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-inline")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-validation")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-formater")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("form-spinbutton-disabled-readonly")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("form-spinbutton-slots")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Basic Spinbutton"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("\n    Spin buttons allow for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value.\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("label", {
    attrs: {
      "for": "demo-sb"
    }
  }, [_vm._v("Spin Button")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "demo-sb",
      min: "1",
      max: "100"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  }), _vm._v(" "), _c("b-card-text", {
    staticClass: "mt-1"
  }, [_vm._v("\n      Value: " + _vm._s(_vm.value) + "\n    ")]), _vm._v(" "), _c("b-alert", {
    staticClass: "mb-0",
    attrs: {
      show: "",
      variant: "success"
    }
  }, [_c("div", {
    staticClass: "alert-body"
  }, [_vm._v("\n        The ArrowUp and ArrowDown keys can be used to increment or decrement the value.\n      ")])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Disabled and readonly states"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeDisabledReadonly) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Setting the prop ")]), _vm._v(" "), _c("code", [_vm._v("disabled")]), _vm._v(" "), _c("span", [_vm._v(" places the component in a disabled, non-interactive state. The ")]), _vm._v(" "), _c("code", [_vm._v("readonly")]), _vm._v(" "), _c("span", [_vm._v("\n      prop places the component in a readonly state (focusable, but the value cannot be changed by the user).\n    ")])]), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    attrs: {
      "for": "sb-disabled"
    }
  }, [_vm._v("Disabled spin button")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-disabled",
      disabled: ""
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "6"
    }
  }, [_c("label", {
    attrs: {
      "for": "sb-readonly"
    }
  }, [_vm._v("Readonly spin button")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-readonly",
      readonly: ""
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Spinbutton with Formater"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeFormater) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To provide a formatter function, set the prop ")]), _vm._v(" "), _c("code", [_vm._v("formatter-fn")]), _vm._v(" "), _c("span", [_vm._v(" to a method reference.")])]), _vm._v(" "), _c("div", [_c("label", {
    attrs: {
      "for": "sb-days"
    }
  }, [_vm._v("Spin button with formatter")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-days",
      "formatter-fn": _vm.dayFormatter,
      min: "0",
      max: "6",
      wrap: ""
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  }), _vm._v(" "), _c("b-card-text", {
    staticClass: "mt-1 mb-0"
  }, [_vm._v("\n      Value: " + _vm._s(_vm.value) + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Inline"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeInline) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("The spin button will automatically adjust it's width to fit the displayed value. Use the prop ")]), _vm._v(" "), _c("code", [_vm._v("inline")])]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "mr-1",
    attrs: {
      "for": "sb-inline"
    }
  }, [_vm._v("Inline spin button")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-inline",
      inline: ""
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Locale"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeLocale) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("By default ")]), _vm._v(" "), _c("code", [_vm._v("<b-form-spinbutton>")]), _vm._v(" "), _c("span", [_vm._v("\n      will format the displayed number in the users browser default locale. You can change the localized formatting by\n      specifying a locale (or array of locales) via the\n    ")]), _vm._v(" "), _c("code", [_vm._v("locale")]), _vm._v(" "), _c("span", [_vm._v("\n      prop.\n    ")])]), _vm._v(" "), _c("div", [_c("label", {
    attrs: {
      "for": "sb-locales"
    }
  }, [_vm._v("Locale")]), _vm._v(" "), _c("b-form-select", {
    attrs: {
      id: "sb-locales",
      options: _vm.locales
    },
    model: {
      value: _vm.locale,
      callback: function callback($$v) {
        _vm.locale = $$v;
      },
      expression: "locale"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "mt-2",
    attrs: {
      "for": "sb-local"
    }
  }, [_vm._v("Spin button with locale")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-locale",
      locale: _vm.locale,
      min: "0",
      max: "10",
      step: "0.125"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  }), _vm._v(" "), _c("b-card-text", {
    staticClass: "mt-1"
  }, [_vm._v("\n      Value: " + _vm._s(_vm.value) + "\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Min and Max"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeMinMax) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Spinbuttons have a default range from")]), _vm._v(" "), _c("code", [_vm._v("1")]), _vm._v(" "), _c("span", [_vm._v(" to")]), _vm._v(" "), _c("code", [_vm._v("100")]), _vm._v(", which can be changed by setting the\n    "), _c("code", [_vm._v("min")]), _vm._v(" "), _c("span", [_vm._v(" and ")]), _vm._v(" "), _c("code", [_vm._v("max")]), _vm._v(" "), _c("span", [_vm._v(" props.")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-maxmin"
    }
  }, [_vm._v("Spin button with min 0 and max 10")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-maxmin",
      min: "0",
      max: "10"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Size"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSize) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("As with other form controls, ")]), _vm._v(" "), _c("code", [_vm._v("<b-form-spinbutton>")]), _vm._v(" "), _c("span", [_vm._v(" supports small and large sizing via setting the ")]), _vm._v(" "), _c("code", [_vm._v("size")]), _vm._v(" "), _c("span", [_vm._v(" prop to either ")]), _vm._v(" "), _c("code", [_vm._v("'sm'")]), _vm._v(" "), _c("span", [_vm._v(" or ")]), _vm._v(" "), _c("code", [_vm._v("'lg'")]), _vm._v(" "), _c("span", [_vm._v(", respectively.")])]), _vm._v(" "), _c("div", [_c("label", {
    attrs: {
      "for": "sb-small"
    }
  }, [_vm._v("Spin button - Small size")]), _vm._v(" "), _c("b-form-spinbutton", {
    staticClass: "mb-1",
    attrs: {
      id: "sb-small",
      size: "sm",
      placeholder: "--"
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-default"
    }
  }, [_vm._v("Spin button - Default size")]), _vm._v(" "), _c("b-form-spinbutton", {
    staticClass: "mb-1",
    attrs: {
      id: "sb-default",
      placeholder: "--"
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-large"
    }
  }, [_vm._v("Spin button - Large size")]), _vm._v(" "), _c("b-form-spinbutton", {
    staticClass: "mb-1",
    attrs: {
      id: "sb-large",
      size: "lg",
      placeholder: "--"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Slot"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSlots) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Spin buttons provides two slots ")]), _vm._v(" "), _c("code", [_vm._v("increment")]), _vm._v(" "), _c("span", [_vm._v(" and ")]), _vm._v(" "), _c("code", [_vm._v("decrement")])]), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-spinbutton", {
    staticClass: "mb-md-0 mb-2",
    attrs: {
      min: "1",
      max: "100"
    },
    scopedSlots: _vm._u([{
      key: "increment",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronUpIcon"
          }
        })];
      },
      proxy: true
    }, {
      key: "decrement",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronDownIcon"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("b-form-spinbutton", {
    attrs: {
      min: "0",
      max: "6",
      wrap: "",
      "formatter-fn": _vm.dayFormatter
    },
    scopedSlots: _vm._u([{
      key: "increment",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronRightIcon"
          }
        })];
      },
      proxy: true
    }, {
      key: "decrement",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronLeftIcon"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.day,
      callback: function callback($$v) {
        _vm.day = $$v;
      },
      expression: "day"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Step"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeStep) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("The default step increment is ")]), _vm._v(" "), _c("code", [_vm._v("1")]), _vm._v(" "), _c("span", [_vm._v(", and can be changed via the ")]), _vm._v(" "), _c("code", [_vm._v("step")]), _vm._v(" "), _c("span", [_vm._v("prop (decimal values allowed).")]), _vm._v(" "), _c("span", [_vm._v("When ")]), _vm._v(" "), _c("code", [_vm._v("step")]), _vm._v(" "), _c("span", [_vm._v(" is set, the value will always be a multiple of the step size plus the minimum value.")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-step"
    }
  }, [_vm._v("Spin button with step of 0.25")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-step",
      step: "0.25"
    },
    model: {
      value: _vm.value1,
      callback: function callback($$v) {
        _vm.value1 = $$v;
      },
      expression: "value1"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Validation states"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeValidation) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("When you default to a ")]), _vm._v(" "), _c("code", [_vm._v("null")]), _vm._v(" "), _c("span", [_vm._v(" value, and the user has not selected a value, you can use the ")]), _vm._v(" "), _c("code", [_vm._v("state")]), _vm._v(" "), _c("span", [_vm._v(" prop to apply one of the contextual validation styles to the component.")])]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-inline",
      state: Boolean(_vm.value >= 50)
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Vertical"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeVertical) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("Spinbuttons can be oriented in vertical mode:")]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-vertical"
    }
  }, [_vm._v("Vertical spin button")]), _c("br"), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-vertical",
      vertical: ""
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Width"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeWidth) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("The control (when not ")]), _vm._v(" "), _c("code", [_vm._v("vertical")]), _vm._v(" "), _c("span", [_vm._v(" or ")]), _vm._v(" "), _c("code", [_vm._v("inline")]), _vm._v(" "), _c("span", [_vm._v(") will expand to the maximum width of the parent container You can control width via utility classes such as\n    ")]), _vm._v(" "), _c("code", [_vm._v("w-50, w-75, w-100")]), _vm._v(" "), _c("span", [_vm._v(", or use styles to set the width.")])]), _vm._v(" "), _c("b-form-group", [_c("b-form-spinbutton", {
    staticClass: "w-100",
    attrs: {
      min: "0",
      max: "10",
      step: "0.125"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-spinbutton", {
    staticClass: "w-75",
    attrs: {
      min: "0",
      max: "10",
      step: "0.125"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-spinbutton", {
    staticClass: "w-50",
    attrs: {
      min: "0",
      max: "10",
      step: "0.125"
    },
    model: {
      value: _vm.value,
      callback: function callback($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Number wrapping"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeWrap) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the\n    ")]), _vm._v(" "), _c("code", [_vm._v("wrap")]), _vm._v(" "), _c("span", [_vm._v(" prop to ")]), _vm._v(" "), _c("code", [_vm._v("true")]), _vm._v(" "), _c("span", [_vm._v(".")])]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "sb-wrap"
    }
  }, [_vm._v("Wrapping value spin button")]), _vm._v(" "), _c("b-form-spinbutton", {
    attrs: {
      id: "sb-wrap",
      wrap: "",
      min: "1",
      max: "25",
      placeholder: "--"
    }
  })], 1);
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

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbutton.vue?vue&type=template&id=4f8a77cc */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc");
/* harmony import */ var _FormSpinbutton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbutton.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbutton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbutton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbutton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbutton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbutton.vue?vue&type=template&id=4f8a77cc */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbutton.vue?vue&type=template&id=4f8a77cc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbutton_vue_vue_type_template_id_4f8a77cc__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c");
/* harmony import */ var _FormSpinbuttonBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonBasic.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonBasic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonBasic.vue?vue&type=template&id=14158a1c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonBasic_vue_vue_type_template_id_14158a1c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c");
/* harmony import */ var _FormSpinbuttonDisabledReadonly_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonDisabledReadonly_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonDisabledReadonly_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonDisabledReadonly_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonDisabledReadonly.vue?vue&type=template&id=bc1b746c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonDisabledReadonly_vue_vue_type_template_id_bc1b746c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60");
/* harmony import */ var _FormSpinbuttonFormater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonFormater.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonFormater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonFormater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonFormater.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonFormater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60 ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonFormater.vue?vue&type=template&id=e295ae60");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonFormater_vue_vue_type_template_id_e295ae60__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05");
/* harmony import */ var _FormSpinbuttonInline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonInline.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonInline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonInline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonInline.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonInline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05 ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonInline.vue?vue&type=template&id=3cb14b05");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonInline_vue_vue_type_template_id_3cb14b05__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46");
/* harmony import */ var _FormSpinbuttonLocale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonLocale.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonLocale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonLocale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonLocale.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonLocale_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46 ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonLocale.vue?vue&type=template&id=5c4bee46");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonLocale_vue_vue_type_template_id_5c4bee46__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e");
/* harmony import */ var _FormSpinbuttonMinMax_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonMinMax.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonMinMax_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonMinMax_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonMinMax.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonMinMax_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonMinMax.vue?vue&type=template&id=19f1819e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonMinMax_vue_vue_type_template_id_19f1819e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d");
/* harmony import */ var _FormSpinbuttonSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonSize.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonSize.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSize.vue?vue&type=template&id=6f2b196d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSize_vue_vue_type_template_id_6f2b196d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e");
/* harmony import */ var _FormSpinbuttonSlots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonSlots.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonSlots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSlots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonSlots.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSlots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonSlots.vue?vue&type=template&id=f5893d0e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonSlots_vue_vue_type_template_id_f5893d0e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonStep.vue?vue&type=template&id=dc563a90 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90");
/* harmony import */ var _FormSpinbuttonStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonStep.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonStep.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonStep_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90 ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonStep.vue?vue&type=template&id=dc563a90 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonStep.vue?vue&type=template&id=dc563a90");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonStep_vue_vue_type_template_id_dc563a90__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonValidation.vue?vue&type=template&id=69809236 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236");
/* harmony import */ var _FormSpinbuttonValidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonValidation.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonValidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonValidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonValidation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonValidation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236 ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonValidation.vue?vue&type=template&id=69809236 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonValidation.vue?vue&type=template&id=69809236");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonValidation_vue_vue_type_template_id_69809236__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c");
/* harmony import */ var _FormSpinbuttonVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonVertical.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonVertical.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonVertical.vue?vue&type=template&id=0951d73c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonVertical_vue_vue_type_template_id_0951d73c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonWidth.vue?vue&type=template&id=582a088a */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a");
/* harmony import */ var _FormSpinbuttonWidth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonWidth.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonWidth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWidth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonWidth.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWidth_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonWidth.vue?vue&type=template&id=582a088a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWidth.vue?vue&type=template&id=582a088a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWidth_vue_vue_type_template_id_582a088a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594 */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594");
/* harmony import */ var _FormSpinbuttonWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSpinbuttonWrap.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormSpinbuttonWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonWrap.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWrap_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594 ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-spinbutton/FormSpinbuttonWrap.vue?vue&type=template&id=7e8c8594");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSpinbuttonWrap_vue_vue_type_template_id_7e8c8594__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-spinbutton/code.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-spinbutton/code.js ***!
  \***************************************************************************/
/*! exports provided: codeBasic, codeDisabledReadonly, codeInline, codeLocale, codeMinMax, codeSize, codeVertical, codeWrap, codeWidth, codeValidation, codeStep, codeFormater, codeSlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDisabledReadonly", function() { return codeDisabledReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeInline", function() { return codeInline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLocale", function() { return codeLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMinMax", function() { return codeMinMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSize", function() { return codeSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVertical", function() { return codeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeWrap", function() { return codeWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeWidth", function() { return codeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeValidation", function() { return codeValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeStep", function() { return codeStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFormater", function() { return codeFormater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSlots", function() { return codeSlots; });
var codeBasic = "\n<template>\n  <div>\n    <label for=\"demo-sb\">Spin Button</label>\n    <b-form-spinbutton\n      id=\"demo-sb\"\n      v-model=\"value\"\n      min=\"1\"\n      max=\"100\"\n    />\n    <p class=\"mt-1\">\n      Value: {{ value }}\n    </p>\n    <b-alert\n      class=\"mb-0\"\n      show\n      variant=\"success\"\n    >\n      <div class=\"alert-body\">\n        <span>The </span>\n        <code>ArrowUp</code>\n        <span> and </span>\n        <code>ArrowDown</code>\n        <span> keys can be used to increment or decrement the value.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BAlert } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BAlert,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n  }),\n}\n</script>\n";
var codeDisabledReadonly = "\n<template>\n  <b-row>\n    <b-col\n      md=\"6\"\n      class=\"mb-2\"\n    >\n      <label for=\"sb-disabled\">Disabled spin button</label>\n      <b-form-spinbutton\n        id=\"sb-disabled\"\n        v-model=\"value\"\n        disabled\n      />\n    </b-col>\n    <b-col\n      md=\"6\"\n      class=\"mb-2\"\n    >\n      <label\n        for=\"sb-readonly\"\n        class=\"\"\n      >Readonly spin button</label>\n      <b-form-spinbutton\n        id=\"sb-readonly\"\n        v-model=\"value\"\n        readonly\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormSpinbutton, BRow, BCol } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeDisabledReadonly,\n  }),\n}\n</script>\n";
var codeInline = "\n<template>\n  <div>\n    <label\n      for=\"sb-inline\"\n      class=\"mr-1\"\n    >Inline spin button</label>\n    <b-form-spinbutton\n      id=\"sb-inline\"\n      v-model=\"value\"\n      inline\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n</script>\n";
var codeLocale = "\n<template>\n  <div>\n    <label for=\"sb-locales\">Locale</label>\n    <b-form-select\n      id=\"sb-locales\"\n      v-model=\"locale\"\n      :options=\"locales\"\n    />\n    <label\n      for=\"sb-local\"\n      class=\"mt-2\"\n    >Spin button with locale</label>\n    <b-form-spinbutton\n      id=\"sb-locale\"\n      v-model=\"value\"\n      :locale=\"locale\"\n      min=\"0\"\n      max=\"10\"\n      step=\"0.125\"\n    />\n    <p class=\"mt-1\">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormSelect } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormSelect,\n  },\n  data: () => ({\n    value: 0,\n    locale: 'fr-CA',\n    locales: [\n      { value: 'en', text: 'English' },\n      { value: 'de', text: 'German' },\n      { value: 'fr-CA', text: 'French (Canadian)' },\n      { value: 'fa', text: 'Persian' },\n      { value: 'ar-EG', text: 'Arabic (Egyptian)' },\n    ],\n  }),\n}\n</script>\n";
var codeMinMax = "\n<template>\n  <div>\n    <label for=\"sb-maxmin\">Spin button with min 0 and max 10</label>\n    <b-form-spinbutton\n      id=\"sb-maxmin\"\n      v-model=\"value\"\n      min=\"0\"\n      max=\"10\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n</script>\n";
var codeSize = "\n<template>\n  <div>\n    <div>\n      <label for=\"sb-small\">Spin button - Small size</label>\n      <b-form-spinbutton\n        id=\"sb-small\"\n        size=\"sm\"\n        placeholder=\"--\"\n        class=\"mb-1\"\n      />\n\n      <label for=\"sb-default\">Spin button - Default size</label>\n      <b-form-spinbutton\n        id=\"sb-default\"\n        placeholder=\"--\"\n        class=\"mb-1\"\n      />\n\n      <label for=\"sb-large\">Spin button - Large size</label>\n      <b-form-spinbutton\n        id=\"sb-large\"\n        size=\"lg\"\n        placeholder=\"--\"\n        class=\"mb-1\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n</script>\n";
var codeVertical = "\n<template>\n  <div>\n    <label for=\"sb-vertical\">Vertical spin button</label><br>\n    <b-form-spinbutton\n      id=\"sb-vertical\"\n      v-model=\"value\"\n      vertical\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n</script>\n";
var codeWrap = "\n<template>\n  <div>\n    <label for=\"sb-wrap\">Wrapping value spin button</label>\n    <b-form-spinbutton\n      id=\"sb-wrap\"\n      wrap\n      min=\"1\"\n      max=\"25\"\n      placeholder=\"--\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n</script>\n";
var codeWidth = "\n<template>\n  <div>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model=\"value\"\n        min=\"0\"\n        max=\"10\"\n        step=\"0.125\"\n        class=\"w-100\"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model=\"value\"\n        min=\"0\"\n        max=\"10\"\n        step=\"0.125\"\n        class=\"w-75\"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model=\"value\"\n        min=\"0\"\n        max=\"10\"\n        step=\"0.125\"\n        class=\"w-50\"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormGroup,\n  },\n  data: () => ({\n    value: 0,\n  }),\n}\n</script>\n";
var codeValidation = "\n<template>\n  <div>\n    <b-form-spinbutton\n      id=\"sb-inline\"\n      v-model=\"value\"\n      :state=\"Boolean(value >= 50)\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n</script>\n";
var codeStep = "\n<template>\n  <div>\n    <label for=\"sb-step\">Spin button with step of 0.25</label>\n    <b-form-spinbutton\n      id=\"sb-step\"\n      v-model=\"value1\"\n      step=\"0.25\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value1: 50,\n  }),\n}\n</script>\n";
var codeFormater = "\n<template>\n  <div>\n    <label\n      for=\"sb-days\"\n      class=\"mt-2\"\n    >Spin button with formatter</label>\n    <b-form-spinbutton\n      id=\"sb-days\"\n      v-model=\"value\"\n      :formatter-fn=\"dayFormatter\"\n      min=\"0\"\n      max=\"6\"\n      wrap\n    />\n    <p class=\"mt-1 mb-0\">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 0,\n    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n</script>\n";
var codeSlots = "\n<template>\n  <b-card-code\n    title=\"Basic Spinbutton\"\n  >\n    <b-row>\n      <b-col md=\"6\">\n        <b-form-spinbutton\n          v-model=\"value\"\n          class=\"mb-md-0 mb-2\"\n          min=\"1\"\n          max=\"100\"\n        >\n          <template #increment>\n            <feather-icon icon=\"ChevronUpIcon\" />\n          </template>\n          <template #decrement>\n            <feather-icon icon=\"ChevronDownIcon\" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-spinbutton\n          v-model=\"day\"\n          min=\"0\"\n          max=\"6\"\n          wrap\n          :formatter-fn=\"dayFormatter\"\n        >\n          <template #increment>\n            <feather-icon icon=\"ChevronRightIcon\" />\n          </template>\n          <template #decrement>\n            <feather-icon icon=\"ChevronLeftIcon\" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n    </b-row>\n  </b-card-code>\n</template>\n\n<script>\nimport BCardCode from '@core/components/b-card-code'\nimport { BFormSpinbutton, BRow, BCol } from 'bootstrap-vue'\nimport { codeBasic } from './code'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BCardCode,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n    day: 0,\n    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n</script>\n";

/***/ })

}]);