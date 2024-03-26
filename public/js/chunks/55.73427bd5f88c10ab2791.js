(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _SpinnerBorder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerBorder.vue */ "./resources/js/src/views/components/spinner/SpinnerBorder.vue");
/* harmony import */ var _SpinnerColor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpinnerColor.vue */ "./resources/js/src/views/components/spinner/SpinnerColor.vue");
/* harmony import */ var _SpinnerGrow_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpinnerGrow.vue */ "./resources/js/src/views/components/spinner/SpinnerGrow.vue");
/* harmony import */ var _SpinnerGrowColor_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpinnerGrowColor.vue */ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue");
/* harmony import */ var _SpinnerSize_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpinnerSize.vue */ "./resources/js/src/views/components/spinner/SpinnerSize.vue");
/* harmony import */ var _SpinnerFlex_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpinnerFlex.vue */ "./resources/js/src/views/components/spinner/SpinnerFlex.vue");
/* harmony import */ var _SpinnerFloat_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpinnerFloat.vue */ "./resources/js/src/views/components/spinner/SpinnerFloat.vue");
/* harmony import */ var _SpinnerTextAlign_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SpinnerTextAlign.vue */ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue");
/* harmony import */ var _SpinnerButton_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpinnerButton.vue */ "./resources/js/src/views/components/spinner/SpinnerButton.vue");










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    SpinnerBorder: _SpinnerBorder_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SpinnerColor: _SpinnerColor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SpinnerGrow: _SpinnerGrow_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SpinnerGrowColor: _SpinnerGrowColor_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SpinnerSize: _SpinnerSize_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SpinnerFlex: _SpinnerFlex_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    SpinnerFloat: _SpinnerFloat_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    SpinnerTextAlign: _SpinnerTextAlign_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    SpinnerButton: _SpinnerButton_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeBorder"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeButton: _code__WEBPACK_IMPORTED_MODULE_2__["codeButton"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      codeBorderColor: _code__WEBPACK_IMPORTED_MODULE_2__["codeBorderColor"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeFlex: _code__WEBPACK_IMPORTED_MODULE_2__["codeFlex"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeFloat: _code__WEBPACK_IMPORTED_MODULE_2__["codeFloat"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeGrow: _code__WEBPACK_IMPORTED_MODULE_2__["codeGrow"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],
      codeGrowColor: _code__WEBPACK_IMPORTED_MODULE_2__["codeGrowColor"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeSize: _code__WEBPACK_IMPORTED_MODULE_2__["codeSize"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/spinner/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeTextAlign: _code__WEBPACK_IMPORTED_MODULE_2__["codeTextAlign"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8 ***!
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
  return _c("b-row", {
    staticClass: "match-height"
  }, [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-color")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-grow")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-grow-color")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-flex")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-float")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-text-align")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("spinner-size")], 1), _vm._v(" "), _c("b-col", [_c("spinner-button")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0 ***!
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
      title: "Border Spinners"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Use the default ")]), _vm._v(" "), _c("code", [_vm._v("border")]), _vm._v(" "), _c("span", [_vm._v(" type spinners for a lightweight loading indicator.")])]), _vm._v(" "), _c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6 ***!
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
      title: "Buttons"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeButton) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n    Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the\n    label text out of the spinner element and utilize button text as needed.\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, [_c("b-button", {
    attrs: {
      variant: "outline-primary",
      disabled: ""
    }
  }, [_c("b-spinner", {
    attrs: {
      small: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "outline-primary",
      disabled: ""
    }
  }, [_c("b-spinner", {
    attrs: {
      small: ""
    }
  }), _vm._v("\n      Loading...\n    ")], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "outline-primary",
      disabled: ""
    }
  }, [_c("b-spinner", {
    attrs: {
      small: "",
      type: "grow"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "outline-primary",
      disabled: ""
    }
  }, [_c("b-spinner", {
    attrs: {
      small: "",
      type: "grow"
    }
  }), _vm._v("\n      Loading...\n    ")], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Colored Spinners"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBorderColor) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("You can customize the color using the standard text color variants using the ")]), _vm._v(" "), _c("code", [_vm._v("variant")]), _vm._v(" "), _c("span", [_vm._v(" prop.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, _vm._l(_vm.variants, function (variant) {
    return _c("b-spinner", {
      key: variant,
      staticClass: "mr-1",
      attrs: {
        variant: variant
      }
    });
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d ***!
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
      title: "Flex"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeFlex) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("\n    Using flex utility classes:\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-center mb-1"
  }, [_c("b-spinner", {
    attrs: {
      label: "Loading..."
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("strong", [_vm._v("Loading...")]), _vm._v(" "), _c("b-spinner", {
    staticClass: "ml-auto"
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Float"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeFloat) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("Using float utility classes:")]), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }, [_c("b-spinner", {
    staticClass: "float-right",
    attrs: {
      label: "Floated Right"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572 ***!
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
      title: "Growing Spinner"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeGrow) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("If you don't fancy a ")]), _vm._v(" "), _c("code", [_vm._v("border")]), _vm._v(" "), _c("span", [_vm._v(" spinner, switch to the ")]), _vm._v(" "), _c("code", [_vm._v("grow")]), _vm._v(" "), _c("span", [_vm._v(" spinner by setting the prop ")]), _vm._v(" "), _c("code", [_vm._v("type")]), _vm._v(" "), _c("span", [_vm._v(" to ")]), _vm._v(" "), _c("code", [_vm._v("'grow'")]), _vm._v(".\n    "), _c("span", [_vm._v("While it doesn't technically spin, it does repeatedly grow!")])]), _vm._v(" "), _c("b-spinner", {
    attrs: {
      type: "grow",
      label: "Loading..."
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c ***!
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
      title: "Colored Growing Spinners"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeGrowColor) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("The variant prop translates the variant name to the Bootstrap v4 class ")]), _vm._v(" "), _c("code", [_vm._v(".text-{variant}")]), _vm._v(" "), _c("span", [_vm._v(", so if you have custom defined text color ")]), _vm._v(" "), _c("code", [_vm._v("variants")]), _vm._v(" "), _c("span", [_vm._v(", feel free to use them via the variant prop.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, _vm._l(_vm.variants, function (variant) {
    return _c("b-spinner", {
      key: variant,
      staticClass: "mr-1",
      attrs: {
        variant: variant,
        type: "grow"
      }
    });
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96 ***!
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
      title: "Sizes"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeSize) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("Set the prop ")]), _vm._v(" "), _c("code", [_vm._v("small")]), _vm._v(" "), _c("span", [_vm._v(" to ")]), _vm._v(" "), _c("code", [_vm._v("true")]), _vm._v(" "), _c("span", [_vm._v(" to make a smaller spinner that can quickly be used within other components.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, [_c("div", [_c("b-spinner", {
    staticClass: "mr-1",
    attrs: {
      small: "",
      label: "Small Spinner"
    }
  }), _vm._v(" "), _c("b-spinner", {
    attrs: {
      small: "",
      label: "Small Spinner",
      type: "grow"
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-spinner", {
    staticClass: "mr-1",
    attrs: {
      label: "Small Spinner"
    }
  }), _vm._v(" "), _c("b-spinner", {
    attrs: {
      label: "Small Spinner",
      type: "grow"
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-spinner", {
    staticClass: "mr-1",
    staticStyle: {
      width: "3rem",
      height: "3rem"
    },
    attrs: {
      label: "Large Spinner"
    }
  }), _vm._v(" "), _c("b-spinner", {
    staticStyle: {
      width: "3rem",
      height: "3rem"
    },
    attrs: {
      label: "Large Spinner",
      type: "grow"
    }
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4 ***!
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
      title: "Text Alignment"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeTextAlign) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("Using text alignment utility classes:")]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("b-spinner", {
    attrs: {
      variant: "primary",
      label: "Text Centered"
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

/***/ "./resources/js/src/views/components/spinner/Spinner.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/Spinner.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=9a1836d8 */ "./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8");
/* harmony import */ var _Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/Spinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8 ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=template&id=9a1836d8 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/Spinner.vue?vue&type=template&id=9a1836d8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_9a1836d8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerBorder.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerBorder.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerBorder.vue?vue&type=template&id=609dd1e0 */ "./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0");
/* harmony import */ var _SpinnerBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0 ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerBorder.vue?vue&type=template&id=609dd1e0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerBorder.vue?vue&type=template&id=609dd1e0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerBorder_vue_vue_type_template_id_609dd1e0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerButton.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerButton.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerButton.vue?vue&type=template&id=093691e6 */ "./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6");
/* harmony import */ var _SpinnerButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerButton.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6 ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerButton.vue?vue&type=template&id=093691e6 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerButton.vue?vue&type=template&id=093691e6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerButton_vue_vue_type_template_id_093691e6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerColor.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerColor.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerColor.vue?vue&type=template&id=6f9b7842 */ "./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842");
/* harmony import */ var _SpinnerColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerColor.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerColor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842 ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerColor.vue?vue&type=template&id=6f9b7842 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerColor.vue?vue&type=template&id=6f9b7842");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerColor_vue_vue_type_template_id_6f9b7842__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFlex.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFlex.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerFlex.vue?vue&type=template&id=287a462d */ "./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d");
/* harmony import */ var _SpinnerFlex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerFlex.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerFlex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerFlex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFlex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerFlex.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFlex_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerFlex.vue?vue&type=template&id=287a462d */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFlex.vue?vue&type=template&id=287a462d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFlex_vue_vue_type_template_id_287a462d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFloat.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFloat.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerFloat.vue?vue&type=template&id=5771db50 */ "./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50");
/* harmony import */ var _SpinnerFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerFloat.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerFloat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerFloat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFloat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50 ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerFloat.vue?vue&type=template&id=5771db50 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerFloat.vue?vue&type=template&id=5771db50");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerFloat_vue_vue_type_template_id_5771db50__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrow.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrow.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerGrow.vue?vue&type=template&id=42799572 */ "./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572");
/* harmony import */ var _SpinnerGrow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerGrow.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerGrow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerGrow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerGrow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572 ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerGrow.vue?vue&type=template&id=42799572 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrow.vue?vue&type=template&id=42799572");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrow_vue_vue_type_template_id_42799572__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrowColor.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c */ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c");
/* harmony import */ var _SpinnerGrowColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerGrowColor.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerGrowColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerGrowColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrowColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerGrowColor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrowColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerGrowColor.vue?vue&type=template&id=5ae86b0c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerGrowColor_vue_vue_type_template_id_5ae86b0c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerSize.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerSize.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerSize.vue?vue&type=template&id=19fe3b96 */ "./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96");
/* harmony import */ var _SpinnerSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerSize.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerSize.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerSize.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerSize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96 ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerSize.vue?vue&type=template&id=19fe3b96 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerSize.vue?vue&type=template&id=19fe3b96");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerSize_vue_vue_type_template_id_19fe3b96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerTextAlign.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerTextAlign.vue?vue&type=template&id=65fa15d4 */ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4");
/* harmony import */ var _SpinnerTextAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerTextAlign.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SpinnerTextAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/spinner/SpinnerTextAlign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerTextAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerTextAlign.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerTextAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4 ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpinnerTextAlign.vue?vue&type=template&id=65fa15d4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/spinner/SpinnerTextAlign.vue?vue&type=template&id=65fa15d4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpinnerTextAlign_vue_vue_type_template_id_65fa15d4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/spinner/code.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/components/spinner/code.js ***!
  \***********************************************************/
/*! exports provided: codeBorder, codeBorderColor, codeButton, codeFlex, codeFloat, codeGrow, codeGrowColor, codeSize, codeTextAlign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBorder", function() { return codeBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBorderColor", function() { return codeBorderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeButton", function() { return codeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFlex", function() { return codeFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFloat", function() { return codeFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGrow", function() { return codeGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGrowColor", function() { return codeGrowColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSize", function() { return codeSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeTextAlign", function() { return codeTextAlign; });
var codeBorder = "\n<template>\n  <b-spinner label=\"Loading...\" />\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n</script>\n";
var codeBorderColor = "\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      class=\"mr-1\"\n      :variant=\"variant\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n</script>\n";
var codeButton = "\n<template>\n  <div>\n    <b-button\n      variant=\"primary\"\n      disabled\n      class=\"mr-1\"\n    >\n      <b-spinner small />\n      <span class=\"sr-only\">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant=\"primary\"\n      disabled\n      class=\"mr-1\"\n    >\n      <b-spinner small />\n      Loading...\n    </b-button>\n\n    <b-button\n      variant=\"primary\"\n      disabled\n      class=\"mr-1\"\n    >\n      <b-spinner\n        small\n        type=\"grow\"\n      />\n      <span class=\"sr-only\">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant=\"primary\"\n      disabled\n      class=\"mr-1\"\n    >\n      <b-spinner\n        small\n        type=\"grow\"\n      />\n      Loading...\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BSpinner, BButton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BButton,\n    BSpinner,\n  },\n}\n</script>\n";
var codeFlex = "\n<template>\n  <div>\n    <div class=\"d-flex justify-content-center mb-1\">\n      <b-spinner label=\"Loading...\" />\n    </div>\n    <div class=\"d-flex align-items-center\">\n      <strong>Loading...</strong>\n      <b-spinner class=\"ml-auto\" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n</script>\n";
var codeFloat = "\n<template>\n  <div class=\"clearfix\">\n    <b-spinner class=\"float-right\" label=\"Floated Right\" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n</script>\n";
var codeGrow = "\n<template>\n  <b-spinner type=\"grow\" label=\"Loading...\" />\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n</script>\n";
var codeGrowColor = "\n<template>\n  <div class=\"d-flex flex-wrap\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      :variant=\"variant\"\n      class=\"mr-1\"\n      type=\"grow\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n</script>\n";
var codeSize = "\n<template>\n  <div class=\"text-center d-flex justify-content-between\">\n    <div>\n      <b-spinner\n        small\n        class=\"mr-1\"\n        label=\"Small Spinner\"\n      />\n      <b-spinner\n        small\n        label=\"Small Spinner\"\n        type=\"grow\"\n      />\n    </div>\n    <div>\n      <b-spinner\n        class=\"mr-1\"\n        label=\"Small Spinner\"\n      />\n      <b-spinner\n        label=\"Small Spinner\"\n        type=\"grow\"\n      />\n    </div>\n    <div>\n      <b-spinner\n        style=\"width: 3rem; height: 3rem;\"\n        class=\"mr-1\"\n        label=\"Large Spinner\"\n      />\n      <b-spinner\n        style=\"width: 3rem; height: 3rem;\"\n        label=\"Large Spinner\"\n        type=\"grow\"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n</script>\n";
var codeTextAlign = "\n<template>\n  <div class=\"text-center\">\n    <b-spinner variant=\"primary\" label=\"Text Centered\" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  }\n}\n</script>\n";

/***/ })

}]);