(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./resources/js/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cleave.js/dist/addons/cleave-phone.us */ "./node_modules/cleave.js/dist/addons/cleave-phone.us.js");
/* harmony import */ var cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cleave_js_dist_addons_cleave_phone_us__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./resources/js/src/views/forms/form-element/form-input-mask/code.js");



// eslint-disable-next-line import/no-extraneous-dependencies


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroupPrepend"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BInputGroup"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"]
  },
  data: function data() {
    return {
      form: {
        cardNumber: null,
        date: null,
        phone: null
      },
      options: {
        creditCard: {
          creditCard: true
        },
        date: {
          date: true,
          delimiter: '-',
          datePattern: ['Y', 'm', 'd']
        },
        phone: {
          phone: true,
          phoneRegionCode: 'US'
        },
        time: {
          time: true,
          timePattern: ['h', 'm', 's']
        },
        number: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand'
        },
        block: {
          blocks: [4, 3, 3],
          uppercase: true
        },
        delimiter: {
          delimiter: '·',
          blocks: [3, 3, 3],
          uppercase: true
        },
        customDelimiter: {
          delimiters: ['.', '.', '-'],
          blocks: [3, 3, 3, 2],
          uppercase: true
        },
        prefix: {
          prefix: '+63',
          blocks: [3, 3, 3, 4],
          uppercase: true
        }
      },
      codeMask: _code__WEBPACK_IMPORTED_MODULE_4__["codeMask"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
      title: "Input Mask"
    },
    scopedSlots: _vm._u([{
      key: "code",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.codeMask) + "\n  ")];
      },
      proxy: true
    }])
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Credit Card",
      "label-for": "cardNumber"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "cardNumber",
      raw: false,
      options: _vm.options.creditCard,
      placeholder: "0000 0000 0000 0000"
    },
    model: {
      value: _vm.form.cardNumber,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "cardNumber", $$v);
      },
      expression: "form.cardNumber"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Phone Number",
      "label-for": "phone"
    }
  }, [_c("b-input-group", [_c("b-input-group-prepend", {
    attrs: {
      "is-text": ""
    }
  }, [_vm._v("\n            US (+1)\n          ")]), _vm._v(" "), _c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "phone",
      raw: false,
      options: _vm.options.phone,
      placeholder: "1234 567 8900"
    },
    model: {
      value: _vm.form.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Date",
      "label-for": "date"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "date",
      raw: false,
      options: _vm.options.date,
      placeholder: "YYYY-MM-DD"
    },
    model: {
      value: _vm.form.date,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "date", $$v);
      },
      expression: "form.date"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Time",
      "label-for": "time"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "time",
      raw: false,
      options: _vm.options.time,
      placeholder: "hh:mm:ss"
    },
    model: {
      value: _vm.form.time,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "time", $$v);
      },
      expression: "form.time"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Numeral Formatting",
      "label-for": "number"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "number",
      raw: false,
      options: _vm.options.number,
      placeholder: "10,000"
    },
    model: {
      value: _vm.form.number,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "number", $$v);
      },
      expression: "form.number"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Blocks",
      "label-for": "block"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "block",
      raw: false,
      options: _vm.options.block,
      placeholder: "Block [4,3,3]"
    },
    model: {
      value: _vm.form.block,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "block", $$v);
      },
      expression: "form.block"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Delimiters",
      "label-for": "delimiter"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "delimiter",
      raw: false,
      options: _vm.options.delimiter,
      placeholder: "Delimiter: '.'"
    },
    model: {
      value: _vm.form.delimiter,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "delimiter", $$v);
      },
      expression: "form.delimiter"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Custom Delimiters",
      "label-for": "customDelimiter"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "customDelimiter",
      raw: false,
      options: _vm.options.customDelimiter,
      placeholder: "Delimiter: ['.', '.', '-']"
    },
    model: {
      value: _vm.form.customDelimiter,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "customDelimiter", $$v);
      },
      expression: "form.customDelimiter"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      xl: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Prefix",
      "label-for": "prefix"
    }
  }, [_c("cleave", {
    staticClass: "form-control",
    attrs: {
      id: "prefix",
      raw: false,
      options: _vm.options.prefix
    },
    model: {
      value: _vm.form.prefix,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "prefix", $$v);
      },
      expression: "form.prefix"
    }
  })], 1)], 1)], 1)], 1);
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

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInputMask.vue?vue&type=template&id=398ddc89 */ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89");
/* harmony import */ var _FormInputMask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormInputMask.vue?vue&type=script&lang=js */ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormInputMask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormInputMask.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89 ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormInputMask.vue?vue&type=template&id=398ddc89 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/forms/form-element/form-input-mask/FormInputMask.vue?vue&type=template&id=398ddc89");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FormInputMask_vue_vue_type_template_id_398ddc89__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/forms/form-element/form-input-mask/code.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/forms/form-element/form-input-mask/code.js ***!
  \***************************************************************************/
/*! exports provided: codeMask, codeDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMask", function() { return codeMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeDefault", function() { return codeDefault; });
var codeMask = "\n<template>\n  <b-row>\n\n    <!-- credit card -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Credit Card\"\n        label-for=\"cardNumber\"\n      >\n        <cleave\n          id=\"cardNumber\"\n          v-model=\"form.cardNumber\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.creditCard\"\n          placeholder=\"0000 0000 0000 0000\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- phone number -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Phone Number\"\n        label-for=\"phone\"\n      >\n        <b-input-group>\n          <b-input-group-prepend is-text>\n            US (+1)\n          </b-input-group-prepend>\n          <cleave\n            id=\"phone\"\n            v-model=\"form.phone\"\n            class=\"form-control\"\n            :raw=\"false\"\n            :options=\"options.phone\"\n            placeholder=\"1234 567 8900\"\n          />\n        </b-input-group>\n\n      </b-form-group>\n    </b-col>\n\n    <!-- date -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Date\"\n        label-for=\"date\"\n      >\n        <cleave\n          id=\"date\"\n          v-model=\"form.date\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.date\"\n          placeholder=\"YYYY-MM-DD\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- time -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Time\"\n        label-for=\"time\"\n      >\n        <cleave\n          id=\"time\"\n          v-model=\"form.time\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.time\"\n          placeholder=\"hh:mm:ss\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- Numeral Formatting -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Numeral Formatting\"\n        label-for=\"number\"\n      >\n        <cleave\n          id=\"number\"\n          v-model=\"form.number\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.number\"\n          placeholder=\"10,000\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- block -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Blocks\"\n        label-for=\"block\"\n      >\n        <cleave\n          id=\"block\"\n          v-model=\"form.block\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.block\"\n          placeholder=\"Block [4,3,3]\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- delimiters -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Delimiters\"\n        label-for=\"delimiter\"\n      >\n        <cleave\n          id=\"delimiter\"\n          v-model=\"form.delimiter\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.delimiter\"\n          placeholder=\"Delimiter: '.'\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- Custom Delimiters -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Custom Delimiters\"\n        label-for=\"customDelimiter\"\n      >\n        <cleave\n          id=\"customDelimiter\"\n          v-model=\"form.customDelimiter\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.customDelimiter\"\n          placeholder=\"Delimiter: ['.', '.', '-']\"\n        />\n      </b-form-group>\n    </b-col>\n\n    <!-- prefix -->\n    <b-col\n      md=\"6\"\n      xl=\"4\"\n    >\n      <b-form-group\n        label=\"Prefix\"\n        label-for=\"prefix\"\n      >\n        <cleave\n          id=\"prefix\"\n          v-model=\"form.prefix\"\n          class=\"form-control\"\n          :raw=\"false\"\n          :options=\"options.prefix\"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BRow, BCol, BFormGroup, BInputGroupPrepend, BInputGroup} from 'bootstrap-vue'\nimport Cleave from 'vue-cleave-component'\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport 'cleave.js/dist/addons/cleave-phone.us'\n\nexport default {\n  components: {\n    BFormGroup,\n    BInputGroupPrepend,\n    BInputGroup,\n    Cleave,\n    BRow,\n    BCol,\n  },\n  data() {\n    return {\n      form: {\n        cardNumber: null,\n        date: null,\n        phone: null,\n      },\n      options: {\n        creditCard: {\n          creditCard: true,\n        },\n        date: {\n          date: true,\n          delimiter: '-',\n          datePattern: ['Y', 'm', 'd'],\n        },\n        phone: {\n          phone: true,\n          phoneRegionCode: 'US',\n        },\n        time: {\n          time: true,\n          timePattern: ['h', 'm', 's'],\n        },\n        number: {\n          numeral: true,\n          numeralThousandsGroupStyle: 'thousand',\n        },\n        block: {\n          blocks: [4, 3, 3],\n          uppercase: true,\n        },\n        delimiter: {\n          delimiter: '\xB7',\n          blocks: [3, 3, 3],\n          uppercase: true,\n        },\n        customDelimiter: {\n          delimiters: ['.', '.', '-'],\n          blocks: [3, 3, 3, 2],\n          uppercase: true,\n        },\n        prefix: {\n          prefix: '+63',\n          blocks: [3, 3, 3, 4],\n          uppercase: true,\n        },\n      },\n    }\n  },\n}\n</script> \n";
var codeDefault = '';

/***/ })

}]);