<template>
  <div class="permissions_box">
    <!-- <h4>User Profiles</h4> -->
    <b-card>
      <div class="d-flex justify-content-between align-items-center my-1">
        <div class="border-left-primary border-left-3">
          <p class="card-title p-50 mb-0">Role Permissions</p>
        </div>
      </div>
      <form action="">
        <div class="card mb-0">
          <div class="inner_permission_box">
            <div class="chk_box">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <!-- basic -->
                 
                  <b-row class="my-2">
                    <b-col md="6" v-if="props_role_id == 0">
                      <b-form-group
                        label="Department"
                        label-for="Department"
                        label-class="required"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="department_id"
                        >
                          <v-select
                            @input="onChange('department', $event)"
                            input-id="department_id"
                            :options="JSON.parse(JSON.stringify(DepartmentOptions ))"
                            v-model="department_id"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" 
                            :reduce="(val) => val.value" 
                            
                            :clearable="true"
                            :state="errors.length > 0 ? false : null"
                            placeholder="Select Department" />
                          <div>
    
                          </div>
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" v-if="props_role_id == 0">
                      <b-form-group
                        label="Role"
                        label-for="role_id"
                        label-class="required"
                      >
                        <validation-provider
                          #default="{ errors }"
                          name="role_id"
                        >
                          <v-select
                            @input="onChange('role', $event)"
                            input-id="role_id"
                            :options="rolesOptions"
                            label="name"
                            value="id"
                            :reduce="(val) => val.id"
                            v-model="role_id"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :clearable="true"
                            :state="errors.length > 0 ? false : null"
                            placeholder="Select Role"
                          />
                          <small class="text-danger">{{ errors[0] }}</small>
                        </validation-provider>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>

            <b-form-checkbox v-if="props_role_id == 0" v-model="select_all"
                  @input="onChange('role', $event); "
                  :value="1"
                  :unchecked-value="null"
                  input-id="select_all"
                  class="custom-control-primary mr-2">
                  Select All
                
            </b-form-checkbox>
            <div
              class="chk_box stammingCheckbox"
              v-for="item in permissions"
              :key="item.id"
            >
              <div class="row">
                <div class="col-sm-3">
                  <h5 class="text-primary font-weight-bolder p-50">
                    <b-form-checkbox
                      v-model="permissionsMaster"
                      :value="'permission_' + item.slug"
                      class="disinblkchk"
                      :ref="'permission_' + item.slug"
                      @change="selectAll('permission_' + item.slug, $event)"
                    >
                    </b-form-checkbox>
                    {{ item.name }}
                  </h5>
                </div>
                <div class="col-sm-9">
                  <div class="row pointersPermission">
                    <div
                      class="col-sm-6 col-md-4 col-lg-4 p-50"
                      v-for="item1 in item.permission"
                      :key="item1.id"
                    >
                      <b-form-checkbox
                        v-model="selected"
                        :value="item1.id"
                        :ref="'permission_' + item.slug"
                        @change="
                          selectAllChaild('permission_' + item.slug, $event)
                        "
                      >
                        {{ item1.name }}
                      </b-form-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn_sec" v-if="props_role_id == 0">
              <b-button
                class="btn d-inline-block mr-1 btn-primary"
                @click="formSubmitted"
                variant="primary"
                >Submit</b-button
              >
            </div>
          </div>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BButton,
  BFormInput,
  BFormInvalidFeedback,
  BMedia,
  BAvatar,
  BCard,
  BToast,
  BFormCheckbox,
  BAlert,
  BCardText,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import formValidation from "@core/comp-functions/forms/form-validation";
import "@/libs/vue-select";
import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted } from "@vue/composition-api";
import { BFormSelect } from "bootstrap-vue";
import { BFormFile } from "bootstrap-vue";
import { useToast } from "vue-toastification/composition";
import { useRouter } from "@core/utils/utils";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import axios from "@axios";
export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BMedia,
    BAvatar,
    BToast,
    BCard,
    BFormCheckbox,
    BAlert,
    BCardText,
    ValidationProvider,
    vSelect,
    BFormSelect,
    BButton,
  },
  props: {
    props_role_id: {
      default: 0,
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      permissions: [],
      selected: [],
      rolesOptions: [],
      // role_id: null,
      role_id: this.props_role_id? this.props_role_id : null,

      select_all: null,
      department_id: null,
      SuperAdminSelected: false,
      permissionsMaster: [],
      DepartmentOptions: [],
      SuparAdmin: [],
      user:null,
      // profilepermissions: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs["my-modal"].toggle("#toggle-btn");
      });
    },
  },
  mounted() {
     this.getPermission()
    if(this.props_role_id != 0){
      this.onChange('role', this.props_role_id)
    }
    // axios.get("/getDepartment").then((response) => {
    //   this.DepartmentOptions = response.data;
    // });
    // axios.get("/permissions").then((response) => {
    //   this.permissions = response.data.menus;
    //   //  this.rolesOptions = response.data.roles;
    // });
    // axios.get("/SuparAdmin").then((response) => {
    //   this.SuparAdmin = response.data;
    // });
    //  axios.get("api/profilepermissions").then((response) => {
    //   this.profilepermissions = response.data;
    // });
  },

  methods: {
getPermission(){
      this.user = JSON.parse(localStorage.getItem("userData"))
      if(this.user){
        this.user = this.user.slug
      }
     axios.get("/getDepartment").then((response) => {
      this.DepartmentOptions = response.data.department;
    });
    axios.get("/permissions").then((response) => {
      this.permissions = response.data.menus;
      //  this.rolesOptions = response.data.roles;
    });
    axios.get("/SuparAdmin").then((response) => {
      this.SuparAdmin = response.data;
    })
},

    selectAll(check, event) {
      if (this.permissionsMaster.includes(check)) {
        this.$refs[check].map((item) => {
          if (typeof item.value === "number") {
            if (!this.selected.includes(item.value)) {
              this.selected.push(item.value);
            }
          }
        });
      } else {
        this.$refs[check].map((item) => {
          if (typeof item.value === "number") {
            this.selected.splice(this.selected.indexOf(item.value), 1);
          }
        });
      }
    },
    selectAllChaild(check, event) {
      if (check) {
        this.$refs[check].map((item) => {
          if (typeof item.value === "string") {
            this.permissionsMaster.splice(
              this.permissionsMaster.indexOf(item.value)
            );
          }
        });
      }
    },

    formSubmitted() {
      axios
        .post("/profilepermissions", {
          selected_value: this.selected,
          role: this.role_id,
        })
        .then((response) => {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Permission Updated Successfully",
              icon: "EditIcon",
              variant: "success",
            },
          });
        });
    },
    onChange(element, value) {
      if (element == "role") {
        this.permissionsMaster = [];
        axios.get(`/getPermissionFromRoleId/${value}`).then((response) => {
          this.selected = JSON.parse(
            JSON.stringify(response.data.rolepermissions)
          );
        });
      }

      
      if (element == "department") {
        this.role_id = null;
        axios
          .get(`/getRoleFromDepartmentId/${value}`)
          .then((response) => {
            this.rolesOptions = JSON.parse(JSON.stringify(response.data.data));
          });
      }
      
      console.log(this.rolesOptions, "helo");
    },
  },

  setup(props, { emit }) {
    const blankProjectsData = {
      permission_id: null,
    };
    const isTaskHandlerSidebarActive = ref(false);
    const errors = ref([]);
    const ProjectsData = ref(JSON.parse(JSON.stringify(blankProjectsData)));
    const resetProjectsData = () => {
      ProjectsData.value = JSON.parse(JSON.stringify(blankProjectsData));
    };
    const { refFormObserver, getValidationState, resetForm } =
      formValidation(resetProjectsData);
    const PROJECTS_APP_STORE_MODULE_NAME = "permission";
    const toast = useToast();
    const { route, router } = useRouter();

    return {
      isTaskHandlerSidebarActive,
    };
  },
};
</script>



<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
