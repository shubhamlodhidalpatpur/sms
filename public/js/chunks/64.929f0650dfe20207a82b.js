(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _PaginationAlignment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationAlignment.vue */ "./resources/js/src/views/components/pagination/PaginationAlignment.vue");
/* harmony import */ var _PaginationBasic_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaginationBasic.vue */ "./resources/js/src/views/components/pagination/PaginationBasic.vue");
/* harmony import */ var _PaginationButtonContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PaginationButtonContent.vue */ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue");
/* harmony import */ var _PaginationColor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaginationColor.vue */ "./resources/js/src/views/components/pagination/PaginationColor.vue");
/* harmony import */ var _PaginationGoto_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PaginationGoto.vue */ "./resources/js/src/views/components/pagination/PaginationGoto.vue");
/* harmony import */ var _PaginationPill_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaginationPill.vue */ "./resources/js/src/views/components/pagination/PaginationPill.vue");
/* harmony import */ var _PaginationSeparated_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PaginationSeparated.vue */ "./resources/js/src/views/components/pagination/PaginationSeparated.vue");
/* harmony import */ var _PaginationSize_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PaginationSize.vue */ "./resources/js/src/views/components/pagination/PaginationSize.vue");









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    PaginationAlignment: _PaginationAlignment_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PaginationBasic: _PaginationBasic_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PaginationButtonContent: _PaginationButtonContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaginationColor: _PaginationColor_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PaginationGoto: _PaginationGoto_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PaginationPill: _PaginationPill_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    PaginationSeparated: _PaginationSeparated_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    PaginationSize: _PaginationSize_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      selected: 'default',
      codeAlignment: _code__WEBPACK_IMPORTED_MODULE_2__["codeAlignment"],
      currentPage: 1,
      rows: 100
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"],
      currentPage: 1,
      perPage: 1,
      rows: 100
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeContent: _code__WEBPACK_IMPORTED_MODULE_2__["codeContent"],
      currentPage: 1,
      perPage: 10,
      rows: 100
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeColorOption: _code__WEBPACK_IMPORTED_MODULE_2__["codeColorOption"],
      currentPage: 4,
      perPage: 1,
      rows: 200
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeGoto: _code__WEBPACK_IMPORTED_MODULE_2__["codeGoto"],
      currentPage: 5,
      perPage: 1,
      rows: 100
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codePill: _code__WEBPACK_IMPORTED_MODULE_2__["codePill"],
      currentPage: 1,
      rows: 100
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_1__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeSeparated: _code__WEBPACK_IMPORTED_MODULE_2__["codeSeparated"],
      currentPage: 1,
      perPage: 1,
      rows: 200
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/pagination/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeSize: _code__WEBPACK_IMPORTED_MODULE_2__["codeSize"],
      currentPage: 1,
      rows: 100
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920 ***!
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
  return _c("b-row", {
    staticClass: "match-height"
  }, [_c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-basic")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-separated")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      xl: "6"
    }
  }, [_c("pagination-color")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      xl: "6"
    }
  }, [_c("pagination-button-content")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-goto")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-size")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-pill")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("pagination-alignment")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Alignment"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeAlignment) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("By default the pagination component is left aligned. Change the alignment to ")]), _vm._v(" "), _c("code", [_vm._v("center, right")]), _vm._v(" "), _c("span", [_vm._v(" (")]), _vm._v(" "), _c("code", [_vm._v("right")]), _vm._v(" "), _c("span", [_vm._v(" is an alias for ")]), _vm._v(" "), _c("code", [_vm._v("end")]), _vm._v(" "), _c("span", [_vm._v(" )")]), _vm._v(" "), _c("span", [_vm._v(", or ")]), _vm._v(" "), _c("code", [_vm._v("fill")]), _vm._v(" "), _c("span", [_vm._v(" by setting the prop ")]), _vm._v(" "), _c("code", [_vm._v("align")]), _vm._v(" "), _c("span", [_vm._v(" to the appropriate value.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-spacing-0"
  }, [_c("span", [_vm._v("Radios using options")]), _vm._v(" "), _c("div", {
    staticClass: "my-1"
  }, [_c("b-form-radio", {
    attrs: {
      name: "vuexy-radio",
      value: "default",
      inline: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v("\n        Default\n      ")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      name: "vuexy-radio",
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
  }, [_vm._v("\n        Right\n      ")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      name: "vuexy-radio",
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
  }, [_vm._v("\n        Center\n      ")]), _vm._v(" "), _c("b-form-radio", {
    attrs: {
      name: "vuexy-radio",
      value: "fill",
      inline: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  }, [_vm._v("\n        Fill\n      ")])], 1), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "base-url": "#",
      align: _vm.selected
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e ***!
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
      title: "Basic"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("\n      Quick first, previous, next, last, and page buttons for pagination control of another component (such as\n    ")]), _vm._v(" "), _c("code", [_vm._v("<b-table>")]), _vm._v(" "), _c("span", [_vm._v("or lists).")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-spacing-0"
  }, [_c("b-pagination", {
    attrs: {
      "hide-goto-end-buttons": "",
      "total-rows": _vm.rows
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657 ***!
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
      title: "Button content"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeContent) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("For a full list of all available slots see the")]), _vm._v(" "), _c("code", [_vm._v("Slots")]), _vm._v(" "), _c("span", [_vm._v("section below.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-spacing-0"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "first-text": "First",
      "prev-text": "Prev",
      "next-text": "Next",
      align: "left",
      "last-text": "Last"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-2",
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "first-text": "⏮",
      "prev-text": "⏪",
      "next-text": "⏩",
      align: "left",
      "last-text": "⏭"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-2",
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      align: "left"
    },
    scopedSlots: _vm._u([{
      key: "first-text",
      fn: function fn() {
        return [_c("span", {
          staticClass: "text-success"
        }, [_vm._v("First")])];
      },
      proxy: true
    }, {
      key: "prev-text",
      fn: function fn() {
        return [_c("span", {
          staticClass: "text-danger"
        }, [_vm._v("Prev")])];
      },
      proxy: true
    }, {
      key: "next-text",
      fn: function fn() {
        return [_c("span", {
          staticClass: "text-warning"
        }, [_vm._v("Next")])];
      },
      proxy: true
    }, {
      key: "last-text",
      fn: function fn() {
        return [_c("span", {
          staticClass: "text-info"
        }, [_vm._v("Last")])];
      },
      proxy: true
    }, {
      key: "ellipsis-text",
      fn: function fn() {
        return [_c("div", [_c("b-spinner", {
          attrs: {
            small: "",
            type: "grow"
          }
        }), _vm._v(" "), _c("b-spinner", {
          attrs: {
            small: "",
            type: "grow"
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "page",
      fn: function fn(_ref) {
        var page = _ref.page,
          active = _ref.active;
        return [active ? _c("b", [_vm._v(_vm._s(page))]) : _c("i", [_vm._v(_vm._s(page))])];
      }
    }]),
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3 ***!
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
      title: "Color Option"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeColorOption) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To add pagination with different color option, use class")]), _vm._v(" "), _c("code", [_vm._v(".pagination-{colorName}")]), _vm._v(" "), _c("span", [_vm._v("with ")]), _vm._v(" "), _c("code", [_vm._v("<b-pagination>")]), _vm._v(" "), _c("span", [_vm._v("components.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-spacing-0"
  }, [_c("b-pagination", {
    staticClass: "pagination-success",
    attrs: {
      "total-rows": _vm.rows,
      "first-number": "",
      "last-number": ""
    },
    scopedSlots: _vm._u([{
      key: "prev-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronLeftIcon"
          }
        })];
      },
      proxy: true
    }, {
      key: "next-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronRightIcon"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "pagination-danger mt-2",
    attrs: {
      "total-rows": _vm.rows,
      "first-number": "",
      "last-number": ""
    },
    scopedSlots: _vm._u([{
      key: "prev-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronLeftIcon"
          }
        })];
      },
      proxy: true
    }, {
      key: "next-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronRightIcon"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "pagination-info mb-0",
    attrs: {
      "total-rows": _vm.rows,
      "first-number": "",
      "last-number": ""
    },
    scopedSlots: _vm._u([{
      key: "prev-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronLeftIcon"
          }
        })];
      },
      proxy: true
    }, {
      key: "next-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            size: "18",
            icon: "ChevronRightIcon"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123 ***!
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
      title: "Goto first/last button type"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeGoto) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("If you prefer to have buttons with the first and last page number to go to the corresponding page, use the")]), _vm._v(" "), _c("code", [_vm._v("first-number")]), _vm._v(" "), _c("span", [_vm._v("and")]), _vm._v(" "), _c("code", [_vm._v("last-number")]), _vm._v(" "), _c("span", [_vm._v("props")]), _vm._v(".\n  ")]), _vm._v(" "), _c("div", [_c("h6", [_vm._v("Goto first button number")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "first-number": ""
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("h6", [_vm._v("Goto last button number")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "last-number": ""
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2 demo-spacing-0"
  }, [_c("h6", [_vm._v("Goto first and last button number")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      "first-number": "",
      "last-number": ""
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e ***!
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
      title: "Pill style"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codePill) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Easily switch to pill style buttons by setting the")]), _vm._v(" "), _c("code", [_vm._v("pills")]), _vm._v(" "), _c("span", [_vm._v("prop.")])]), _vm._v(" "), _c("div", [_c("h6", [_vm._v("Small Pills")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      pills: "",
      "total-rows": _vm.rows,
      size: "sm"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("h6", [_vm._v("Default Pills")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      pills: "",
      "total-rows": _vm.rows
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2 demo-spacing-0"
  }, [_c("h6", [_vm._v("Large Pills")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      pills: "",
      "total-rows": _vm.rows,
      size: "lg"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Separated"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSeparated) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("To make space between seprated icons of pagination use ")]), _vm._v(" "), _c("code", [_vm._v(".prev-item")]), _vm._v(" "), _c("span", [_vm._v(" class for the ")]), _vm._v(" "), _c("code", [_vm._v("prev-class")]), _vm._v(" "), _c("span", [_vm._v(" prop and ")]), _vm._v(" "), _c("code", [_vm._v(".next-item")]), _vm._v(" "), _c("span", [_vm._v(" for the ")]), _vm._v(" "), _c("code", [_vm._v("next-class")]), _vm._v(" "), _c("span", [_vm._v(" prop.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-spacing-0"
  }, [_c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "first-number": "",
      "last-number": "",
      "prev-class": "prev-item",
      "next-class": "next-item"
    },
    scopedSlots: _vm._u([{
      key: "prev-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronLeftIcon",
            size: "18"
          }
        })];
      },
      proxy: true
    }, {
      key: "next-text",
      fn: function fn() {
        return [_c("feather-icon", {
          attrs: {
            icon: "ChevronRightIcon",
            size: "18"
          }
        })];
      },
      proxy: true
    }]),
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1 ***!
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
      title: "Button size"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSize) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Optionally change from the default button size by setting the")]), _vm._v(" "), _c("code", [_vm._v("size")]), _vm._v(" "), _c("span", [_vm._v("prop to either")]), _vm._v(" "), _c("code", [_vm._v("'sm'")]), _vm._v(" "), _c("span", [_vm._v("for smaller buttons or ")]), _vm._v(" "), _c("code", [_vm._v("'lg'")]), _vm._v(" "), _c("span", [_vm._v("for larger buttons.")])]), _vm._v(" "), _c("div", [_c("h6", [_vm._v("Small")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      size: "sm"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("h6", [_vm._v("Default")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mt-2 demo-spacing-0"
  }, [_c("h6", [_vm._v("Large")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      size: "lg"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
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

/***/ "./resources/js/src/views/components/pagination/Pagination.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/Pagination.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=1d39d920 */ "./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920 ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=1d39d920 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/Pagination.vue?vue&type=template&id=1d39d920");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_1d39d920__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationAlignment.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationAlignment.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationAlignment.vue?vue&type=template&id=62e78d53 */ "./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53");
/* harmony import */ var _PaginationAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationAlignment.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationAlignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationAlignment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationAlignment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53 ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationAlignment.vue?vue&type=template&id=62e78d53 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationAlignment.vue?vue&type=template&id=62e78d53");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationAlignment_vue_vue_type_template_id_62e78d53__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationBasic.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationBasic.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationBasic.vue?vue&type=template&id=73118e1e */ "./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e");
/* harmony import */ var _PaginationBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationBasic.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationBasic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationBasic.vue?vue&type=template&id=73118e1e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationBasic.vue?vue&type=template&id=73118e1e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationBasic_vue_vue_type_template_id_73118e1e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationButtonContent.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationButtonContent.vue?vue&type=template&id=762a6657 */ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657");
/* harmony import */ var _PaginationButtonContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationButtonContent.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationButtonContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationButtonContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationButtonContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationButtonContent.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationButtonContent_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657 ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationButtonContent.vue?vue&type=template&id=762a6657 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationButtonContent.vue?vue&type=template&id=762a6657");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationButtonContent_vue_vue_type_template_id_762a6657__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationColor.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationColor.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationColor.vue?vue&type=template&id=4e6b46d3 */ "./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3");
/* harmony import */ var _PaginationColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationColor.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationColor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3 ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationColor.vue?vue&type=template&id=4e6b46d3 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationColor.vue?vue&type=template&id=4e6b46d3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationColor_vue_vue_type_template_id_4e6b46d3__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationGoto.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationGoto.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationGoto.vue?vue&type=template&id=7e08d123 */ "./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123");
/* harmony import */ var _PaginationGoto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationGoto.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationGoto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationGoto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationGoto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationGoto.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationGoto_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123 ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationGoto.vue?vue&type=template&id=7e08d123 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationGoto.vue?vue&type=template&id=7e08d123");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationGoto_vue_vue_type_template_id_7e08d123__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationPill.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationPill.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationPill.vue?vue&type=template&id=4c86140e */ "./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e");
/* harmony import */ var _PaginationPill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationPill.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationPill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationPill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationPill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationPill.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationPill_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationPill.vue?vue&type=template&id=4c86140e */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationPill.vue?vue&type=template&id=4c86140e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationPill_vue_vue_type_template_id_4c86140e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSeparated.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSeparated.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationSeparated.vue?vue&type=template&id=72e283de */ "./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de");
/* harmony import */ var _PaginationSeparated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationSeparated.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationSeparated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationSeparated.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSeparated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationSeparated.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSeparated_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationSeparated.vue?vue&type=template&id=72e283de */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSeparated.vue?vue&type=template&id=72e283de");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSeparated_vue_vue_type_template_id_72e283de__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSize.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSize.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaginationSize.vue?vue&type=template&id=28e1b0c1 */ "./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1");
/* harmony import */ var _PaginationSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaginationSize.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaginationSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/pagination/PaginationSize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationSize.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1 ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PaginationSize.vue?vue&type=template&id=28e1b0c1 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/pagination/PaginationSize.vue?vue&type=template&id=28e1b0c1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaginationSize_vue_vue_type_template_id_28e1b0c1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/pagination/code.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/components/pagination/code.js ***!
  \**************************************************************/
/*! exports provided: codeBasic, codeSeparated, codeColorOption, codeGoto, codeSize, codeContent, codePill, codeAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSeparated", function() { return codeSeparated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeColorOption", function() { return codeColorOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGoto", function() { return codeGoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSize", function() { return codeSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeContent", function() { return codeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePill", function() { return codePill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeAlignment", function() { return codeAlignment; });
var codeBasic = "\n<template>\n   <b-pagination\n    v-model=\"currentPage\"\n    hide-goto-end-buttons\n    :total-rows=\"rows\"\n  />\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 1,\n      rows: 100,\n    }\n  },\n}\n</script>\n";
var codeSeparated = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      first-number\n      last-number\n      prev-class=\"prev-item\"\n      next-class=\"next-item\"\n    >\n      <template #prev-text>\n        <feather-icon\n          icon=\"ChevronLeftIcon\"\n          size=\"18\"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          icon=\"ChevronRightIcon\"\n          size=\"18\"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 1,\n    rows: 200,\n  }),\n}\n</script>\n";
var codeColorOption = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      first-number\n      last-number\n      class=\"pagination-success\"\n    >\n      <template #prev-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronLeftIcon\"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronRightIcon\"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      first-number\n      last-number\n      class=\"pagination-danger mt-2\"\n    >\n      <template #prev-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronLeftIcon\"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronRightIcon\"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      first-number\n      last-number\n      class=\"pagination-info mb-0\"\n    >\n      <template #prev-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronLeftIcon\"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size=\"18\"\n          icon=\"ChevronRightIcon\"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n data() {\n    return {\n      codeColorOption,\n      currentPage: 4,\n      perPage: 1,\n      rows: 200,\n    }\n  },\n}\n</script>\n";
var codeGoto = "\n<template>\n  <div>\n    <div>\n      <h6>Goto first button number</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n        :per-page=\"perPage\"\n        first-number\n      />\n    </div>\n    <div class=\"mt-2\">\n      <h6>Goto last button number</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n        :per-page=\"perPage\"\n        last-number\n      />\n    </div>\n    <div class=\"mt-2 demo-spacing-0\">\n      <h6>Goto first and last button number</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n        :per-page=\"perPage\"\n        first-number\n        last-number\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 5,\n    perPage: 1,\n    rows: 100,\n  }),\n}\n</script>\n";
var codeSize = "\n<template>\n  <div>\n    <div>\n      <h6>Small</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n        size=\"sm\"\n      />\n    </div>\n\n    <div class=\"mt-2\">\n      <h6>Default</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n      />\n    </div>\n\n    <div class=\"mt-2 demo-spacing-0\">\n      <h6>Large</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        :total-rows=\"rows\"\n        size=\"lg\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n</script>\n";
var codeContent = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <!-- Use text in props -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      first-text=\"First\"\n      prev-text=\"Prev\"\n      next-text=\"Next\"\n      align=\"left\"\n      last-text=\"Last\"\n    />\n\n    <!-- Use emojis in props -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      first-text=\"\u23EE\"\n      prev-text=\"\u23EA\"\n      next-text=\"\u23E9\"\n      align=\"left\"\n      last-text=\"\u23ED\"\n      class=\"mt-2\"\n    />\n\n    <!-- Use HTML and sub-components in slots -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      :per-page=\"perPage\"\n      align=\"left\"\n      class=\"mt-2\"\n    >\n      <template\n        #first-text\n      >\n        <span class=\"text-success\">First</span>\n      </template>\n      <template #prev-text>\n        <span class=\"text-danger\">Prev</span>\n      </template>\n      <template #next-text>\n        <span class=\"text-warning\">Next</span>\n      </template>\n      <template #last-text>\n        <span class=\"text-info\">Last</span>\n      </template>\n      <template #ellipsis-text>\n        <div>\n          <b-spinner\n            small\n            type=\"grow\"\n          />\n          <b-spinner\n            small\n            type=\"grow\"\n          />\n        </div>\n      </template>\n      <template #page=\"{ page, active }\">\n        <b v-if=\"active\">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination, BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n    BSpinner,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 10,\n    rows: 100,\n  }),\n}\n</script>\n";
var codePill = "\n<template>\n  <div>\n    <div>\n      <h6>Small Pills</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        pills\n        :total-rows=\"rows\"\n        size=\"sm\"\n      />\n    </div>\n\n    <div class=\"mt-2\">\n      <h6>Default Pills</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        pills\n        :total-rows=\"rows\"\n      />\n    </div>\n\n    <div class=\"mt-2 demo-spacing-0\">\n      <h6>Large Pills</h6>\n      <b-pagination\n        v-model=\"currentPage\"\n        pills\n        :total-rows=\"rows\"\n        size=\"lg\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n</script>\n";
var codeAlignment = "\n<template>\n  <div class=\"demo-spacing-0\">\n    <span>Radios using options</span>\n    <div class=\"my-1\">\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"vuexy-radio\"\n        value=\"default\"\n        inline\n      >\n        Default\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"vuexy-radio\"\n        value=\"right\"\n        inline\n      >\n        Right\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"vuexy-radio\"\n        value=\"center\"\n        inline\n      >\n        Center\n      </b-form-radio>\n      <b-form-radio\n        v-model=\"selected\"\n        name=\"vuexy-radio\"\n        value=\"fill\"\n        inline\n      >\n        Fill\n      </b-form-radio>\n    </div>\n\n    <!-- pagination -->\n    <b-pagination\n      v-model=\"currentPage\"\n      :total-rows=\"rows\"\n      base-url=\"#\"\n      :align=\"selected\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BPagination, BFormRadio } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BPagination,\n    BFormRadio,\n  },\n  data() {\n    return {\n      selected: 'default',\n      currentPage: 1,\n      rows: 100,\n    }\n  },\n}\n</script>\n";

/***/ })

}]);