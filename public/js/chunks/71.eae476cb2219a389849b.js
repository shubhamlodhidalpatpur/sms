(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _MediaLeftAlign_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaLeftAlign.vue */ "./resources/js/src/views/components/media/MediaLeftAlign.vue");
/* harmony import */ var _MediaRightAlign_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaRightAlign.vue */ "./resources/js/src/views/components/media/MediaRightAlign.vue");
/* harmony import */ var _MediaLeftAlignBorder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaLeftAlignBorder.vue */ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue");
/* harmony import */ var _MediaRightAlignBorder_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaRightAlignBorder.vue */ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue");
/* harmony import */ var _MediaNested_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MediaNested.vue */ "./resources/js/src/views/components/media/MediaNested.vue");
/* harmony import */ var _MediaVerticalAlign_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaVerticalAlign.vue */ "./resources/js/src/views/components/media/MediaVerticalAlign.vue");
/* harmony import */ var _MediaNoBody_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MediaNoBody.vue */ "./resources/js/src/views/components/media/MediaNoBody.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    MediaLeftAlign: _MediaLeftAlign_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MediaRightAlign: _MediaRightAlign_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MediaLeftAlignBorder: _MediaLeftAlignBorder_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MediaRightAlignBorder: _MediaRightAlignBorder_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    MediaNested: _MediaNested_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    MediaVerticalAlign: _MediaVerticalAlign_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    MediaNoBody: _MediaNoBody_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"]
  },
  data: function data() {
    return {
      codeLeftAlign: _code__WEBPACK_IMPORTED_MODULE_2__["codeLeftAlign"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  data: function data() {
    return {
      codeLeftAlignBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeLeftAlignBorder"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  data: function data() {
    return {
      codeNested: _code__WEBPACK_IMPORTED_MODULE_2__["codeNested"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaAside"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMediaBody"]
  },
  data: function data() {
    return {
      codeNoBody: _code__WEBPACK_IMPORTED_MODULE_2__["codeNoBody"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  data: function data() {
    return {
      codeRightAlign: _code__WEBPACK_IMPORTED_MODULE_2__["codeRightAlign"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  data: function data() {
    return {
      codeRightAlignBorder: _code__WEBPACK_IMPORTED_MODULE_2__["codeRightAlignBorder"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./resources/js/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/components/media/code.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BMedia"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  data: function data() {
    return {
      codeVerticalAlign: _code__WEBPACK_IMPORTED_MODULE_2__["codeVerticalAlign"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea ***!
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
  return _c("b-row", {
    staticClass: "match-height"
  }, [_c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("media-left-align")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("media-right-align")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("media-left-align-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6"
    }
  }, [_c("media-right-align-border")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("media-nested")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("media-vertical-align")], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("media-no-body")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4 ***!
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
      title: "Left Aligned Media Objects"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeLeftAlign) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_vm._v("\n    The "), _c("code", [_vm._v("media object")]), _vm._v(" helps build complex and repetitive components where some media is positioned alongside content\n    that doesn't wrap around said media. Plus, it does this with only two required classes thanks to flexbox.\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "media-list"
  }, [_c("b-media", {
    attrs: {
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Cookie candy\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    attrs: {
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Tootsie roll dessert\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    attrs: {
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Tootsie roll dessert\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0 ***!
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
      title: "Left Aligned Bordered Media"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeLeftAlignBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Wrap media list using ")]), _vm._v(" "), _c("code", [_vm._v(".media-bordered")]), _vm._v(" "), _c("span", [_vm._v(" class for bordered Media Object.")])]), _vm._v(" "), _c("div", {
    staticClass: "media-list media-bordered"
  }, [_c("b-media", {
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Cookie candy\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-16.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-16.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Tootsie roll dessert\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Tootsie roll dessert\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01 ***!
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
  return _c("b-card-code", {
    attrs: {
      title: "Nested Media"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeNested) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-media", {
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-12.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h5", {
    staticClass: "mt-0"
  }, [_vm._v("\n      Media heading\n    ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n      vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    ")]), _vm._v(" "), _c("b-media", {
    staticClass: "mt-3",
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-13.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h5", {
    staticClass: "mt-0"
  }, [_vm._v("\n        Media heading\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d ***!
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
  return _c("b-card-code", {
    attrs: {
      title: "No body (with sub-components)"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeNoBody) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-media", {
    attrs: {
      "no-body": ""
    }
  }, [_c("b-media-aside", [_c("b-img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      "blank-color": "#ccc",
      fluid: "",
      alt: "placeholder"
    }
  })], 1), _vm._v(" "), _c("b-media-body", {
    staticClass: "ml-1"
  }, [_c("h5", {
    staticClass: "mt-0"
  }, [_vm._v("\n        Media Title\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-1"
  }, [_vm._v("\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et\n        magnis dis parturient montes, nascetur ridiculus mus.\n      ")]), _vm._v(" "), _c("b-media", {
    attrs: {
      "no-body": ""
    }
  }, [_c("b-media-aside", [_c("b-img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      "blank-color": "#ccc",
      width: "64",
      alt: "placeholder"
    }
  })], 1), _vm._v(" "), _c("b-media-body", {
    staticClass: "ml-1"
  }, [_c("h5", {
    staticClass: "mt-0"
  }, [_vm._v("\n            Nested Media\n          ")]), _vm._v(" "), _c("b-card-text", [_vm._v("Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a ***!
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
      title: "Right Aligned Media With Round Images"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeRightAlign) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Change the order of content in media objects by adding ")]), _vm._v(" "), _c("code", [_vm._v("right-align")]), _vm._v(" "), _c("span", [_vm._v(" property.")]), _vm._v(" "), _c("span", [_vm._v("For image circle ")]), _vm._v(" "), _c("code", [_vm._v('rounded="circle"')]), _vm._v(" "), _c("span", [_vm._v(" prop with ")]), _vm._v(" "), _c("code", [_vm._v("<b-img>.")]), _vm._v(" "), _c("span", [_vm._v("Use class ")]), _vm._v(" "), _c("code", [_vm._v("text-right")]), _vm._v(" "), _c("span", [_vm._v(" for text right.")])]), _vm._v(" "), _c("div", {
    staticClass: "media-list"
  }, [_c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": "",
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Oat cake\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Oat cake topping oat cake jelly soufflé donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee\n        donut. Chocolate pie croissant gummi bears muffin dessert chocolate. Generic placeholder image\n      ")])], 1), _vm._v(" "), _c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": "",
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Jelly chocolate cake\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": "",
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Pudding marshmallow\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Right Aligned Bordered Media"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeRightAlignBorder) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Wrap media list using ")]), _vm._v(" "), _c("code", [_vm._v(".media-bordered")]), _vm._v(" "), _c("span", [_vm._v(" class for bordered Media Object.")])]), _vm._v(" "), _c("div", {
    staticClass: "media-list media-bordered"
  }, [_c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": ""
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Chupa chups candy\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Cookie candy dragée marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": ""
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-14.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Chocolate pudding\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Jelly chocolate cake lemon drops halvah dragée caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    staticClass: "text-right",
    attrs: {
      "right-align": ""
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-21.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-21.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder",
            rounded: "circle"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h4", {
    staticClass: "media-heading"
  }, [_vm._v("\n        Cotton candy jelly\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15 ***!
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
      title: "Vertical align"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeVerticalAlign) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-card-text", [_c("span", [_vm._v("Aside can be vertical aligned using ")]), _vm._v(" "), _c("code", [_vm._v("vertical-align")]), _vm._v(" "), _c("span", [_vm._v(" should be either ")]), _vm._v(" "), _c("code", [_vm._v("top, center")]), _vm._v(" "), _c("span", [_vm._v(" or ")]), _vm._v(" "), _c("code", [_vm._v("end")]), _vm._v(" "), _c("span", [_vm._v(" . Default is ")]), _vm._v(" "), _c("code", [_vm._v("top")]), _vm._v(".\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "media-list media-bordered"
  }, [_c("b-media", {
    attrs: {
      "vertical-align": "top"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h5", [_vm._v("\n        Top Aligned Media\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    attrs: {
      "vertical-align": "center"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("\n        Middle Aligned Media\n      ")]), _vm._v(" "), _c("b-card-text", [_vm._v("\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      ")])], 1), _vm._v(" "), _c("b-media", {
    attrs: {
      "vertical-align": "bottom"
    },
    scopedSlots: _vm._u([{
      key: "aside",
      fn: function fn() {
        return [_c("b-img", {
          attrs: {
            src: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-16.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-16.jpg"),
            "blank-color": "#ccc",
            width: "64",
            alt: "placeholder"
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("\n        Bottom Aligned Media\n      ")]), _vm._v(" "), _c("b-card-text", {
    staticClass: "mb-0"
  }, [_vm._v("\n        Chocolate bar apple pie lollipop pastry candy canes. Candy soufflé brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy dragée cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        dragée sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      ")])], 1)], 1)], 1);
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

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-16.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-16.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/portrait/small/avatar-s-16.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-21.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-21.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/sms/resources/js/src/assets/images/portrait/small/avatar-s-21.jpg";

/***/ }),

/***/ "./resources/js/src/views/components/media/Media.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/components/media/Media.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media.vue?vue&type=template&id=78f4d7ea */ "./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea");
/* harmony import */ var _Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/Media.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/Media.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=template&id=78f4d7ea */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/Media.vue?vue&type=template&id=78f4d7ea");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_78f4d7ea__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlign.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlign.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaLeftAlign.vue?vue&type=template&id=3ad9bda4 */ "./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4");
/* harmony import */ var _MediaLeftAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaLeftAlign.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaLeftAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaLeftAlign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaLeftAlign.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4 ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaLeftAlign.vue?vue&type=template&id=3ad9bda4 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlign.vue?vue&type=template&id=3ad9bda4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlign_vue_vue_type_template_id_3ad9bda4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlignBorder.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0 */ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0");
/* harmony import */ var _MediaLeftAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaLeftAlignBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaLeftAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaLeftAlignBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaLeftAlignBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0 ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaLeftAlignBorder.vue?vue&type=template&id=1f609ef0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLeftAlignBorder_vue_vue_type_template_id_1f609ef0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNested.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNested.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaNested.vue?vue&type=template&id=5478fc01 */ "./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01");
/* harmony import */ var _MediaNested_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaNested.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaNested_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaNested.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNested_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaNested.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNested.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNested_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01 ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaNested.vue?vue&type=template&id=5478fc01 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNested.vue?vue&type=template&id=5478fc01");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNested_vue_vue_type_template_id_5478fc01__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNoBody.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNoBody.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaNoBody.vue?vue&type=template&id=33ffa80d */ "./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d");
/* harmony import */ var _MediaNoBody_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaNoBody.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaNoBody_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaNoBody.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNoBody_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaNoBody.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNoBody_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaNoBody.vue?vue&type=template&id=33ffa80d */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaNoBody.vue?vue&type=template&id=33ffa80d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaNoBody_vue_vue_type_template_id_33ffa80d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlign.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlign.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaRightAlign.vue?vue&type=template&id=e2c7a15a */ "./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a");
/* harmony import */ var _MediaRightAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaRightAlign.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaRightAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaRightAlign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaRightAlign.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaRightAlign.vue?vue&type=template&id=e2c7a15a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlign.vue?vue&type=template&id=e2c7a15a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlign_vue_vue_type_template_id_e2c7a15a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlignBorder.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaRightAlignBorder.vue?vue&type=template&id=39a65d42 */ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42");
/* harmony import */ var _MediaRightAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaRightAlignBorder.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaRightAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaRightAlignBorder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaRightAlignBorder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlignBorder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42 ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaRightAlignBorder.vue?vue&type=template&id=39a65d42 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaRightAlignBorder.vue?vue&type=template&id=39a65d42");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaRightAlignBorder_vue_vue_type_template_id_39a65d42__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/MediaVerticalAlign.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaVerticalAlign.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaVerticalAlign.vue?vue&type=template&id=62abcc15 */ "./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15");
/* harmony import */ var _MediaVerticalAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaVerticalAlign.vue?vue&type=script&lang=js */ "./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaVerticalAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/media/MediaVerticalAlign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVerticalAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaVerticalAlign.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVerticalAlign_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15 ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MediaVerticalAlign.vue?vue&type=template&id=62abcc15 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/media/MediaVerticalAlign.vue?vue&type=template&id=62abcc15");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaVerticalAlign_vue_vue_type_template_id_62abcc15__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/components/media/code.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/components/media/code.js ***!
  \*********************************************************/
/*! exports provided: codeLeftAlign, codeLeftAlignBorder, codeNested, codeRightAlign, codeRightAlignBorder, codeVerticalAlign, codeNoBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLeftAlign", function() { return codeLeftAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLeftAlignBorder", function() { return codeLeftAlignBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeNested", function() { return codeNested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRightAlign", function() { return codeRightAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeRightAlignBorder", function() { return codeRightAlignBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVerticalAlign", function() { return codeVerticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeNoBody", function() { return codeNoBody; });
var codeLeftAlign = "\n<template>\n  <div class=\"media-list\">\n    <b-media vertical-align=\"top\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-3.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Cookie candy\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Cookie candy drag\xE9e marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie. Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n    <b-media vertical-align=\"top\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-6.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n    <b-media vertical-align=\"top\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-1.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n</script>\n";
var codeLeftAlignBorder = "\n<template>\n  <div class=\"media-list media-bordered\">\n    <b-media>\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-23.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Cookie candy\n      </h4>\n      <b-card-text>\n        Cookie candy drag\xE9e marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n\n    <b-media>\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-16.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text>\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n\n    <b-media>\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-15.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Tootsie roll dessert\n      </h4>\n      <b-card-text>\n        Tootsie roll dessert tart candy canes ice cream gingerbread cookie. Jelly jelly-o bear claw bear claw halvah.\n        Biscuit icing pastry tootsie roll gingerbread croissant chupa chups.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n</script>\n";
var codeNested = "\n<template>\n  <b-media>\n    <template #aside>\n      <b-img\n        :src=\"require('@/assets/images/portrait/small/avatar-s-12.jpg')\"\n        blank-color=\"#ccc\"\n        width=\"64\"\n        alt=\"placeholder\"\n      />\n    </template>\n\n    <h5 class=\"mt-0\">\n      Media heading\n    </h5>\n    <b-card-text>\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n      vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n      lacinia congue felis in faucibus.\n    </b-card-text>\n\n    <b-media class=\"mt-3\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-13.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n\n      <h5 class=\"mt-0\">\n        Media heading\n      </h5>\n      <b-card-text class=\"mb-0\">\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      </b-card-text>\n    </b-media>\n  </b-media>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n</script>\n";
var codeRightAlign = "\n<template>\n  <div class=\"media-list\">\n    <b-media\n      right-align\n      vertical-align=\"top\"\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-10.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Oat cake\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Oat cake topping oat cake jelly souffl\xE9 donut jelly-o tootsie roll. Candy sweet cake. Tiramisu cookie toffee\n        donut. Chocolate pie croissant gummi bears muffin dessert chocolate. Generic placeholder image\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      vertical-align=\"top\"\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-7.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Jelly chocolate cake\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Jelly chocolate cake lemon drops halvah drag\xE9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      vertical-align=\"top\"\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-2.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Pudding marshmallow\n      </h4>\n      <b-card-text class=\"mb-0\">\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  }\n}\n</script>\n";
var codeRightAlignBorder = "\n<template>\n  <div class=\"media-list media-bordered\">\n    <b-media\n      right-align\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-9.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Chupa chups candy\n      </h4>\n      <b-card-text>\n        Cookie candy drag\xE9e marzipan gingerbread pie pudding. Brownie fruitcake wafer bonbon gummi bears apple pie.\n        Brownie lemon drops chocolate cake donut croissant cotton candy.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-14.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Chocolate pudding\n      </h4>\n      <b-card-text>\n        Jelly chocolate cake lemon drops halvah drag\xE9e caramels jelly-o biscuit. Fruitcake jelly beans marzipan sesame\n        snaps.Jelly beans cake chocolate cake gummi bears lollipop.\n      </b-card-text>\n    </b-media>\n\n    <b-media\n      right-align\n      class=\"text-right\"\n    >\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-21.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n          rounded=\"circle\"\n        />\n      </template>\n      <h4 class=\"media-heading\">\n        Cotton candy jelly\n      </h4>\n      <b-card-text>\n        Pudding marshmallow cheesecake. Chocolate cake apple pie jelly-o bear claw ice cream sugar plum biscuit. Lemon\n        drops brownie biscuit jelly-o biscuit gummies.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n</script>\n";
var codeVerticalAlign = "\n<template>\n  <div class=\"media-list media-bordered\">\n    <b-media vertical-align=\"top\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-4.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h5>\n        Top Aligned Media\n      </h5>\n      <b-card-text>\n        Chocolate bar apple pie lollipop pastry candy canes. Candy souffl\xE9 brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy drag\xE9e cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        drag\xE9e sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n\n    <b-media vertical-align=\"center\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-1.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h5 class=\"mt-1\">\n        Middle Aligned Media\n      </h5>\n      <b-card-text>\n        Chocolate bar apple pie lollipop pastry candy canes. Candy souffl\xE9 brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy drag\xE9e cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        drag\xE9e sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n\n    <b-media vertical-align=\"bottom\">\n      <template #aside>\n        <b-img\n          :src=\"require('@/assets/images/portrait/small/avatar-s-16.jpg')\"\n          blank-color=\"#ccc\"\n          width=\"64\"\n          alt=\"placeholder\"\n        />\n      </template>\n      <h5 class=\"mt-1\">\n        Bottom Aligned Media\n      </h5>\n      <b-card-text class=\"mb-0\">\n        Chocolate bar apple pie lollipop pastry candy canes. Candy souffl\xE9 brownie toffee tootsie roll. Brownie lemon\n        drops chocolate cake donut croissant cotton candy ice cream. Chocolate pudding jelly beans powder carrot cake\n        pastry. Sweet candy drag\xE9e cake brownie cheesecake jelly beans tart lemon drops. Liquorice cake fruitcake\n        drag\xE9e sesame snaps candy canes biscuit pastry. Cookie caramels brownie carrot cake macaroon brownie pastry.\n        Donut powder croissant tootsie roll cake cupcake. Cake tart icing jelly-o ice cream tootsie roll bear claw\n        toffee brownie. Sugar plum danish muffin gummi bears. Bonbon chocolate bar candy canes sugar plum pie\n        gingerbread wafer chupa chups gummi bears. Carrot cake oat cake jujubes cookie. Marzipan topping jelly brownie\n        bear claw. Bonbon gummies fruitcake liquorice tart sesame snaps.\n      </b-card-text>\n    </b-media>\n  </div>\n</template>\n\n<script>\nimport { BMedia, BImg } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n  },\n}\n</script>\n";
var codeNoBody = "\n<template>\n  <b-media no-body>\n    <b-media-aside>\n      <b-img\n        :src=\"require('@/assets/images/portrait/small/avatar-s-2.jpg')\"\n        blank-color=\"#ccc\"\n        fluid\n        alt=\"placeholder\"\n      />\n    </b-media-aside>\n\n    <b-media-body class=\"ml-1\">\n      <h5 class=\"mt-0\">\n        Media Title\n      </h5>\n      <b-card-text>\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,\n        vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n        lacinia congue felis in faucibus.\n      </b-card-text>\n      <b-card-text class=\"mb-1\">\n        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et\n        magnis dis parturient montes, nascetur ridiculus mus.\n      </b-card-text>\n\n      <b-media no-body>\n        <b-media-aside>\n          <b-img\n            :src=\"require('@/assets/images/portrait/small/avatar-s-10.jpg')\"\n            blank-color=\"#ccc\"\n            width=\"64\"\n            alt=\"placeholder\"\n          />\n        </b-media-aside>\n        <b-media-body class=\"ml-1\">\n          <h5 class=\"mt-0\">\n            Nested Media\n          </h5>\n          <b-card-text>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</b-card-text>\n        </b-media-body>\n      </b-media>\n    </b-media-body>\n  </b-media>\n</template>\n\n<script>\nimport { BMedia, BImg, BMediaAside, BMediaBody } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BMedia,\n    BImg,\n    BMediaAside,\n    BMediaBody,\n  },\n}\n</script>\n";

/***/ })

}]);