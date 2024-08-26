<template >
  <div class="add_mentorship_program">
    <b-row>
      <b-col cols="12" md="6">
        <h4 class="card-title fontgry">
          <b-link :to="{ name: 'teacher' }">Teacher</b-link>/
          <span>Add Teacher</span>
        </h4>
      </b-col>
    </b-row>
    <b-form>
      <!-- Tab 1 -->

      <validation-observer ref="accountRules" tag="form">
        <b-card no-body class="p-2">
          <b-col md="12">
            <b-row>
              <b-col md="4">
                <label class="form-label required">Teacher Id</label>
                <validation-provider #default="{ errors }" name="teacher_id">
                  <b-form-input
                    placeholder="teacher_id"
                    v-model="TeacherData.teacher_id"
                    disabled="true"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('teacher_id')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('teacher_id')">
                    {{ getErrors("teacher_id") }}
                  </div>
                </validation-provider>
              </b-col>
              <b-col md="4">
                <label class="form-label required">First Name</label>
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="first_name"
                >
                  <b-form-input
                    placeholder="first_name"
                    v-model="TeacherData.first_name"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('first_name')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('first_name')">
                    {{ getErrors("first_name") }}
                  </div>
                </validation-provider>
              </b-col>
              <b-col md="4">
                <label class="form-label required">Middle Name</label>
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="middle_name"
                >
                  <b-form-input
                    placeholder="middle_name"
                    v-model="TeacherData.middle_name"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('middle_name')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('middle_name')">
                    {{ getErrors("middle_name") }}
                  </div>
                </validation-provider>
              </b-col>
              <b-col md="4">
                <label class="form-label required">Last Name</label>
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="last_name"
                >
                  <b-form-input
                    placeholder="last_name"
                    v-model="TeacherData.last_name"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('last_name')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('last_name')">
                    {{ getErrors("last_name") }}
                  </div>
                </validation-provider>
              </b-col>

              <b-col md="4">
                <label class="form-label required">Mobile</label>
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="mobile"
                >
                  <b-form-input
                    placeholder="mobile"
                    v-model="TeacherData.mobile"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('mobile')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('mobile')">
                    {{ getErrors("mobile") }}
                  </div>
                </validation-provider>
              </b-col>
               <b-col md="4">
                <label class="form-label required">email</label>
                <validation-provider
                  #default="{ errors }"
                  rules="required"
                  name="email"
                >
                  <b-form-input
                    placeholder="last_name"
                    v-model="TeacherData.email"
                    :state="errors.length > 0 ? false : null"
                    class="form-control"
                    @input="RemoveError('email')"
                  />

                  <small class="text-danger">{{ errors[0] }}</small>
                  <div class="text-danger" v-if="hasErrors('email')">
                    {{ getErrors("email") }}
                  </div>
                </validation-provider>
               </b-col>
            </b-row>
          </b-col>

          <b-row class="mt-1">
            <b-col sm="12" class="text-center">
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                :disabled="show"
                variant="primary"
                @click="formSubmitted"
                class="btn d-inline-block mr-1 btn-primary"
              >
                <span>SUBMIT</span>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </validation-observer>
    </b-form>
  </div>
</template>
    
    
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import { required } from "@validations";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { useRouter } from "@core/utils/utils";
import axios from "@axios";
import vSelect from "vue-select";
import { ref } from "@vue/composition-api";
import Ripple from "vue-ripple-directive";
import { heightTransition } from "@core/mixins/ui/transition";
import { useToast } from "vue-toastification/composition";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BFormGroup,
  BForm,
  BFormInput,
  BOverlay,
  BToast,
  BFormTextarea,
  BFormFile,
  BFormDatepicker,
  BFormTimepicker,
  BCard,
} from "bootstrap-vue";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BLink,
    BButton,
    BFormGroup,
    BForm,
    BFormInput,
    BOverlay,
    BToast,
    ToastificationContent,
    vSelect,
    BFormTextarea,
    BFormFile,
    BFormDatepicker,
    BFormTimepicker,
    BCard,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  mixins: [togglePasswordVisibility],
  data() {
    return {
      required,
      nextTodoId: 0,
      in_time_disable: false,
      out_time_disable: false,
      ClassOption: [],
      SectionOption: [],
      AllotmentTypeModeOptions: [
        { label: "Monthly", value: "Monthly" },
        { label: "Yeary", value: "Yeary" },
      ],
      LapsOptions: [
        { label: "yes", value: "yes" },
        { label: "no", value: "no" },
      ],
    };
  },
  computed: {},
  mounted() {
    // axios.get("getplans").then((response) => {
    //   this.PlanOptions = response.data.responseData.data;
    // });
    axios.get("getClass").then((response) => {
      this.ClassOption = response.data.class;
      console.log(this.ClassOption, "ClassOption");
    });
    axios.get(`getEmployeeId`).then((response) => {
      this.TeacherData.teacher_id = response.data.data;
    });
  },
  created() {},
  destroyed() {},
  methods: {
    getSection(id) {
      axios.get(`getSectionBasedOnClass/${id}`).then((response) => {
        this.SectionOption = response.data.section;
      });
    },
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$refs.leadstagesRules.validate().then((success) => {
          if (success) {
            resolve(true);
          } else {
            reject();
          }
        });
      });
    },

    initTrHeight() {
      this.trSetHeight(null);
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight);
      });
    },
  },

  setup() {
    const statusOptions = [
      { label: "Active", value: "A" },
      { label: "Inactive", value: "I" },
    ];
    const toast = useToast();
    const { route, router } = useRouter();
    const show = ref(false);
    let documentUpload = ref(false);
    const formSubmitted = () => {
          axios
          .post("teachers", TeacherData.value)
          .then((response) => {
            toast({
              component: ToastificationContent,
              props: {
                title: "Teacher Added successfully",
                icon: "BellIcon",
                variant: "success",
              },
            });
            router.replace({ name: "teacher" });
          })
          .catch((error) => {
            show.value = false;
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
            }
          });
        show.value = false;
    };
    const TeacherData = ref({
      id: null,
      teacher_id: null,
      first_name: "",
      middle_name: "",
      last_name: "",
      mobile: "",
      email: "",
    });
    const RemoveError = (errorName) => {
      errors.value[errorName] = " ";
    };
    const hasErrors = (fieldName) => {
      return fieldName in errors.value;
    };
    const getErrors = (fieldName) => {
      return errors.value[fieldName][0];
    };
    if (route.value.params.id) {
      if (route.value.name == "edit-leave-type") {
        axios
          .get(`LeaveTypes/${route.value.params.id}/edit`)
          .then((response) => {
            const emp = response.data.data;
            TeacherData.value = {
              id: emp.id,
              name: emp.name,
              deduction: emp.deduction,
              allotment: emp.allotment,
              allotment_type: emp.allotment_type,
              laps: emp.laps,
              max_allotment_count: emp.max_allotment_count,
            };
          });
      }
    }
    const errors = ref([]);
    return {
      formSubmitted,
      show,
      TeacherData,
      hasErrors,
      getErrors,
      errors,
      RemoveError,
      statusOptions,
      documentUpload,
    };
  },
};
</script>
    
    <style lang="scss">
.repeater-form {
  overflow: hidden;
  transition: 0.35s height;
}
.vue-form-wizard .wizard-navigation .wizard-nav {
  padding: 0px !important;
}

@import "~@core/scss/vue/libs/vue-wizard.scss";
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/quill.scss";
</style>