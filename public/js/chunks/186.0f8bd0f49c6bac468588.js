(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[186],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _department_Department_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../department/Department.vue */ "./resources/js/src/views/sms/department/Department.vue");
/* harmony import */ var _BU_BU_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../BU/BU.vue */ "./resources/js/src/views/sms/BU/BU.vue");
/* harmony import */ var _team_Team_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../team/Team.vue */ "./resources/js/src/views/sms/team/Team.vue");
/* harmony import */ var _role_Role_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../role/Role.vue */ "./resources/js/src/views/sms/role/Role.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // import { quillEditor } from "vue-quill-editor";

 // import { avatarText } from "@core/utils/filter";


 // import { useRouter } from "@core/utils/utils";









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    role: _role_Role_vue__WEBPACK_IMPORTED_MODULE_22__["default"],
    team: _team_Team_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    department: _department_Department_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_7__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_7__["ValidationObserver"],
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_5__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_5__["TabContent"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormInput"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormInvalidFeedback"],
    ToastificationContent: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAvatar"],
    // quillEditor,
    BToast: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BToast"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormCheckbox"],
    BPopover: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BPopover"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BLink"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BOverlay"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_16___default.a,
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormRadioGroup"],
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTags"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BInputGroupAppend"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BCard"],
    BFormTimepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BFormTimepicker"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["BTable"]
  },
  directives: {
    'b-popover': bootstrap_vue__WEBPACK_IMPORTED_MODULE_11__["VBPopover"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    return {
      hourDial1: 0,
      minitDial1: 0,
      hourDial2: 0,
      minitDial2: 0,
      frequencyTime2: null,
      form: {
        overviewForm: {
          formType: 'overview',
          company_name: null,
          phone: null,
          email: null,
          street: null,
          country: null,
          state: null,
          city: null,
          pincode: null,
          employee_strength: null,
          industry_type: null
        },
        systemForm: {
          formType: 'systemForm',
          working_day: [],
          swift_base: false,
          no_of_swift: null,
          shift: [{
            title: "Working hours",
            from: null,
            to: null
          }],
          quarter: null,
          QuarterTableData: []
        },
        BUForm: {
          formType: 'BUForm',
          BU: null
        },
        BranchForm: {
          formType: 'BranchForm',
          Branch: null
        },
        departmentForm: {
          formType: 'departmentForm',
          departments: null
        },
        teamForm: {
          formType: 'teams',
          department: null,
          teams: null
        },
        roleForm: {
          formType: 'roles',
          department: null,
          roles: null
        }
      },
      departmentOptions: [],
      selected: [],
      required: _validations__WEBPACK_IMPORTED_MODULE_12__["required"],
      email: _validations__WEBPACK_IMPORTED_MODULE_12__["email"],
      DepartmentDemo: ['Sales', 'Marketing', 'Accounts', 'Human Resource', 'Project Delivery'],
      TeamDemo: ['Domestic Sales Team', 'International Sales Team'],
      RoleDemo: ['Sales manager', 'Assistant sales managers', 'Account executives', 'Customer success representatives', 'Sales specialists'],
      //   IndustryOptions: [
      //   { text: 'True', value: 'true' },
      //   { text: 'False', value: 'false' },
      // ],
      countryName: [],
      // avatarText,
      acountOption: [],
      userOptions: [],
      userListOptions: [],
      rolesOptions: [],
      EmployeeCountryOptions: [],
      StateOptions: [],
      CityOptions: [],
      industryTypeOption: [],
      WeekdayOption: [],
      DayOptions: [{
        label: 'Sunday',
        value: '1'
      }, {
        label: 'Monday',
        value: '2'
      }, {
        label: 'Tuesday',
        value: '3'
      }, {
        label: 'Wednesday',
        value: '4'
      }, {
        label: 'Thursday',
        value: '5'
      }, {
        label: 'Friday',
        value: '6'
      }, {
        label: 'Saturday',
        value: '7'
      }],
      QuarterOptions: [{
        text: 'January To December ',
        value: 'JtoD'
      }, {
        text: 'April To March',
        value: 'AtoM'
      }],
      currentForm: null,
      activeTab: 'overviewForm',
      activeTabIndex: 0,
      tabRefs: ['overviewForm', 'systemForm', 'BUForm', 'BranchForm', 'departmentForm', 'teamForm', 'roleForm', 'finishForm']
    };
  },
  methods: {
    hourDialSlider1: function hourDialSlider1(e) {
      var clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value;

      if (this.hourDial1 == 24) {
        this.minitDial1 = 0;
      } // this.hourDial1 = ((val - min) * 24 / (max - min)).toFixed(0);


      var ratingBox = document.getElementById("hourDialSliderID1");
    },
    minitDialSlider1: function minitDialSlider1(e) {
      var clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value; // this.minitDial1 = ((val - min) * 60 / (max - min)).toFixed(0);

      var ratingBox = document.getElementById("minitDialSliderID1");
    },
    hourDialSlider2: function hourDialSlider2(e) {
      var clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value;

      if (this.hourDial2 == 24) {
        this.minitDial2 = 0;
      } // this.hourDial2 = ((val - min) * 24 / (max - min)).toFixed(0);


      var ratingBox = document.getElementById("hourDialSliderID2");
    },
    minitDialSlider2: function minitDialSlider2(e) {
      var clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value; // this.minitDial2 = ((val - min) * 60 / (max - min)).toFixed(0);

      var ratingBox = document.getElementById("minitDialSliderID2");
    },
    validationForm: function validationForm() {
      var _this = this;

      console.log("this.activeTab", this.activeTabIndex, this.tabRefs[this.activeTabIndex], this.form[this.tabRefs[this.activeTabIndex]]);
      return new Promise(function (resolve, reject) {
        _this.$refs[_this.tabRefs[_this.activeTabIndex]].validate().then(function (success) {
          if (success) {
            _axios__WEBPACK_IMPORTED_MODULE_15__["default"].post("submitRegistrationForm", _this.form[_this.tabRefs[_this.activeTabIndex]]).then(function (response) {
              if (_this.tabRefs[_this.activeTabIndex + 1] == 'teamForm') {
                _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get('Department').then(function (response) {
                  console.log("department", response.data.data);
                  _this.departmentOptions = response.data.data;
                });
              }

              resolve(true);
            })["catch"](function (error) {
              if (error.response.data.code == 422) {
                _this.errors = error.response.data.errors;
              }

              reject();
            });
          } else {
            reject();
          }
        });
      });
    },
    formSubmitted: function formSubmitted() {
      var _this2 = this;

      // axios.get('setupCompleted').then(() => {
      this.$router.replace('/dashboard').then(function () {
        _this2.$toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
          position: 'top-right',
          props: {
            title: "Welcome",
            icon: 'CoffeeIcon',
            variant: 'success',
            text: "You have successfully logged in as ".concat(userData.role, ". Now you can start to explore!")
          }
        });
      }); // })
      // .catch(err => {
      //   alert("Something went wrong! Please try again later.")
      // })
    },
    handleTabChanged: function handleTabChanged(prevIndex, nextIndex) {
      this.activeTabIndex = nextIndex;
    },
    onChange: function onChange(element, value) {
      var _this3 = this;

      if (element == "country") {
        this.StateOptions = [];
        this.form.overviewForm.state = [];
        this.CityOptions = [];
        this.form.overviewForm.city = [];
        _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/getStateFromCountryId/".concat(value)).then(function (response) {
          _this3.StateOptions = JSON.parse(JSON.stringify(response.data.data));
        });
      }

      if (element == "state") {
        this.CityOptions = [];
        this.form.overviewForm.city = [];
        _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/getCityFromStateId/".concat(value)).then(function (response) {
          _this3.CityOptions = JSON.parse(JSON.stringify(response.data.data));
        });
      }
    },
    updateSetupForm: function updateSetupForm(number) {
      this.form.systemForm.shift = [];

      if (number) {
        this.form.systemForm.shift = [];
        var i = 1;

        for (i = 1; i <= number; i = i + 1) {
          this.form.systemForm.shift.push({
            title: "Shift ".concat(i),
            from: null,
            to: null
          });
        }
      }

      console.log("test", this.form.systemForm.shift);
    },
    QuarterChange: function QuarterChange(value) {
      this.form.systemForm.QuarterTableData = [];

      if (value == 'JtoD') {
        this.form.systemForm.QuarterTableData.push({
          title: "Quarter 1 ",
          from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-01-01',
          to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-03-31'
        }, {
          title: "Quarter 2",
          from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-04-01',
          to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-06-30'
        }, {
          title: "Quarter 3",
          from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-07-01',
          to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-09-30'
        }, {
          title: "Quarter 4",
          from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-10-01',
          to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-12-31'
        });
      } else {
        if (moment__WEBPACK_IMPORTED_MODULE_18___default()().format("M") <= 3) {
          this.form.systemForm.QuarterTableData.push({
            title: "Quarter 1",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-04-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-06-30'
          }, {
            title: "Quarter 2",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-07-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-09-30'
          }, {
            title: "Quarter 3",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-10-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().subtract(1, 'Y').format("YYYY") + '-12-31'
          }, {
            title: "Quarter 4",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-01-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-03-31'
          });
        } else {
          this.form.systemForm.QuarterTableData.push({
            title: "Quarter 1",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-04-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-06-30'
          }, {
            title: "Quarter 2",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-07-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-09-30'
          }, {
            title: "Quarter 3",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-10-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().format("YYYY") + '-12-31'
          }, {
            title: "Quarter 4",
            from_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().add(1, 'Y').format("YYYY") + '-01-01',
            to_date: moment__WEBPACK_IMPORTED_MODULE_18___default()().add(1, 'Y').format("YYYY") + '-03-31'
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("/getStateFromCountryId/".concat(101)).then(function (response) {
      _this4.StateOptions = JSON.parse(JSON.stringify(response.data.data));
    });
    _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("country").then(function (response) {
      _this4.countryName = response.data.data;
    });
    _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("state").then(function (response) {
      _this4.StateOptions = response.data.data;
    });
    _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("city").then(function (response) {
      _this4.CityOptions = response.data.data;
    });
    _axios__WEBPACK_IMPORTED_MODULE_15__["default"].get("industryType").then(function (response) {
      _this4.industryTypeOption = response.data.data['industry'];
      _this4.WeekdayOption = response.data.data['weekday'];
    });
  },
  setup: function setup() {
    var Submit = function Submit() {
      console.log("console", RegisterData);
      _axios__WEBPACK_IMPORTED_MODULE_15__["default"].post('/registersteps', RegisterData).then(function (response) {
        if (response.data.status == 'success') {}
      })["catch"](function (error) {
        if (error.response.data.code == 422) {
          errors.value = error.response.data.errors;
        }
      });
    }; // UnRegister on leave


    var hasErrors = function hasErrors(fieldName) {
      return fieldName in errors.value;
    };

    var getErrors = function getErrors(fieldName) {
      return errors.value[fieldName][0];
    };

    var RemoveError = function RemoveError(errorName) {
      console.log('hello');
      console.log(errorName);
      errors.value[errorName] = " ";
    };

    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_9__["useToast"])(); // const { route, router } = useRouter();

    var show = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_14__["ref"])(false);
    var organizeData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_14__["ref"])({
      company_name: null,
      phone: null,
      email: null,
      country: null,
      state: null,
      city: null,
      street: null,
      Employee_Strength: null,
      Industry_Type: null
    });
    var errors = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_14__["ref"])([]);

    var encodeBase64 = function encodeBase64(data) {
      data = data.toString();
      return Buffer.from(data).toString('base64');
    };

    var decodeBase64 = function decodeBase64(data) {
      return Buffer.from(data, 'base64').toString('ascii');
    };

    return {
      encodeBase64: encodeBase64,
      decodeBase64: decodeBase64,
      hasErrors: hasErrors,
      getErrors: getErrors,
      RemoveError: RemoveError,
      organizeData: organizeData,
      show: show,
      errors: errors
    };
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-get-flags.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-get-flags.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER;
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "./node_modules/core-js/internals/regexp-get-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-top-style: none;\n  border-radius: 0 0 4px 4px;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: #5897fb;\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.4;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #f0f0f0;\n  border: 1px solid rgba(60, 60, 60, 0.26);\n  border-radius: 4px;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.4;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: inherit;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n[dir] .vue-form-wizard {\n  background-color: #fff;\n  box-shadow: 0px 4px 25px 0px rgba(34, 41, 47, 0.1);\n  border-radius: 0.5rem;\n  padding-bottom: 0;\n}\n[dir] .vue-form-wizard .wizard-header {\n  padding: 0;\n  margin: 0;\n}\n.vue-form-wizard .title {\n  color: #636363;\n}\n.vue-form-wizard .wizard-navigation .wizard-progress-with-circle {\n  display: none;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav {\n  padding: 1.42rem 1.42rem 2.14rem 1.42rem;\n  border-bottom: 1px solid rgba(34, 41, 47, 0.08);\n  padding-bottom: 0;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li {\n  flex-grow: 0;\n  flex: inherit;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav li {\n  padding-bottom: 2rem;\n}\n[dir=ltr] .vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-right: 3rem;\n}\n[dir=rtl] .vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-left: 3rem;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li.active a {\n  color: #7367f0;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li.active a .wizard-icon-circle .wizard-icon-container .wizard-icon {\n  color: #fff;\n  font-size: 1rem;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav li.active a .checked {\n  box-shadow: 0 3px 6px 0 rgba(105, 108, 255, 0.4);\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle {\n  width: 2.71rem;\n  height: 2.71rem;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle {\n  border: none;\n  background-color: #ededed;\n  border-radius: 6px;\n}\n[dir=ltr] .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle {\n  margin-right: 1rem;\n}\n[dir=rtl] .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle {\n  margin-left: 1rem;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle .wizard-icon-container {\n  border-radius: 6px;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle .wizard-icon {\n  font-style: inherit;\n  font-size: 1rem;\n  color: #b8c2cc;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle .wizard-icon.feather {\n  font-size: 1.3rem;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle.checked {\n  background-color: rgba(115, 103, 240, 0.08);\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle.checked .wizard-icon {\n  color: #7367f0;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li a {\n  flex-direction: row;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li a .stepTitle {\n  font-size: 1rem;\n  color: #b8c2cc;\n  font-weight: 600;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li a .wizard-icon {\n  transition: none !important;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav li:not(:first-child) a::before {\n  content: \"\";\n  font-family: feather !important;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  font-size: 1.14rem;\n  position: absolute;\n}\n[dir=ltr] .vue-form-wizard .wizard-navigation .wizard-nav li:not(:first-child) a::before {\n  left: -30px;\n}\n[dir=rtl] .vue-form-wizard .wizard-navigation .wizard-nav li:not(:first-child) a::before {\n  right: -30px;\n}\n[dir] .vue-form-wizard .wizard-card-footer {\n  padding-bottom: 1rem;\n}\n.vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn,\n.vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn {\n  min-width: unset;\n}\n[dir] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn, [dir] .vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn {\n  padding: 0.786rem 1.5rem;\n  border-radius: 0.4285rem;\n}\n.vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn {\n  color: #82868b !important;\n  font-weight: 400;\n}\n[dir] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn {\n  border: 1px solid #82868b !important;\n  background-color: transparent !important;\n}\n[dir] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn:hover {\n  background-color: rgba(130, 134, 139, 0.04) !important;\n}\n.vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn::before {\n  content: \"\";\n  font-family: feather !important;\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  font-size: 1rem;\n  position: relative;\n}\n[dir=ltr] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn::before {\n  left: -6px;\n}\n[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn::before {\n  right: -6px;\n}\n.vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn {\n  font-weight: 400;\n}\n[dir] .vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn:hover {\n  box-shadow: 0 8px 25px -8px #7367f0;\n}\n.vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn::after {\n  content: \"\";\n  font-family: feather !important;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  font-size: 1rem;\n  position: relative;\n}\n[dir=ltr] .vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn::after {\n  right: -6px;\n}\n[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn::after {\n  left: -6px;\n}\n[dir] .steps-transparent.vue-form-wizard {\n  background-color: transparent;\n  box-shadow: none;\n  padding-bottom: 0;\n}\n[dir] .steps-transparent.vue-form-wizard .wizard-header {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n[dir] .steps-transparent.vue-form-wizard .wizard-navigation .wizard-nav {\n  border: none;\n}\n[dir] .steps-transparent .wizard-tab-content {\n  box-shadow: 0px 4px 25px 0px rgba(34, 41, 47, 0.1);\n  background-color: #fff;\n}\n[dir] .steps-transparent .wizard-card-footer {\n  background-color: #fff;\n  box-shadow: 0px 4px 25px 0px rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .steps-transparent .wizard-tab-content {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n[dir=rtl] .steps-transparent .wizard-tab-content {\n  border-top-right-radius: 0.5rem;\n  border-top-left-radius: 0.5rem;\n}\n[dir=ltr] .steps-transparent .wizard-card-footer {\n  box-shadow: -1px 16px 25px 0px rgba(34, 41, 47, 0.1);\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] .steps-transparent .wizard-card-footer {\n  box-shadow: 1px 16px 25px 0px rgba(34, 41, 47, 0.1);\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav {\n  min-width: 230px;\n}\n[dir] .vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav {\n  border-bottom: none;\n}\n[dir=ltr] .vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav {\n  border-right: 1px solid rgba(34, 41, 47, 0.08);\n  padding-right: 2.5rem;\n}\n[dir=rtl] .vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav {\n  border-left: 1px solid rgba(34, 41, 47, 0.08);\n  padding-left: 2.5rem;\n}\n[dir=ltr] .vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-right: 0;\n}\n[dir=rtl] .vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-left: 0;\n}\n.vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav li a {\n  flex-wrap: nowrap;\n}\n.vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav li a::before {\n  content: none;\n}\n.vertical.wizard-vertical.vue-form-wizard .wizard-navigation .wizard-nav li .stepTitle {\n  max-width: 200px;\n  font-size: 1rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.vertical.wizard-vertical.vue-form-wizard .wizard-tab-content {\n  width: 100%;\n}\n[dir] .vertical.wizard-vertical.vue-form-wizard .wizard-card-footer {\n  padding-top: 0;\n}\n[dir=ltr] .vertical.wizard-vertical.vue-form-wizard .wizard-card-footer {\n  margin-left: 229px;\n  border-left: 1px solid rgba(34, 41, 47, 0.08);\n}\n[dir=rtl] .vertical.wizard-vertical.vue-form-wizard .wizard-card-footer {\n  margin-right: 229px;\n  border-right: 1px solid rgba(34, 41, 47, 0.08);\n}\n.vertical-steps.vue-form-wizard .wizard-tab-content {\n  width: 100%;\n}\n.vertical-steps.vue-form-wizard .wizard-card-footer {\n  position: relative;\n  z-index: 9;\n}\n[dir] .vertical-steps.vue-form-wizard .wizard-card-footer {\n  padding-top: 0;\n}\n[dir=ltr] .vertical-steps.vue-form-wizard .wizard-card-footer {\n  margin-left: 223px;\n}\n[dir=rtl] .vertical-steps.vue-form-wizard .wizard-card-footer {\n  margin-right: 223px;\n}\n[dir] .vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav {\n  padding-top: 30px;\n}\n[dir=ltr] .vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav {\n  padding-right: 2.5rem;\n}\n[dir=rtl] .vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav {\n  padding-left: 2.5rem;\n}\n[dir=ltr] .vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-right: 0;\n}\n[dir=rtl] .vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav li {\n  margin-left: 0;\n}\n.vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav li a {\n  flex-wrap: nowrap;\n}\n.vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav li a::before {\n  content: none;\n}\n.vertical-steps.vue-form-wizard .wizard-navigation .wizard-nav li .stepTitle {\n  max-width: 200px;\n  font-size: 1rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n@media (max-width: 767.98px) {\n.vue-form-wizard .wizard-navigation {\n    flex-direction: column !important;\n}\n.vue-form-wizard .wizard-navigation .wizard-nav.wizard-nav-pills li:not(:first-child) a::before {\n    content: none;\n}\n[dir] .vue-form-wizard .wizard-navigation .wizard-nav.wizard-nav-pills li:last-child {\n    margin-bottom: 0;\n}\n[dir=ltr] .vue-form-wizard .wizard-card-footer {\n    margin-left: 0 !important;\n}\n[dir=rtl] .vue-form-wizard .wizard-card-footer {\n    margin-right: 0 !important;\n}\n.vue-form-wizard.wizard-vertical.vertical .wizard-nav.wizard-nav-pills {\n    width: 100%;\n}\n[dir] .vue-form-wizard.wizard-vertical.vertical .wizard-nav.wizard-nav-pills {\n    border-bottom: 1px solid rgba(34, 41, 47, 0.08);\n    margin-bottom: 1.9rem;\n}\n[dir=ltr] .vue-form-wizard.wizard-vertical.vertical .wizard-nav.wizard-nav-pills {\n    border-right: none;\n}\n[dir=rtl] .vue-form-wizard.wizard-vertical.vertical .wizard-nav.wizard-nav-pills {\n    border-left: none;\n}\n[dir=ltr] .vue-form-wizard.wizard-vertical.vertical .wizard-tab-content {\n    margin-left: 0;\n}\n[dir=rtl] .vue-form-wizard.wizard-vertical.vertical .wizard-tab-content {\n    margin-right: 0;\n}\n}\n@media (max-width: 991.98px) {\n.vue-form-wizard .wizard-nav.wizard-nav-pills li:not(:first-child) a::before {\n    content: none;\n}\n}\n[dir] body.dark-layout .vue-form-wizard:not(.steps-transparent) {\n  background-color: #283046;\n  box-shadow: 0px 4px 25px 0px rgba(180, 183, 189, 0.1);\n}\n[dir] body.dark-layout .vue-form-wizard:not(.steps-transparent).vertical .wizard-card-footer {\n  border-color: #3b4253 !important;\n}\n[dir] body.dark-layout .vue-form-wizard.steps-transparent .wizard-tab-content, [dir] body.dark-layout .vue-form-wizard.steps-transparent .wizard-card-footer {\n  background-color: #283046;\n}\n[dir=ltr] body.dark-layout .vue-form-wizard.steps-transparent .wizard-tab-content, [dir=ltr] body.dark-layout .vue-form-wizard.steps-transparent .wizard-card-footer {\n  box-shadow: 1px 12px 25px 0px rgba(180, 183, 189, 0.1);\n}\n[dir=rtl] body.dark-layout .vue-form-wizard.steps-transparent .wizard-tab-content, [dir=rtl] body.dark-layout .vue-form-wizard.steps-transparent .wizard-card-footer {\n  box-shadow: -1px 12px 25px 0px rgba(180, 183, 189, 0.1);\n}\n[dir] body.dark-layout .vue-form-wizard .wizard-navigation .wizard-nav {\n  border-color: #3b4253 !important;\n}\n[dir] body.dark-layout .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle {\n  background-color: rgba(186, 191, 199, 0.12);\n}\n[dir] body.dark-layout .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle.checked {\n  background-color: rgba(115, 103, 240, 0.08);\n}\nbody.dark-layout .vue-form-wizard .wizard-navigation .wizard-nav li .wizard-icon-circle.checked .wizard-icon {\n  color: #7367f0;\n}\nbody.dark-layout .vue-form-wizard .wizard-navigation .wizard-nav li.active a .wizard-icon-circle .wizard-icon {\n  color: #b4b7bd;\n}\nbody.dark-layout .vue-form-wizard .wizard-nav:not(:first-child) a::before {\n  color: #b4b7bd;\n}\nbody.dark-layout .vue-form-wizard .wizard-nav:not(:first-child) li.active a::before {\n  color: #7367f0;\n}\nhtml[dir=rtl] .wizard-navigation .wizard-nav li a::before {\n  transform: rotate(180deg);\n}\nhtml[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-left .wizard-btn::before {\n  right: 0;\n}\nhtml[dir=rtl] .vue-form-wizard .wizard-card-footer .wizard-footer-right .wizard-btn::after {\n  left: 0;\n}\n\n/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterSteps.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ADD_cli registerSteps" },
    [
      _c(
        "form-wizard",
        {
          staticClass: "mb-3 hidsubbtn w-80 mx-auto",
          attrs: {
            color: "#7367F0",
            title: null,
            subtitle: null,
            shape: "square",
            "finish-button-text": "Submit",
            "back-button-text": "Previous",
          },
          on: {
            "on-complete": _vm.formSubmitted,
            "on-change": function (prevIndex, nextIndex) {
              return (_vm.activeTabIndex = nextIndex)
            },
          },
        },
        [
          _c(
            "tab-content",
            {
              attrs: { title: "Overview", beforeChange: _vm.validationForm },
              on: {
                loading: function ($event) {
                  _vm.activeTab = "overviewForm"
                },
                shown: function ($event) {
                  _vm.activeTab = "overviewForm"
                },
                change: function ($event) {
                  _vm.activeTab = "overviewForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "overviewForm", attrs: { tag: "form" } },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "12" } }, [
                            _c(
                              "p",
                              {
                                staticClass: "headSteps p-50 pb-1 text-center",
                              },
                              [_vm._v("Company Overview")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Company Name",
                                    "label-for": "company_name",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Company Name",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "first_name",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder:
                                                  "Enter Company Name",
                                                autocomplete: "off",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "company_name"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm
                                                    .company_name,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "company_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.company_name",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("company_name")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "company_name"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Phone",
                                    "label-for": "phone",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { name: "Phone", rules: "required" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "phone",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder:
                                                  "Enter Phone Number",
                                                autocomplete: "off",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "phone"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.phone,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "phone",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.phone",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("phone")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors("phone")
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Email",
                                    "label-for": "email",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Email",
                                      rules: "required|email",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "email",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter Email",
                                                autocomplete: "off",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "email"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.email,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "email",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.email",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("email")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors("email")
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Street",
                                    "label-for": "street",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Street",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "emp_code",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter Street",
                                                autocomplete: "off",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "street"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.street,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "street",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.street",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("street")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "street"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Country",
                                    "label-for": "country",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Country",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("v-select", {
                                              attrs: {
                                                "input-id": "country",
                                                reduce: function (val) {
                                                  return val.id
                                                },
                                                value: "id",
                                                label: "country_name",
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                options: JSON.parse(
                                                  JSON.stringify(
                                                    _vm.countryName
                                                  )
                                                ),
                                                clearable: true,
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Select Country",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  _vm.onChange(
                                                    "country",
                                                    $event
                                                  )
                                                  _vm.RemoveError("country")
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.country,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "country",
                                                    _vm._n($$v)
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.country",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("country")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "country"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "State",
                                    "label-for": "state",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { name: "State", rules: "required" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("v-select", {
                                              attrs: {
                                                "input-id": "state",
                                                label: "name",
                                                value: "id",
                                                disabled:
                                                  !_vm.form.overviewForm
                                                    .country,
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                options: JSON.parse(
                                                  JSON.stringify(
                                                    _vm.StateOptions
                                                  )
                                                ),
                                                clearable: true,
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                reduce: function (val) {
                                                  return val.id
                                                },
                                                placeholder: "Select State",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  _vm.onChange("state", $event)
                                                  _vm.RemoveError("state")
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.state,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "state",
                                                    _vm._n($$v)
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.state",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("state")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors("state")
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "City",
                                    "label-for": "city",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: { name: "City", rules: "required" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("v-select", {
                                              attrs: {
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                options: JSON.parse(
                                                  JSON.stringify(
                                                    _vm.CityOptions
                                                  )
                                                ),
                                                label: "name",
                                                value: "id",
                                                disabled:
                                                  !_vm.form.overviewForm.state,
                                                reduce: function (val) {
                                                  return val.id
                                                },
                                                clearable: true,
                                                "input-id": "city",
                                                placeholder: "Select City",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError("city")
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.city,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "city",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.city",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("city")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors("city")
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Zip Code",
                                    "label-for": "zip",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Zip Code",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "Zip",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder: "Enter Zip Code",
                                                autocomplete: "off",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "pincode"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm.pincode,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "pincode",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.pincode",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("pincode")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "pincode"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: " Employee Strength",
                                    "label-for": "employee_strength",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Employee Strength",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "employee_strength",
                                                state:
                                                  errors.length > 0
                                                    ? false
                                                    : null,
                                                placeholder:
                                                  "Enter Employee Strength",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "employee_strength"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm
                                                    .employee_strength,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "employee_strength",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.employee_strength",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("employee_strength")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "employee_strength"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "4" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Industry Type",
                                    "label-for": "industry_type",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    attrs: {
                                      name: "Industry Type",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("v-select", {
                                              attrs: {
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                options: JSON.parse(
                                                  JSON.stringify(
                                                    _vm.industryTypeOption
                                                  )
                                                ),
                                                label: "name",
                                                value: "id",
                                                reduce: function (val) {
                                                  return val.id
                                                },
                                                clearable: true,
                                                "input-id": "Industry_Type",
                                                placeholder:
                                                  "Select Industry Type",
                                              },
                                              on: {
                                                input: function ($event) {
                                                  return _vm.RemoveError(
                                                    "Industry_Type"
                                                  )
                                                },
                                              },
                                              model: {
                                                value:
                                                  _vm.form.overviewForm
                                                    .industry_type,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form.overviewForm,
                                                    "industry_type",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "form.overviewForm.industry_type",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("Industry_Type")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "Industry_Type"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Setup",
                id: "setupCheckbox",
                "before-change": _vm.validationForm,
              },
              on: {
                change: function ($event) {
                  _vm.activeTab = "systemForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "systemForm", attrs: { tag: "form" } },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "12" } }, [
                            _c(
                              "p",
                              {
                                staticClass: "headSteps p-50 pb-1 text-center",
                              },
                              [_vm._v("System Setup")]
                            ),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mb-2 shiftBox" },
                        [
                          _c(
                            "b-col",
                            {
                              staticClass: "qterBox pt-50",
                              attrs: { md: "12" },
                            },
                            [
                              _c(
                                "b-form-group",
                                {
                                  staticClass: "mb-0",
                                  attrs: {
                                    label: "Working Day",
                                    "label-for": "working_day",
                                    "label-class": "required",
                                  },
                                },
                                [
                                  _c("validation-provider", {
                                    staticClass: "text-center",
                                    attrs: {
                                      name: "Working Day",
                                      rules: "required",
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function (ref) {
                                          var errors = ref.errors
                                          return [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-md-flex d-sm-inline justify-content-between ",
                                              },
                                              _vm._l(
                                                _vm.WeekdayOption,
                                                function (item) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: item.value,
                                                      staticClass:
                                                        "mainBorderedFrame mt-50",
                                                    },
                                                    [
                                                      _c(
                                                        "b-form-checkbox",
                                                        {
                                                          staticClass:
                                                            "disinblkchk custom-control-primary",
                                                          attrs: {
                                                            value: item.value,
                                                            checked: "true",
                                                            name: "check-button",
                                                            switch: "",
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.form
                                                                .systemForm
                                                                .working_day,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.form
                                                                  .systemForm,
                                                                "working_day",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "form.systemForm.working_day",
                                                          },
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "switch-icon-left",
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "CheckIcon",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "switch-icon-right",
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "XIcon",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "checkboxLabel",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(
                                                                item.text
                                                              ) +
                                                              "\n                      "
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                }
                                              ),
                                              0
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "text-danger" },
                                              [_vm._v(_vm._s(errors[0]))]
                                            ),
                                            _vm._v(" "),
                                            _vm.hasErrors("working_day")
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                    " +
                                                        _vm._s(
                                                          _vm.getErrors(
                                                            "working_day"
                                                          )
                                                        ) +
                                                        "\n                  "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-2 shiftBox" },
                        [
                          _c(
                            "b-col",
                            {
                              staticClass:
                                "mt-1 mb-2 d-md-flex d-sm-block align-items-center",
                              attrs: { md: "12" },
                            },
                            [
                              _c(
                                "b-form-checkbox",
                                {
                                  staticClass: "custom-control-primary mr-2",
                                  attrs: { value: "A" },
                                  on: {
                                    change: function ($event) {
                                      _vm.form.systemForm.shift = [
                                        {
                                          title: "Working hours",
                                          from: null,
                                          to: null,
                                        },
                                      ]
                                    },
                                  },
                                  model: {
                                    value: _vm.form.systemForm.swift_base,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.form.systemForm,
                                        "swift_base",
                                        $$v
                                      )
                                    },
                                    expression: "form.systemForm.swift_base",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                Is your company working on shift base?\n              "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.form.systemForm.swift_base
                                ? _c(
                                    "b-form-group",
                                    {
                                      staticClass: "mb-0",
                                      attrs: {
                                        "label-for": "company_name",
                                        "label-class": "required",
                                      },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Number Of Swift",
                                          rules: "required|integer",
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (ref) {
                                                var errors = ref.errors
                                                return [
                                                  _c("b-form-input", {
                                                    staticClass: "shiftField",
                                                    attrs: {
                                                      id: "Number_Of_Swift",
                                                      state:
                                                        errors.length > 0
                                                          ? false
                                                          : null,
                                                      placeholder:
                                                        "Enter Number Of Swift",
                                                      autocomplete: "off",
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        return _vm.updateSetupForm(
                                                          _vm.form.systemForm
                                                            .no_of_swift
                                                        )
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.systemForm
                                                          .no_of_swift,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form.systemForm,
                                                          "no_of_swift",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.systemForm.no_of_swift",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass:
                                                        "text-danger",
                                                    },
                                                    [_vm._v(_vm._s(errors[0]))]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.hasErrors("no_of_swift")
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                    " +
                                                              _vm._s(
                                                                _vm.getErrors(
                                                                  "no_of_swift"
                                                                )
                                                              ) +
                                                              "\n                  "
                                                          ),
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                ]
                                              },
                                            },
                                          ],
                                          null,
                                          false,
                                          4085167101
                                        ),
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { md: "12" } },
                            [
                              _c(
                                "b-row",
                                { staticClass: "px-1" },
                                _vm._l(
                                  _vm.form.systemForm.shift,
                                  function (item) {
                                    return _c(
                                      "b-col",
                                      {
                                        key: item.item,
                                        staticClass: "shiftSchedule",
                                        attrs: { md: "3" },
                                      },
                                      [
                                        _c(
                                          "b-row",
                                          { staticClass: "px-50" },
                                          [
                                            _c(
                                              "b-col",
                                              { staticClass: " px-25" },
                                              [
                                                _c(
                                                  "label",
                                                  { staticClass: "required" },
                                                  [_vm._v(_vm._s(item.title))]
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-row",
                                          { staticClass: "px-50" },
                                          [
                                            _c(
                                              "b-col",
                                              {
                                                staticClass: " px-25",
                                                attrs: { md: "6" },
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "From",
                                                      "label-for": item.title,
                                                    },
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        name:
                                                          "from " +
                                                          item.title +
                                                          " time",
                                                        rules: "required",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-form-input",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "from" +
                                                                        item.title,
                                                                      size: "sm",
                                                                      autocomplete:
                                                                        "off",
                                                                      value:
                                                                        item.from,
                                                                      state:
                                                                        errors.length >
                                                                        0
                                                                          ? false
                                                                          : null,
                                                                      placeholder:
                                                                        "Starts",
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        item.from,
                                                                      callback:
                                                                        function (
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            item,
                                                                            "from",
                                                                            $$v
                                                                          )
                                                                        },
                                                                      expression:
                                                                        "item.from",
                                                                    },
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-popover",
                                                                  {
                                                                    attrs: {
                                                                      target:
                                                                        "from" +
                                                                        item.title,
                                                                      triggers:
                                                                        "focus",
                                                                      placement:
                                                                        "top",
                                                                      id: "baseTimeSelection",
                                                                    },
                                                                    scopedSlots:
                                                                      _vm._u(
                                                                        [
                                                                          {
                                                                            key: "title",
                                                                            fn: function () {
                                                                              return [
                                                                                _c(
                                                                                  "span",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "From "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            },
                                                                            proxy: true,
                                                                          },
                                                                        ],
                                                                        null,
                                                                        true
                                                                      ),
                                                                  },
                                                                  [
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "popDates",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-row",
                                                                          [
                                                                            _c(
                                                                              "b-col",
                                                                              {
                                                                                staticClass:
                                                                                  "my-50",
                                                                                attrs:
                                                                                  {
                                                                                    sm: "12",
                                                                                    md: "6",
                                                                                    xl: "6",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "d-flex align-items-center justify-content-center",
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-100 bg-gray-300 h-50 dark:bg-gray-700 base-magnatude",
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "input",
                                                                                          {
                                                                                            directives:
                                                                                              [
                                                                                                {
                                                                                                  name: "model",
                                                                                                  rawName:
                                                                                                    "v-model",
                                                                                                  value:
                                                                                                    _vm.hourDial1,
                                                                                                  expression:
                                                                                                    "hourDial1",
                                                                                                },
                                                                                              ],
                                                                                            staticClass:
                                                                                              "magnatude",
                                                                                            style:
                                                                                              [
                                                                                                {
                                                                                                  backgroundSize:
                                                                                                    _vm.hourDialSlider1,
                                                                                                },
                                                                                              ],
                                                                                            attrs:
                                                                                              {
                                                                                                type: "range",
                                                                                                min: "0",
                                                                                                max: "24",
                                                                                                step: "1",
                                                                                                id: "hourDialSliderID1",
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  _vm.hourDial1,
                                                                                              },
                                                                                            on: {
                                                                                              input:
                                                                                                function (
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.hourDialSlider1
                                                                                                  item.from =
                                                                                                    (_vm.hourDial1 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.hourDial1
                                                                                                      : _vm.hourDial1) +
                                                                                                    ":" +
                                                                                                    (_vm.minitDial1 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.minitDial1
                                                                                                      : _vm.minitDial1) +
                                                                                                    ":00"
                                                                                                },
                                                                                              __r: function (
                                                                                                $event
                                                                                              ) {
                                                                                                _vm.hourDial1 =
                                                                                                  $event.target.value
                                                                                              },
                                                                                            },
                                                                                          }
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "h6",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mb-0 font-weight-bolder text-center text-primary mt-1 smallestFont",
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\n                                                  Hours "
                                                                                            ),
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "b-col",
                                                                              {
                                                                                staticClass:
                                                                                  "my-50",
                                                                                attrs:
                                                                                  {
                                                                                    sm: "12",
                                                                                    md: "6",
                                                                                    xl: "6",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "d-flex align-items-center justify-content-center",
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-100 bg-gray-300 h-50 dark:bg-gray-700 base-magnatude",
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "input",
                                                                                          {
                                                                                            directives:
                                                                                              [
                                                                                                {
                                                                                                  name: "model",
                                                                                                  rawName:
                                                                                                    "v-model",
                                                                                                  value:
                                                                                                    _vm.minitDial1,
                                                                                                  expression:
                                                                                                    "minitDial1",
                                                                                                },
                                                                                              ],
                                                                                            staticClass:
                                                                                              "magnatude",
                                                                                            style:
                                                                                              [
                                                                                                {
                                                                                                  backgroundSize:
                                                                                                    _vm.minitDialSlider1,
                                                                                                },
                                                                                              ],
                                                                                            attrs:
                                                                                              {
                                                                                                type: "range",
                                                                                                min: "0",
                                                                                                max:
                                                                                                  _vm.hourDial2 <
                                                                                                  24
                                                                                                    ? "59"
                                                                                                    : "0",
                                                                                                step: "5",
                                                                                                id: "minitDialSliderID1",
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  _vm.minitDial1,
                                                                                              },
                                                                                            on: {
                                                                                              input:
                                                                                                function (
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.minitDialSlider1
                                                                                                  item.from =
                                                                                                    (_vm.hourDial1 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.hourDial1
                                                                                                      : _vm.hourDial1) +
                                                                                                    ":" +
                                                                                                    (_vm.minitDial1 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.minitDial1
                                                                                                      : _vm.minitDial1) +
                                                                                                    ":00"
                                                                                                },
                                                                                              __r: function (
                                                                                                $event
                                                                                              ) {
                                                                                                _vm.minitDial1 =
                                                                                                  $event.target.value
                                                                                              },
                                                                                            },
                                                                                          }
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "h6",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mb-0 font-weight-bolder text-center text-primary mt-1 smallestFont",
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\n                                                      Minutes"
                                                                                            ),
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ],
                                                                          1
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _vm.hasErrors(
                                                                  "no_of_swift"
                                                                )
                                                                  ? _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "text-danger",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                          " +
                                                                            _vm._s(
                                                                              _vm.getErrors(
                                                                                "no_of_swift"
                                                                              )
                                                                            ) +
                                                                            "\n                        "
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : _vm._e(),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-col",
                                              {
                                                staticClass: " px-25",
                                                attrs: { md: "6" },
                                              },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label: "To",
                                                      "label-for": item.title,
                                                    },
                                                  },
                                                  [
                                                    _c("validation-provider", {
                                                      attrs: {
                                                        name:
                                                          "To " +
                                                          item.title +
                                                          " time",
                                                        rules: "required",
                                                      },
                                                      scopedSlots: _vm._u(
                                                        [
                                                          {
                                                            key: "default",
                                                            fn: function (ref) {
                                                              var errors =
                                                                ref.errors
                                                              return [
                                                                _c(
                                                                  "b-form-input",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "to" +
                                                                        item.title,
                                                                      size: "sm",
                                                                      autocomplete:
                                                                        "off",
                                                                      value:
                                                                        item.to,
                                                                      state:
                                                                        errors.length >
                                                                        0
                                                                          ? false
                                                                          : null,
                                                                      placeholder:
                                                                        "Ends",
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        item.to,
                                                                      callback:
                                                                        function (
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            item,
                                                                            "to",
                                                                            $$v
                                                                          )
                                                                        },
                                                                      expression:
                                                                        "item.to",
                                                                    },
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "b-popover",
                                                                  {
                                                                    attrs: {
                                                                      target:
                                                                        "to" +
                                                                        item.title,
                                                                      triggers:
                                                                        "focus",
                                                                      placement:
                                                                        "top",
                                                                      id: "baseTimeSelection",
                                                                    },
                                                                    scopedSlots:
                                                                      _vm._u(
                                                                        [
                                                                          {
                                                                            key: "title",
                                                                            fn: function () {
                                                                              return [
                                                                                _c(
                                                                                  "span",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "To "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            },
                                                                            proxy: true,
                                                                          },
                                                                        ],
                                                                        null,
                                                                        true
                                                                      ),
                                                                  },
                                                                  [
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "popDates",
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "b-row",
                                                                          [
                                                                            _c(
                                                                              "b-col",
                                                                              {
                                                                                staticClass:
                                                                                  "my-50",
                                                                                attrs:
                                                                                  {
                                                                                    sm: "12",
                                                                                    md: "6",
                                                                                    xl: "6",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "d-flex align-items-center justify-content-center",
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-100 bg-gray-300 h-50 dark:bg-gray-700 base-magnatude",
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "input",
                                                                                          {
                                                                                            directives:
                                                                                              [
                                                                                                {
                                                                                                  name: "model",
                                                                                                  rawName:
                                                                                                    "v-model",
                                                                                                  value:
                                                                                                    _vm.hourDial2,
                                                                                                  expression:
                                                                                                    "hourDial2",
                                                                                                },
                                                                                              ],
                                                                                            staticClass:
                                                                                              "magnatude",
                                                                                            style:
                                                                                              [
                                                                                                {
                                                                                                  backgroundSize:
                                                                                                    _vm.hourDialSlider2,
                                                                                                },
                                                                                              ],
                                                                                            attrs:
                                                                                              {
                                                                                                type: "range",
                                                                                                min: "0",
                                                                                                max: "24",
                                                                                                step: "1",
                                                                                                id: "hourDialSliderID2",
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  _vm.hourDial2,
                                                                                              },
                                                                                            on: {
                                                                                              input:
                                                                                                function (
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.hourDialSlider2
                                                                                                  item.to =
                                                                                                    (_vm.hourDial2 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.hourDial2
                                                                                                      : _vm.hourDial2) +
                                                                                                    ":" +
                                                                                                    (_vm.minitDial2 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.minitDial2
                                                                                                      : _vm.minitDial2) +
                                                                                                    ":00"
                                                                                                },
                                                                                              __r: function (
                                                                                                $event
                                                                                              ) {
                                                                                                _vm.hourDial2 =
                                                                                                  $event.target.value
                                                                                              },
                                                                                            },
                                                                                          }
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "h6",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mb-0 font-weight-bolder text-center text-primary mt-1 smallestFont",
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\n                                                  Hours "
                                                                                            ),
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "b-col",
                                                                              {
                                                                                staticClass:
                                                                                  "my-50",
                                                                                attrs:
                                                                                  {
                                                                                    sm: "12",
                                                                                    md: "6",
                                                                                    xl: "6",
                                                                                  },
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "d-flex align-items-center justify-content-center",
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "div",
                                                                                      {
                                                                                        staticClass:
                                                                                          "w-100 bg-gray-300 h-50 dark:bg-gray-700 base-magnatude",
                                                                                      },
                                                                                      [
                                                                                        _c(
                                                                                          "input",
                                                                                          {
                                                                                            directives:
                                                                                              [
                                                                                                {
                                                                                                  name: "model",
                                                                                                  rawName:
                                                                                                    "v-model",
                                                                                                  value:
                                                                                                    _vm.minitDial2,
                                                                                                  expression:
                                                                                                    "minitDial2",
                                                                                                },
                                                                                              ],
                                                                                            staticClass:
                                                                                              "magnatude",
                                                                                            style:
                                                                                              [
                                                                                                {
                                                                                                  backgroundSize:
                                                                                                    _vm.minitDialSlider2,
                                                                                                },
                                                                                              ],
                                                                                            attrs:
                                                                                              {
                                                                                                type: "range",
                                                                                                min: "0",
                                                                                                max:
                                                                                                  _vm.hourDial2 <
                                                                                                  24
                                                                                                    ? "59"
                                                                                                    : "0",
                                                                                                step: "5",
                                                                                                id: "minitDialSliderID2",
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  _vm.minitDial2,
                                                                                              },
                                                                                            on: {
                                                                                              input:
                                                                                                function (
                                                                                                  $event
                                                                                                ) {
                                                                                                  _vm.minitDialSlider2
                                                                                                  item.to =
                                                                                                    (_vm.hourDial2 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.hourDial2
                                                                                                      : _vm.hourDial2) +
                                                                                                    ":" +
                                                                                                    (_vm.minitDial2 <
                                                                                                    10
                                                                                                      ? "0" +
                                                                                                        _vm.minitDial2
                                                                                                      : _vm.minitDial2) +
                                                                                                    ":00"
                                                                                                },
                                                                                              __r: function (
                                                                                                $event
                                                                                              ) {
                                                                                                _vm.minitDial2 =
                                                                                                  $event.target.value
                                                                                              },
                                                                                            },
                                                                                          }
                                                                                        ),
                                                                                        _vm._v(
                                                                                          " "
                                                                                        ),
                                                                                        _c(
                                                                                          "h6",
                                                                                          {
                                                                                            staticClass:
                                                                                              "mb-0 font-weight-bolder text-center text-primary mt-1 smallestFont",
                                                                                          },
                                                                                          [
                                                                                            _vm._v(
                                                                                              "\n                                                      Minutes"
                                                                                            ),
                                                                                          ]
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ],
                                                                          1
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "small",
                                                                  {
                                                                    staticClass:
                                                                      "text-danger",
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        errors[0]
                                                                      )
                                                                    ),
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _vm.hasErrors(
                                                                  "no_of_swift"
                                                                )
                                                                  ? _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "text-danger",
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                        " +
                                                                            _vm._s(
                                                                              _vm.getErrors(
                                                                                "no_of_swift"
                                                                              )
                                                                            ) +
                                                                            "\n                      "
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : _vm._e(),
                                                              ]
                                                            },
                                                          },
                                                        ],
                                                        null,
                                                        true
                                                      ),
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  }
                                ),
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "my-2 shiftBox p-md-2 p-lg-2 p-xl-2" },
                        [
                          _c(
                            "b-col",
                            { staticClass: "qterBox", attrs: { md: "12" } },
                            [
                              _c("div", { staticClass: "col-12 pt-1 pl-0" }, [
                                _c(
                                  "label",
                                  { staticClass: "form-label required" },
                                  [_vm._v("Quarter")]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("validation-provider", {
                                attrs: { name: "Quarter", rules: "required" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function (ref) {
                                      var errors = ref.errors
                                      return [
                                        _c(
                                          "div",
                                          { staticClass: "row mx-0" },
                                          _vm._l(
                                            _vm.QuarterOptions,
                                            function (ps) {
                                              return _c(
                                                "div",
                                                {
                                                  key: ps.value,
                                                  staticClass:
                                                    "col-4 col-md-4 position-relative pr-50 pl-0",
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.form.systemForm
                                                            .quarter,
                                                        expression:
                                                          "form.systemForm.quarter",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "checkbox-budget",
                                                    attrs: {
                                                      type: "radio",
                                                      name: "freq-radios",
                                                      id: ps.value,
                                                      options: ps,
                                                    },
                                                    domProps: {
                                                      value: ps.value,
                                                      checked: _vm._q(
                                                        _vm.form.systemForm
                                                          .quarter,
                                                        ps.value
                                                      ),
                                                    },
                                                    on: {
                                                      change: [
                                                        function ($event) {
                                                          return _vm.$set(
                                                            _vm.form.systemForm,
                                                            "quarter",
                                                            ps.value
                                                          )
                                                        },
                                                        function ($event) {
                                                          return _vm.QuarterChange(
                                                            _vm.form.systemForm
                                                              .quarter
                                                          )
                                                        },
                                                      ],
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      staticClass:
                                                        "for-checkbox-budget",
                                                      attrs: { for: ps.value },
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          attrs: {
                                                            "data-hover":
                                                              ps.text,
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                        " +
                                                              _vm._s(ps.text)
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          { staticClass: "text-danger" },
                                          [_vm._v(_vm._s(errors[0]))]
                                        ),
                                        _vm._v(" "),
                                        _vm.hasErrors("quarter")
                                          ? _c(
                                              "div",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  "\n                        " +
                                                    _vm._s(
                                                      _vm.getErrors("quarter")
                                                    ) +
                                                    "\n                      "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    },
                                  },
                                ]),
                              }),
                              _vm._v(" "),
                              _vm.form.systemForm.quarter != null
                                ? _c(
                                    "b-col",
                                    {
                                      staticClass: "mt-2 px-0",
                                      attrs: { sm: "12", md: "12", xl: "12" },
                                    },
                                    [
                                      _c("b-table", {
                                        ref: "refKeyResultTable",
                                        staticClass:
                                          "mb-2 staticTable bg-white",
                                        attrs: {
                                          items:
                                            _vm.form.systemForm
                                              .QuarterTableData,
                                          fields: [
                                            "title",
                                            "from_date",
                                            "to_date",
                                          ],
                                          responsive: "",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Departments",
                "before-change": _vm.validationForm,
              },
              on: {
                change: function ($event) {
                  _vm.activeTab = "BUForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "BUForm", attrs: { tag: "form" } },
                [
                  _vm.hasErrors("BlankBU")
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getErrors("BlankBU")) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("department", {
                    on: {
                      removeBlankDepartmentError: function ($event) {
                        return _vm.RemoveError("BlankBU")
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Departments",
                "before-change": _vm.validationForm,
              },
              on: {
                change: function ($event) {
                  _vm.activeTab = "departmentForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "departmentForm", attrs: { tag: "form" } },
                [
                  _vm.hasErrors("BlankDepartment")
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getErrors("BlankDepartment")) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("department", {
                    on: {
                      removeBlankDepartmentError: function ($event) {
                        return _vm.RemoveError("BlankDepartment")
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: { title: "Teams", "before-change": _vm.validationForm },
              on: {
                click: function ($event) {
                  _vm.activeTab = "teamForm"
                },
                loading: function ($event) {
                  _vm.activeTab = "teamForm"
                },
                shown: function ($event) {
                  _vm.activeTab = "teamForm"
                },
                change: function ($event) {
                  _vm.activeTab = "teamForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "teamForm", attrs: { tag: "form" } },
                [
                  _vm.hasErrors("BlankTeam")
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getErrors("BlankTeam")) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("team", {
                    on: {
                      removeBlankTeamError: function ($event) {
                        return _vm.RemoveError("BlankTeam")
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: { title: "Roles", "before-change": _vm.validationForm },
              on: {
                click: function ($event) {
                  _vm.activeTab = "roleForm"
                },
                loading: function ($event) {
                  _vm.activeTab = "roleForm"
                },
                shown: function ($event) {
                  _vm.activeTab = "roleForm"
                },
                change: function ($event) {
                  _vm.activeTab = "roleForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "roleForm", attrs: { tag: "form" } },
                [
                  _vm.hasErrors("BlankRole")
                    ? _c("div", { staticClass: "text-danger" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.getErrors("BlankRole")) +
                            "\n          "
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("role", {
                    on: {
                      removeBlankRolerror: function ($event) {
                        return _vm.RemoveError("BlankRole")
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: { title: "Finish", "before-change": _vm.validationForm },
              on: {
                click: function ($event) {
                  _vm.activeTab = "finishForm"
                },
                loading: function ($event) {
                  _vm.activeTab = "finishForm"
                },
                shown: function ($event) {
                  _vm.activeTab = "finishForm"
                },
                change: function ($event) {
                  _vm.activeTab = "finishForm"
                },
              },
            },
            [
              _c(
                "validation-observer",
                { ref: "finishForm", attrs: { tag: "form" } },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "12" } },
                    [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { staticClass: "my-3", attrs: { md: "12" } },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass:
                                    "w-24 h-24 m-auto rounded-full congoIcon",
                                  attrs: {
                                    fill: "#58bb58",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "fill-rule": "evenodd",
                                      d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      "clip-rule": "evenodd",
                                    },
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "congratulationHeading p-50 mb-0 text-center",
                                },
                                [_vm._v("Welcome Onboard!!!")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "congratulationText p-50 mb-0 text-center",
                                },
                                [
                                  _c("span", [_vm._v("Congratulations!!!")]),
                                  _vm._v(
                                    " Your registration\n                request has been successfully submitted. We will get back to you shortly."
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.activeTabIndex != 5
            ? _c(
                "b-col",
                {
                  staticClass: "text-center myform1 smallFont",
                  attrs: { sm: "12", md: "12", xl: "12" },
                },
                [
                  _vm._v("\n      (Note: "),
                  _c(
                    "label",
                    { staticClass: "form-label requireds smallFont" },
                    [_vm._v(" mark are mandatory field and must be completed")]
                  ),
                  _vm._v(")\n    "),
                ]
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");



 // eslint-disable-next-line object-curly-newline

 // ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
}); // Install English and Arabic localizations.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
}); // ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////
// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }
// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }
// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }
// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation
//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }
// export const date = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }
// export const max = (val, max) => {
//   // If blank return
//   if (val === undefined || val === null) return true
//   return val.length <= max || `More than ${max} characters are not allowed`
// }
// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }
// export const min = (val, min) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   return val.length >= min || `Minimum ${min} characters are required`
// }
// export const num_range = (val, min, max) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);


var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }

  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */

  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */


  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */

  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterSteps.vue?vue&type=template&id=2335b344& */ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344&");
/* harmony import */ var _RegisterSteps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterSteps.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterSteps.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterSteps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sms/RegisterStep/RegisterSteps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterSteps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterSteps.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterSteps.vue?vue&type=template&id=2335b344& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sms/RegisterStep/RegisterSteps.vue?vue&type=template&id=2335b344&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterSteps_vue_vue_type_template_id_2335b344___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);