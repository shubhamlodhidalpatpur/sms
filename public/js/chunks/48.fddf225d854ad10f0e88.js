(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _NavBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBasic.vue */ "./resources/js/src/views/components/nav/NavBasic.vue");
/* harmony import */ var _NavBorder_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBorder.vue */ "./resources/js/src/views/components/nav/NavBorder.vue");
/* harmony import */ var _NavFill_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavFill.vue */ "./resources/js/src/views/components/nav/NavFill.vue");
/* harmony import */ var _NavJustified_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavJustified.vue */ "./resources/js/src/views/components/nav/NavJustified.vue");
/* harmony import */ var _NavAlignment_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavAlignment.vue */ "./resources/js/src/views/components/nav/NavAlignment.vue");
/* harmony import */ var _NavDropdown_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavDropdown.vue */ "./resources/js/src/views/components/nav/NavDropdown.vue");
/* harmony import */ var _NavVertical_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavVertical.vue */ "./resources/js/src/views/components/nav/NavVertical.vue");
/* harmony import */ var _NavVerticalBorder_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavVerticalBorder.vue */ "./resources/js/src/views/components/nav/NavVerticalBorder.vue");
/* harmony import */ var _NavSquareBorder_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavSquareBorder.vue */ "./resources/js/src/views/components/nav/NavSquareBorder.vue");
/* harmony import */ var _NavDivider_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavDivider.vue */ "./resources/js/src/views/components/nav/NavDivider.vue");











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    NavBasic: _NavBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavBorder: _NavBorder_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NavFill: _NavFill_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavJustified: _NavJustified_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavAlignment: _NavAlignment_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NavDropdown: _NavDropdown_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NavVertical: _NavVertical_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NavVerticalBorder: _NavVerticalBorder_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    NavSquareBorder: _NavSquareBorder_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    NavDivider: _NavDivider_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadio"]
  },
  data: function data() {
    return {
      selected: 'center',
      codeAlignment: _code__WEBPACK_IMPORTED_MODULE_2__["codeAlignment"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeBorder"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownDivider"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeDivider: _code__WEBPACK_IMPORTED_MODULE_2__["codeDivider"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItemDropdown"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownDivider"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeDropdown: _code__WEBPACK_IMPORTED_MODULE_2__["codeDropdown"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"]
  },
  data: function data() {
    return {
      codeFill: _code__WEBPACK_IMPORTED_MODULE_2__["codeFill"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeJustified: _code__WEBPACK_IMPORTED_MODULE_2__["codeJustified"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeSquareBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeSquareBorder"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeVertical: _code__WEBPACK_IMPORTED_MODULE_2__["codeVertical"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/nav/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BNavItem"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeVerticalBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeVerticalBorder"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0 ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("nav-basic")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-fill")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-justified")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-alignment")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-dropdown")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-vertical")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-vertical-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-square-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("nav-divider")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
      title: "Alignment Nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeAlignment) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To align your ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav-item>")]), _vm._v(" "), _c("span", [_vm._v(" components, use the ")]), _vm._v(" "), _c("code", [_vm._v("align")]), _vm._v(" "), _c("span", [_vm._v(" prop. Available values are ")]), _vm._v(" "), _c("code", [_vm._v("left, center")]), _vm._v(" "), _c("span", [_vm._v(" and ")]), _vm._v(" "), _c("code", [_vm._v("right")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("b-form-radio", {
    attrs: {
      name: "some-radios",
      value: "left",
      inline: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v("\n      Left\n    ")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      name: "some-radios",
      value: "center",
      inline: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v("\n      Center\n    ")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      name: "some-radios",
      value: "right",
      inline: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v("\n      Right\n    ")])], 1), _vm._v(" "), _c("b-nav", {
    attrs: {
      align: _vm.selected
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link with a long name ")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      title: "Base Nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Navigation available in Bootstrap share general markup and styles, from the base ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav>")]), _vm._v(" "), _c("span", [_vm._v(" class to the ")]), _vm._v(" "), _c("code", [_vm._v("active")]), _vm._v(" "), _c("span", [_vm._v(" and ")]), _vm._v(" "), _c("code", [_vm._v("disabled")]), _vm._v(" "), _c("span", [_vm._v(" states.")])]), _vm._v(" "), _c("b-nav", [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4 ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      title: "With Border"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Use Class ")]), _vm._v(" "), _c("code", [_vm._v(".wrap-border")]), _vm._v(" "), _c("span", [_vm._v(" with your ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav>")]), _vm._v(" "), _c("span", [_vm._v(" tag to wrap your nav with a border.")])]), _vm._v(" "), _c("b-nav", {
    staticClass: "wrap-border"
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      title: "Nav with Divider  "
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeDivider) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To add divider, use ")]), _vm._v(" "), _c("code", [_vm._v("<b-dropdown-divider>")]), _vm._v(" "), _c("span", [_vm._v(" components.")])]), _vm._v(" "), _c("div", [_c("b-nav", {
    staticClass: "wrap-border",
    attrs: {
      vertical: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n        Active\n      ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-dropdown-divider"), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n        Disabled\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      title: "Dropdown Nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeDropdown) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Use ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav-item-dropdown>")]), _vm._v(" "), _c("span", [_vm._v(" to place dropdown items within your nav.")])]), _vm._v(" "), _c("div", [_c("b-nav", [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n        Active\n      ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item-dropdown", {
    attrs: {
      id: "my-nav-dropdown",
      text: "Dropdown",
      "toggle-class": "nav-link-custom",
      right: ""
    }
  }, [_c("b-dropdown-item", [_vm._v("One")]), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Two")]), _vm._v(" "), _c("b-dropdown-divider"), _vm._v(" "), _c("b-dropdown-item", [_vm._v("Three")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      title: "Fill Nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeFill) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To proportionately fill all available space with your ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav-item>")]), _vm._v(" "), _c("span", [_vm._v(" components, set the ")]), _vm._v(" "), _c("code", [_vm._v("fill")]), _vm._v(" "), _c("span", [_vm._v(" prop.")]), _vm._v(" "), _c("span", [_vm._v("Notice that all horizontal space is occupied, but not every nav item has the same width.")])]), _vm._v(" "), _c("b-nav", {
    attrs: {
      fill: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link with a long name ")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507 ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
      title: "Justified Nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeJustified) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("For equal-width elements, set the ")]), _vm._v(" "), _c("code", [_vm._v("justified")]), _vm._v(" "), _c("span", [_vm._v(" prop instead. All horizontal space will be occupied by nav links, but unlike ")]), _vm._v(" "), _c("code", [_vm._v("fill")]), _vm._v(" "), _c("span", [_vm._v(" above, every ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav-item>")]), _vm._v(" "), _c("span", [_vm._v(" will be the same width.")])]), _vm._v(" "), _c("b-nav", {
    attrs: {
      justified: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link name ")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1 ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Nav with Square Border"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSquareBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To wrap with square border, use ")]), _vm._v(" "), _c("code", [_vm._v(".square-border")]), _vm._v(" "), _c("span", [_vm._v(" class with ")]), _vm._v(" "), _c("code", [_vm._v(".wrap-border")]), _vm._v(" "), _c("span", [_vm._v(" class.")])]), _vm._v(" "), _c("b-nav", {
    staticClass: "wrap-border square-border",
    attrs: {
      vertical: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
      title: "Vertical nav"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeVertical) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("By default ")]), _vm._v(" "), _c("code", [_vm._v("<b-nav>")]), _vm._v(" "), _c("span", [_vm._v(" appear on a horizontal line. Stack your navigation by setting the ")]), _vm._v(" "), _c("code", [_vm._v("vertical")]), _vm._v(" "), _c("span", [_vm._v(" prop.")])]), _vm._v(" "), _c("b-nav", {
    attrs: {
      vertical: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec ***!
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
      title: "Nav with Border"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeVerticalBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To wrap with border, use ")]), _vm._v(" "), _c("code", [_vm._v(".wrap-border")]), _vm._v(" "), _c("span", [_vm._v(" class.")])]), _vm._v(" "), _c("b-nav", {
    staticClass: "wrap-border",
    attrs: {
      vertical: ""
    }
  }, [_c("b-nav-item", {
    attrs: {
      active: ""
    }
  }, [_vm._v("\n      Active\n    ")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Link")]), _vm._v(" "), _c("b-nav-item", [_vm._v("Another Link")]), _vm._v(" "), _c("b-nav-item", {
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n      Disabled\n    ")])], 1)], 1);
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

/***/ "./resources/js/src/views/components/nav/Nav.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/components/nav/Nav.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=af6dbcb0 */ "./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/Nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/Nav.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Nav.vue?vue&type=template&id=af6dbcb0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/Nav.vue?vue&type=template&id=af6dbcb0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_af6dbcb0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavAlignment.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavAlignment.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavAlignment.vue?vue&type=template&id=478d5dcb */ "./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb");
/* harmony import */ var _NavAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavAlignment.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavAlignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavAlignment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavAlignment.vue?vue&type=template&id=478d5dcb */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavAlignment.vue?vue&type=template&id=478d5dcb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAlignment_vue_vue_type_template_id_478d5dcb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBasic.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBasic.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBasic.vue?vue&type=template&id=3e625a96 */ "./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96");
/* harmony import */ var _NavBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBasic.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBasic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBasic.vue?vue&type=template&id=3e625a96 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBasic.vue?vue&type=template&id=3e625a96");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBasic_vue_vue_type_template_id_3e625a96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBorder.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBorder.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBorder.vue?vue&type=template&id=404deff4 */ "./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4");
/* harmony import */ var _NavBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4 ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBorder.vue?vue&type=template&id=404deff4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavBorder.vue?vue&type=template&id=404deff4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBorder_vue_vue_type_template_id_404deff4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDivider.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDivider.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavDivider.vue?vue&type=template&id=4a80b801 */ "./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801");
/* harmony import */ var _NavDivider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavDivider.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavDivider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavDivider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDivider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavDivider.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDivider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801 ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavDivider.vue?vue&type=template&id=4a80b801 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDivider.vue?vue&type=template&id=4a80b801");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDivider_vue_vue_type_template_id_4a80b801__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDropdown.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDropdown.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavDropdown.vue?vue&type=template&id=832d8d4e */ "./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e");
/* harmony import */ var _NavDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavDropdown.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavDropdown.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavDropdown.vue?vue&type=template&id=832d8d4e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavDropdown.vue?vue&type=template&id=832d8d4e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavDropdown_vue_vue_type_template_id_832d8d4e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavFill.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavFill.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavFill.vue?vue&type=template&id=3498f9cb */ "./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb");
/* harmony import */ var _NavFill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavFill.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavFill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavFill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavFill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavFill.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavFill.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavFill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavFill.vue?vue&type=template&id=3498f9cb */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavFill.vue?vue&type=template&id=3498f9cb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavFill_vue_vue_type_template_id_3498f9cb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavJustified.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavJustified.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavJustified.vue?vue&type=template&id=2eee9507 */ "./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507");
/* harmony import */ var _NavJustified_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavJustified.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavJustified_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavJustified.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavJustified_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavJustified.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavJustified_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507 ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavJustified.vue?vue&type=template&id=2eee9507 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavJustified.vue?vue&type=template&id=2eee9507");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavJustified_vue_vue_type_template_id_2eee9507__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavSquareBorder.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavSquareBorder.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavSquareBorder.vue?vue&type=template&id=1a3900f1 */ "./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1");
/* harmony import */ var _NavSquareBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavSquareBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavSquareBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavSquareBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSquareBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavSquareBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSquareBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1 ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavSquareBorder.vue?vue&type=template&id=1a3900f1 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavSquareBorder.vue?vue&type=template&id=1a3900f1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavSquareBorder_vue_vue_type_template_id_1a3900f1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVertical.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVertical.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavVertical.vue?vue&type=template&id=4e2c223e */ "./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e");
/* harmony import */ var _NavVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavVertical.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavVertical.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVertical_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavVertical.vue?vue&type=template&id=4e2c223e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVertical.vue?vue&type=template&id=4e2c223e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVertical_vue_vue_type_template_id_4e2c223e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVerticalBorder.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVerticalBorder.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavVerticalBorder.vue?vue&type=template&id=a250afec */ "./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec");
/* harmony import */ var _NavVerticalBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavVerticalBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavVerticalBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/nav/NavVerticalBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVerticalBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavVerticalBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVerticalBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavVerticalBorder.vue?vue&type=template&id=a250afec */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/nav/NavVerticalBorder.vue?vue&type=template&id=a250afec");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NavVerticalBorder_vue_vue_type_template_id_a250afec__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/nav/code.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/components/nav/code.js ***!
  \*******************************************************/
/*! exports provided: codeBasic, codeBorder, codeAlignment, codeDivider, codeDropdown, codeFill, codeJustified, codeSquareBorder, codeVertical, codeVerticalBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBorder", function() { return codeBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAlignment", function() { return codeAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDivider", function() { return codeDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDropdown", function() { return codeDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFill", function() { return codeFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeJustified", function() { return codeJustified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSquareBorder", function() { return codeSquareBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVertical", function() { return codeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVerticalBorder", function() { return codeVerticalBorder; });
var codeBasic = "\n<template>\n  <b-nav>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeBorder = "\n<template>\n  <b-nav class=\"wrap-border\">\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Another Link</b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeAlignment = "\n<template>\n  <div>\n    <div class=\"d-flex mb-2\">\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"some-radios\"\n        value=\"left\"\n        plain\n        class=\"vs-radio-con\"\n      >\n        <span class=\"vs-radio\">\n          <span class=\"vs-radio--border\" />\n          <span class=\"vs-radio--circle\" />\n        </span>\n        <span class=\"ml-50 mr-1\">Left</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"some-radios\"\n        value=\"center\"\n        plain\n        class=\"vs-radio-con\"\n      >\n        <span class=\"vs-radio\">\n          <span class=\"vs-radio--border\" />\n          <span class=\"vs-radio--circle\" />\n        </span>\n        <span class=\"ml-50 mr-1\">Center</span>\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"some-radios\"\n        value=\"right\"\n        plain\n        class=\"vs-radio-con\"\n      >\n        <span class=\"vs-radio\">\n          <span class=\"vs-radio--border\" />\n          <span class=\"vs-radio--circle\" />\n        </span>\n        <span class=\"ml-50 mr-1\">Right</span>\n      </b-form-radio>\n    </div>\n    <b-nav :align=\"selected\">\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Link with a long name </b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {BNav, BNavItem, BFormRadio} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BFormRadio,\n  },\n  data: () => ({\n    selected: 'center',\n  }),\n}\n</script>\n";
var codeDivider = "\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-dropdown-divider />\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem, BDropdownDivider } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BDropdownDivider,\n  },\n}\n</script>\n";
var codeDropdown = "\n<template>\n  <div>\n    <b-nav>\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item-dropdown\n        id=\"my-nav-dropdown\"\n        text=\"Dropdown\"\n        toggle-class=\"nav-link-custom\"\n        right\n      >\n        <b-dropdown-item>One</b-dropdown-item>\n        <b-dropdown-item>Two</b-dropdown-item>\n        <b-dropdown-divider />\n        <b-dropdown-item>Three</b-dropdown-item>\n      </b-nav-item-dropdown>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport {\n  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem,\n} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n    BNavItemDropdown,\n    BDropdownDivider,\n    BDropdownItem,\n  },\n}\n</script>\n";
var codeFill = "\n<template>\n  <b-nav fill>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link with a long name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeJustified = "\n<template>\n  <b-nav justified>\n    <b-nav-item active>\n      Active\n    </b-nav-item>\n    <b-nav-item>Link</b-nav-item>\n    <b-nav-item>Link name </b-nav-item>\n    <b-nav-item disabled>\n      Disabled\n    </b-nav-item>\n  </b-nav>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeSquareBorder = "\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border square-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeVertical = "\n<template>\n  <div>\n    <b-nav\n      vertical\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";
var codeVerticalBorder = "\n<template>\n  <div>\n    <b-nav\n      vertical\n      class=\"wrap-border\"\n    >\n      <b-nav-item active>\n        Active\n      </b-nav-item>\n      <b-nav-item>Link</b-nav-item>\n      <b-nav-item>Another Link</b-nav-item>\n      <b-nav-item disabled>\n        Disabled\n      </b-nav-item>\n    </b-nav>\n  </div>\n</template>\n\n<script>\nimport { BNav, BNavItem } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BNav,\n    BNavItem,\n  },\n}\n</script>\n";

/***/ })

}]);