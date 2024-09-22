<template>
  <div>
    <b-sidebar
      id="add-new-user-sidebar"
      :visible="isTaskHandlerSidebarActive"
      bg-variant="white"
      sidebar-class="sidebar-lg"
      shadow
      backdrop
      right
      @shown="LoadEmployeeData"
      @hidden="resetData"
      @change="(val) => $emit('update:is-task-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <div class="padsidt">
          <div
            class="d-flex justify-content-between align-items-center py-50 px-2 bg-secondary"
          >
            <h5 class="card-title p-50 mb-0 text-white sidebar-heading">
              {{
                employeeData.id != null
                  ? "Update Employee"
                  : "Add New Employee "
              }}
            </h5>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="btn-icon rounded-circle p-25"
              @click="hide"
            >
              <feather-icon icon="XIcon" size="20" class="text-white" />
            </b-button>
          </div>

          <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >
            <!-- Form -->
            <b-form
              class="row myform"
              @submit.prevent="handleSubmit(onSubmit)"
              @reset.prevent="resetForm"
            >
              <!-- Subject-->
              <b-form-group label-for="Employee Name" class="col-12 col-md-6">
                <label class="form-label required">First Name</label>
                <validation-provider #default="{ errors }" name="first_name">
                  <b-form-input
                    id="first_name"
                    @input="RemoveError('first_name')"
                    v-model="employeeData.first_name"
                    autofocus
                    :state="errors.length > 0 ? false : null"
                    trim
                    placeholder="Enter First Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('first_name')">
                    {{ getErrors("first_name") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group label-for="Middle Name" class="col-12 col-md-6">
                <label class="form-label required">Middle Name</label>
                <validation-provider #default="{ errors }" name="middle_name">
                  <b-form-input
                    id="middle_name"
                    @input="RemoveError('middle_name')"
                    v-model="employeeData.middle_name"
                    autofocus
                    :state="errors.length > 0 ? false : null"
                    trim
                    placeholder="Enter Middle Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('middle_name')">
                    {{ getErrors("middle_name") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group label-for="Last Name" class="col-12 col-md-6">
                <label class="form-label required">Last Name</label>
                <validation-provider #default="{ errors }" name="last_name">
                  <b-form-input
                    id="last_name"
                    @input="RemoveError('last_name')"
                    v-model="employeeData.last_name"
                    autofocus
                    :state="errors.length > 0 ? false : null"
                    trim
                    placeholder="Enter Last Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('last_name')">
                    {{ getErrors("last_name") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group label-for="Mobile" class="col-12 col-md-6">
                <label class="form-label required">Mobile</label>
                <validation-provider #default="{ errors }" name="mobile">
                  <b-form-input
                    id="mobile"
                    @input="RemoveError('mobile')"
                    v-model="employeeData.mobile"
                    autofocus
                    :state="errors.length > 0 ? false : null"
                    trim
                    placeholder="Enter mobile"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('mobile')">
                    {{ getErrors("mobile") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group label-for="Email" class="col-12 col-md-6">
                <label class="form-label required">Email</label>
                <validation-provider #default="{ errors }" name="email">
                  <b-form-input
                    id="email"
                    @input="RemoveError('email')"
                    v-model="employeeData.email"
                    autofocus
                    :state="errors.length > 0 ? false : null"
                    trim
                    placeholder="Enter Email"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('email')">
                    {{ getErrors("email") }}
                  </div>
                </validation-provider>
              </b-form-group>
              <b-form-group
                label-for="Gender"
                class="col-12 col-md-6 genderEmployee"
              >
                <label class="form-label required">Gender</label>

                <div class="row mx-0">
                  <div
                    class="col-6 col-md-4 position-relative pr-50 pl-0"
                    v-for="ps in genderOptions"
                    :key="ps.value"
                  >
                    <input
                      class="checkbox-budget"
                      type="radio"
                      name="freq-radios"
                      :id="ps.value"
                      :options="ps"
                      @input="RemoveError('gender')"
                      v-model="employeeData.gender"
                      :value="ps.value"
                    />
                    <label class="for-checkbox-budget" :for="ps.value">
                      <span :data-hover="ps.text"> {{ ps.text }}</span>
                    </label>
                  </div>
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('gender')">
                    {{ getErrors("gender") }}
                  </div>
                </div>
              </b-form-group>

              <b-form-group label-for="Date of Birth" class="col-12 col-md-6">
                <label class="form-label required">Date of Birth</label>
                <flat-pickr
                  v-model="employeeData.dob"
                  :state="errors.length > 0 ? false : null"
                  class="form-control"
                  @input="RemoveError('dob')"
                  :config="{
                    maxDate: new Date().setFullYear(
                      new Date().getFullYear() - 18
                    ),
                  }"
                  placeholder="Select Date Of Birth"
                />
                <small class="text-danger">{{ errors[0] }}</small>
                <div class="text-danger" v-if="hasErrors('dob')">
                  {{ getErrors("dob") }}
                </div>
              </b-form-group>
              <b-form-group
                label-for="Department"
                class="col-12 col-md-6"
              >
                <label class="form-label required">Department</label>
                <validation-provider #default="{ errors }" name="department_id">
                  <v-select
                    @input="
                      onChange('department', $event);
                      RemoveError('department_id');
                    "
                    v-model="employeeData.department_id"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="DepartmentOptions"
                    :reduce="(val) => val.value"
                    :state="errors.length > 0 ? false : null"
                    :clearable="true"
                    input-id="status"
                    placeholder="Select Department"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('department_id')">
                    {{ getErrors("department_id") }}
                  </div>
                </validation-provider>
              </b-form-group>
              <b-form-group
                label-for="Team"
                class="col-12 col-md-6"
              >
                <label class="form-label required">Team</label>
                <validation-provider #default="{ errors }" name="team_id">
                  <!-- multiple -->
                  <v-select
                    @input="
                      onChange('team', $event);
                      RemoveError('team_id');
                    "
                    v-model="employeeData.team_id"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="TeamOptions"
                    :reduce="(val) => val.value"
                    :state="errors.length > 0 ? false : null"
                    :clearable="true"
                    placeholder="Select Team"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('team_id')">
                    {{ getErrors("team_id") }}
                  </div>
                </validation-provider>
              </b-form-group>
              <b-form-group label-for=" Employee Role" class="col-12 col-md-6">
                <label class="form-label required">Employee Role</label>
                <validation-provider #default="{ errors }" name="Employee Role">
                  <v-select
                    v-model="employeeData.role"
                    @input="
                      onChange('Role', $event);
                      RemoveError('role');
                    "
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="RoleOptions"
                    :reduce="(val) => val.value"
                    :state="errors.length > 0 ? false : null"
                    :clearable="true"
                    input-id="status"
                    placeholder="Select Employee Role"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('role')">
                    {{ getErrors("role") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group
                label-for="Reporting To Role"
                class="col-12 col-md-6"
              >
                <label class="form-label required">Reporting To Role</label>
                <validation-provider #default="{ errors }" name="role">
                  <v-select
                    @input="
                      onChange('reportingRole', $event);
                      RemoveError('reporting_role');
                    "
                    v-model="employeeData.reporting_role"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="ReportigRoleOptions"
                    :reduce="(val) => val.value"
                    :state="errors.length > 0 ? false : null"
                    :clearable="true"
                    input-id="status"
                    placeholder="Select Reporting To Role"
                    style="{'overflow' : 'hidden' }"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('reporting_role')">
                    {{ getErrors("reporting_role") }}
                  </div>
                </validation-provider>
              </b-form-group>

              <b-form-group label-for="Reporting To" class="col-12 col-md-6">
                <label class="form-label required">Reporting To</label>
                <validation-provider #default="{ errors }" name="reporting_to">
                  <v-select
                    v-model="employeeData.reporting_to"
                    @input="RemoveError('reporting_to')"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="ReprotingOptions"
                    :reduce="(val) => val.id"
                    :state="errors.length > 0 ? false : null"
                    :clearable="true"
                    input-id="status"
                    placeholder="Select Reporting"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('reporting_to')">
                    {{ getErrors("reporting_to") }}
                  </div>
                </validation-provider>
              </b-form-group>
              <!-- Form Actions -->
              <div class="d-BLOCK mt-2 mb-2 col-12">
                <b-col
                  sm="12"
                  md="12"
                  xl="12"
                  class="mb-1 myform1 pl-0 smallFont"
                >
                  (Note:
                  <label class="form-label requireds smallFont">
                    mark are mandatory field and must be completed</label
                  >)
                </b-col>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  class="formBtn mb-1"
                  type="submit"
                >
                  {{ employeeData.id != null ? "Update" : "Add " }}
                </b-button>
                <b-button
                  v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                  type="button"
                  variant="outline-secondary"
                  @click="hide"
                  class="formBtn mb-1 ml-md-1"
                >
                  Cancel
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar,
  BForm,
  BFormGroup,
  BFormInvalidFeedback,
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BFormRadioGroup,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import Ripple from "vue-ripple-directive";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted } from "@vue/composition-api";
import { avatarText } from "@core/utils/filter";
import { quillEditor } from "vue-quill-editor";
import axios from "@axios";
import { useRouter } from "@core/utils/utils";

export default {
  components: {
    flatPickr,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    ValidationProvider,
    ValidationObserver,
    quillEditor,
    BFormRadioGroup,

    vSelect,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: "isTaskHandlerSidebarActive",
    event: "update:is-task-handler-sidebar-active",
  },
  props: {
    isTaskHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    EmployeeId: {
      type: Number,
      required: false,
    },
  },
  data() {
    const DesignationOptions = [];
    const genderOptions = [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
      { text: "Other", value: "other" },
    ];
    return {
      DesignationOptions,
      genderOptions,
      visible: true,
      error: false,
      DepartmentOptions: [],
      ShiftOptions: [],
    };
  },
  methods: {
    resetData() {
      this.errors = [];
      this.employeeData.first_name = "";
      this.employeeData.department_id = "";
      this.employeeData.team_id = "";
      this.employeeData.gender = null;
      this.employeeData.dob = null;
      this.employeeData.email = "";
      this.employeeData.role = "";
      this.employeeData.mobile = "";
      this.employeeData.reporting_role = null;
       this.employeeData.reporting_to = null;
    },

    onChange(element, value) {
    if (element == "department") {
        this.employeeData.team_id = "";
        this.employeeData.role = "";
        this.employeeData.reporting_to = "";
        axios.get(`/getTeamFromdepartmentId/${value}`).then((response) => {
          this.TeamOptions = response.data.data;
        });
        axios.get(`/getRoleFromdepartmentId/${value}`).then((response) => {
          this.employeeData.reporting_role = "";
          this.RoleOptions = response.data.data;
        });

        // axios.get(`getReportingRoleFromdepartmentId/${value}`).then(response => {
        // // this.ReportigRoleOptions = response.data.data
        // })
      }
      if (element == "Role") {
        console.log(value,'value')

        this.employeeData.reporting_role = "";
        axios.get(`/getReportingtoFromemployeeId/${value}`).then((response) => {
          this.ReportigRoleOptions = response.data.data;
        });
      }
      if (element == "reportingRole") {
        this.employeeData.reporting_to = "";
        axios.get(`/getReportingtoFromRoleId/${value}`).then((response) => {
          this.ReprotingOptions = response.data.data;
        });
      }
    },
  },
  mounted() {
    axios.get("getDepartment").then((response) => {
      this.DepartmentOptions = response.data.department;
    });
    axios.get("getDesignation").then((response) => {
      this.DesignationOptions = response.data.data;
    });
    //   axios.get('getRole').then(response => {
    // this.ReportigRoleOptions = response.data.data
    // })
    axios.get("getShiftList").then((response) => {
      this.ShiftOptions = response.data.data;
    });
    //   axios.get('getUser').then(response => {
    //   this.UserOptions = response.data.data
    //        })
  },

  setup(props, { emit }) {
    const blankEmployeeData = {
      id: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      department_id: null,
      team_id: null,
      mobile: null,
      email: null,
      dob: null,
      gender: null,
      role: null,
      reporting_role: null,
      reporting_to: null,
    };
    const EmployeeAccess_slug = ref(null);
    const EmployeeAccessOptions = ref([]);
    const TeamOptions = ref([]);
    const UserOptions = ref([]);
    const ReprotingOptions = ref([]);
    const RoleOptions = ref([]);
    const ReportigRoleOptions = ref([]);
    const errors = ref([]);
    const project = ref([]);
    const ContectOptions = ref([]);
    const accountOptions = ref([]);
    const employeeData = ref(JSON.parse(JSON.stringify(blankEmployeeData)));
    const resetuserData = () => {
      employeeData.value = JSON.parse(JSON.stringify(blankEmployeeData));
    };

    const RemoveError = (errorName) => {
      errors.value[errorName] = " ";
    };

    const hasErrors = (fieldName) => {
      return fieldName in errors.value;
    };
    const getErrors = (fieldName) => {
      return errors.value[fieldName][0];
    };
    const LoadEmployeeData = () => {
      UserOptions.value = [];
      UserOptions.value.push({ id: 1, name: "Super Admin" });
      axios.get("getAccessOptions").then((response) => {
        EmployeeAccessOptions.value = response.data.data;
      });

      if (props.EmployeeId != 0) {
        axios.get(`EditEmployee/${props.EmployeeId}`).then((response) => {
          UserOptions.value = response.data.data.UserOptions;
          UserOptions.value.push({ id: 1, name: "Super Admin" });
          employeeData.value = response.data.data.employee;
          employeeData.value.EmployeeAccess = response.data.data.EmployeeAccess;
          EmployeeAccess_slug.value = employeeData.value.EmployeeAccess.slug;
          employeeData.value.team_id = response.data.data.team;
          // employeeData.value.Rotational_Shift = response.data.data.employee.rotational_shift

          if (EmployeeAccess_slug.value == "organization") {
            RoleOptions.value = [];
            ReportigRoleOptions.value = [];
            RoleOptions.value = [];
            RoleOptions.value.push({
              id: 1,
              name: "Super Admin",
              slug: "super-admin",
            });
            ReportigRoleOptions.value.push({
              value: 1,
              label: "Super Admin",
              slug: "super-admin",
            });
            RoleOptions.value.push({
              id: 1,
              label: "Super Admin",
              slug: "super-admin",
            });
          } else {
            axios
              .get(
                `/getEmployeeFromdepartmentId/${employeeData.value.department_id}`
              )
              .then((response) => {
                RoleOptions.value = JSON.parse(
                  JSON.stringify(response.data.data)
                );
                axios
                  .get(
                    `/getTeamFromdepartmentId/${employeeData.value.department_id}`
                  )
                  .then((response) => {
                    TeamOptions.value = JSON.parse(
                      JSON.stringify(response.data.data)
                    );
                  });
              });
            axios
              .get(
                `/getReportingtoFromRoleId/${employeeData.value.reporting_role}`
              )
              .then((response) => {
                ReprotingOptions.value = response.data.data;
              });
            axios
              .get(
                `getReportingRoleFromdepartmentId/${employeeData.value.department_id}`
              )
              .then((response) => {
                ReportigRoleOptions.value = response.data.data;
              });
          }

          // employeeData.value.joiningDate = response.data.data.user.date_of_joining
          // employeeData.value.role = response.data.data.user.role_id
          // employeeData.value.email = response.data.data.user.email
          // employeeData.value.mobile = response.data.data.user.phone
        });
      } else {
      }
    };
    const toast = useToast();

    const { route, router } = useRouter();
    const onSubmit = () => {
      if (employeeData.value.id != null) {
        axios
          .post(`/UpdateEmployee/${employeeData.value.id}`, employeeData)
          .then(() => {
            emit("refatch-data");
            emit("close-sidebar");

            toast({
              component: ToastificationContent,
              props: {
                title: "Employee Updated Successfully.",
                icon: "CheckIcon",
                variant: "success",
              },
            });
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
            } else {
              toast(
                {
                  component: ToastificationContent,
                  props: {
                    title: "Something went wrong Please try again later",
                    icon: "bellIcon",
                    variant: "danger",
                  },
                },
                { timeout: 3000 }
              );
            }
          });
      } else {
        axios
          .post("/employees", employeeData.value)
          .then(() => {
            emit("refatch-data");
            emit("close-sidebar");

            toast({
              component: ToastificationContent,
              props: {
                title: "Employee Created Successfully.",
                icon: "CheckIcon",
                variant: "success",
              },
            });
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
            } else {
              toast(
                {
                  component: ToastificationContent,
                  props: {
                    title: "Something went wrong Please try again later",
                    icon: "bellIcon",
                    variant: "danger",
                  },
                },
                { timeout: 3000 }
              );
            }
          });
      }
    };
    return {
      // Sidebar
      errors,
      getErrors,
      hasErrors,
      employeeData,
      onSubmit,
      LoadEmployeeData,
      TeamOptions,
      UserOptions,
      ReprotingOptions,
      RoleOptions,
      RemoveError,
      ReportigRoleOptions,
      EmployeeAccessOptions,
      EmployeeAccess_slug,
    };
  },
};
</script>


<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/quill.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>





