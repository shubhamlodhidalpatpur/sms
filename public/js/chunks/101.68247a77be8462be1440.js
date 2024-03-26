(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _SwitchBasic_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchBasic.vue */ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue");
/* harmony import */ var _SwitchColor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchColor.vue */ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue");
/* harmony import */ var _SwitchIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchIcon.vue */ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue");
/* harmony import */ var _SwitchGrouped_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SwitchGrouped.vue */ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    SwitchBasic: _SwitchBasic_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SwitchColor: _SwitchColor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SwitchIcon: _SwitchIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SwitchGrouped: _SwitchGrouped_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-switch/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_2__["codeBasic"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-switch/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeColor: _code__WEBPACK_IMPORTED_MODULE_2__["codeColor"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-switch/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckboxGroup"]
  },
  data: function data() {
    return {
      options: [{
        text: 'Red',
        value: 'red'
      }, {
        text: 'Green',
        value: 'green'
      }, {
        text: 'Yellow (disabled)',
        value: 'yellow',
        disabled: true
      }, {
        text: 'Blue',
        value: 'blue'
      }],
      selected: [],
      codeGroupArray: _code__WEBPACK_IMPORTED_MODULE_2__["codeGroupArray"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-switch/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"]
  },
  data: function data() {
    return {
      codeIcon: _code__WEBPACK_IMPORTED_MODULE_2__["codeIcon"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268 ***!
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
  return _c("b-row", [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("switch-basic"), _vm._v(" "), _c("switch-color"), _vm._v(" "), _c("switch-icon"), _vm._v(" "), _c("switch-grouped")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Basic Switch"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("A single checkbox can be rendered with a switch appearance by setting the prop ")]), _vm._v(" "), _c("code", [_vm._v("switch")]), _vm._v(" "), _c("span", [_vm._v(" to ")]), _vm._v(" "), _c("code", [_vm._v("true")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, [_c("b-form-checkbox", {
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": "",
      inline: ""
    }
  }, [_vm._v("\n      Active Switch\n    ")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      checked: "false",
      name: "check-button",
      "switch": "",
      inline: ""
    }
  }, [_vm._v("\n      Inactive Switch\n    ")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": "",
      inline: "",
      disabled: ""
    }
  }, [_vm._v("\n      Disabled Active Switch\n    ")]), _vm._v(" "), _c("b-form-checkbox", {
    attrs: {
      checked: "false",
      name: "check-button",
      "switch": "",
      inline: "",
      disabled: ""
    }
  }, [_vm._v("\n      Disabled Inactive Switch\n    ")])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Colors"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeColor) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("Use class ")]), _vm._v(" "), _c("code", [_vm._v(".custom-control-#{$color-name}")]), _vm._v(" "), _c("span", [_vm._v(" with ")]), _vm._v(" "), _c("code", [_vm._v("<b-form-checkbox switch>")]), _vm._v(" "), _c("span", [_vm._v("\n      to change switch's color\n    ")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, [_c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Primary\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-primary",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Secondary\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-secondary",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Success\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-success",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Danger\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-danger",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Warning\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-warning",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Info\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-info",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Dark\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-dark",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106 ***!
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
  return _c("b-card-code", {
    attrs: {
      title: "Grouped switch "
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeGroupArray) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Render groups of checkboxes with the look of a switches by setting the prop switches on ")]), _vm._v(" "), _c("code", [_vm._v("<b-form-checkbox-group>")]), _vm._v(".\n  ")]), _vm._v(" "), _c("div", [_c("b-form-group", {
    attrs: {
      label: "Inline switch style checkboxes"
    }
  }, [_c("b-form-checkbox-group", {
    staticClass: "demo-inline-spacing",
    attrs: {
      options: _vm.options,
      switches: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: "Stacked (vertical) switch style checkboxes"
    }
  }, [_c("b-form-checkbox-group", {
    attrs: {
      options: _vm.options,
      switches: "",
      stacked: ""
    },
    model: {
      value: _vm.selected,
      callback: function callback($$v) {
        _vm.selected = $$v;
      },
      expression: "selected"
    }
  })], 1)], 1), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n    " + _vm._s(_vm.selected) + "\n  ")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681 ***!
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
      title: "Icons"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeIcon) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("Use class ")]), _vm._v(" "), _c("code", [_vm._v(".switch-icon-left & .switch-icon-right")]), _vm._v(" "), _c("span", [_vm._v(" inside of")]), _vm._v(" "), _c("code", [_vm._v("<b-form-checkbox switch>")]), _vm._v(" "), _c("span", [_vm._v(" to create a switch with icon.")])]), _vm._v(" "), _c("div", {
    staticClass: "demo-inline-spacing"
  }, [_c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Primary\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-primary",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "BellIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "BellOffIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Secondary\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-secondary",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "CheckIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "XIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Success\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-success",
    attrs: {
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "Volume2Icon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "VolumeXIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Danger\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-danger",
    attrs: {
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "CameraIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "CameraOffIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Warning\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-warning",
    attrs: {
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "MicIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "MicOffIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Info\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-info",
    attrs: {
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "WifiIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "WifiOffIcon"
    }
  })], 1)])], 1), _vm._v(" "), _c("div", [_c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Dark\n      ")]), _vm._v(" "), _c("b-form-checkbox", {
    staticClass: "custom-control-dark",
    attrs: {
      checked: "true",
      name: "check-button",
      "switch": ""
    }
  }, [_c("span", {
    staticClass: "switch-icon-left"
  }, [_c("feather-icon", {
    attrs: {
      icon: "GithubIcon"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "switch-icon-right"
  }, [_c("feather-icon", {
    attrs: {
      icon: "GitlabIcon"
    }
  })], 1)])], 1)])], 1);
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

/***/ "./resources/js/src/views/forms/form-element/form-switch/Switch.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/Switch.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch.vue?vue&type=template&id=2c7ac268 */ "./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268");
/* harmony import */ var _Switch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switch.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Switch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-switch/Switch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268 ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Switch.vue?vue&type=template&id=2c7ac268 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/Switch.vue?vue&type=template&id=2c7ac268");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Switch_vue_vue_type_template_id_2c7ac268__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchBasic.vue?vue&type=template&id=00519c54 */ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54");
/* harmony import */ var _SwitchBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchBasic.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchBasic.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchBasic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54 ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchBasic.vue?vue&type=template&id=00519c54 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchBasic.vue?vue&type=template&id=00519c54");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchBasic_vue_vue_type_template_id_00519c54__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchColor.vue?vue&type=template&id=499e2aea */ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea");
/* harmony import */ var _SwitchColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchColor.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchColor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchColor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchColor.vue?vue&type=template&id=499e2aea */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchColor.vue?vue&type=template&id=499e2aea");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchColor_vue_vue_type_template_id_499e2aea__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchGrouped.vue?vue&type=template&id=22146106 */ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106");
/* harmony import */ var _SwitchGrouped_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchGrouped.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchGrouped_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchGrouped_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchGrouped.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchGrouped_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106 ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchGrouped.vue?vue&type=template&id=22146106 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchGrouped.vue?vue&type=template&id=22146106");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchGrouped_vue_vue_type_template_id_22146106__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchIcon.vue?vue&type=template&id=11051681 */ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681");
/* harmony import */ var _SwitchIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchIcon.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681 ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchIcon.vue?vue&type=template&id=11051681 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-switch/SwitchIcon.vue?vue&type=template&id=11051681");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchIcon_vue_vue_type_template_id_11051681__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-switch/code.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-switch/code.js ***!
  \***********************************************************************/
/*! exports provided: codeBasic, codeColor, codeIcon, codeGroupArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeColor", function() { return codeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeIcon", function() { return codeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeGroupArray", function() { return codeGroupArray; });
var codeBasic = "\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-form-checkbox\n      checked=\"true\"\n      name=\"check-button\"\n      switch\n      inline\n    >\n      Active Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked=\"false\"\n      name=\"check-button\"\n      switch\n      inline\n    >\n      Inactive Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked=\"true\"\n      name=\"check-button\"\n      switch\n      inline\n      disabled\n    >\n      Disabled Active Switch\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      checked=\"false\"\n      name=\"check-button\"\n      switch\n      inline\n      disabled\n    >\n      Disabled Inactive Switch\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n</script>\n";
var codeColor = "\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    <!-- primary -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-primary\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- secondary -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-secondary\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- success -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-success\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- danger -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-danger\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- warning -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-warning\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- info -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-info\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n\n    <!-- dark -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-dark\"\n        name=\"check-button\"\n        switch\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n</script>\n";
var codeIcon = "\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    <!-- primary -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-primary\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"BellIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"BellOffIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- secondary -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-secondary\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"CheckIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"XIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- success -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        class=\"custom-control-success\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"Volume2Icon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"VolumeXIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- danger -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        class=\"custom-control-danger\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"CameraIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"CameraOffIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- warning -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        class=\"custom-control-warning\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"MicIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"MicOffIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- info -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        class=\"custom-control-info\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"WifiIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"WifiOffIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    <!-- dark -->\n    <div>\n      <b-card-text class=\"mb-0\">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked=\"true\"\n        class=\"custom-control-dark\"\n        name=\"check-button\"\n        switch\n      >\n        <span class=\"switch-icon-left\">\n          <feather-icon icon=\"GithubIcon\" />\n        </span>\n        <span class=\"switch-icon-right\">\n          <feather-icon icon=\"GitlabIcon\" />\n        </span>\n      </b-form-checkbox>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n}\n</script>\n";
var codeGroupArray = "\n<template>\n  <div>\n    <b-form-group label=\"Inline switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        class=\"demo-inline-spacing\"\n      />\n    </b-form-group>\n    <b-form-group label=\"Stacked (vertical) switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        stacked\n      />\n    </b-form-group>\n  </div>\n</template>\n\n\n<script>\nimport { BFormCheckboxGroup, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormCheckboxGroup,\n  },\n  data() {\n    return {\n      options: [\n        { text: 'Red', value: 'red' },\n        { text: 'Green', value: 'green' },\n        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },\n        { text: 'Blue', value: 'blue' },\n      ],\n      selected: [],\n    }\n  },\n}\n</script>\n";

/***/ })

}]);