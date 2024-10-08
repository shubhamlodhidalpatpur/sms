<template >
  <div class="add_mentorship_program">
    <b-row>
      <b-col cols="12" md="6">
        <h4 class="card-title fontgry">
          <b-link :to="{ name: 'StudentAttendance' }">Attendance</b-link>/
          <span v-if="$route.name == 'take-attendance'"> Take Attendance</span>
          <span v-else>Update Attendance </span>
        </h4>
      </b-col>
    </b-row>
    <b-form>
      <!-- Tab 1 -->

      <validation-observer ref="accountRules" tag="form">
        <b-card no-body class="p-2">
          <b-row>
            <b-col cols="12" md="4" class="mb-3">
              <label class="form-label required">Class</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Class"
              >
                <v-select
                  input-id="deduction"
                  v-model="AttendanceData.class"
                  :options="ClassOption"
                  @input="getSection(AttendanceData.class)"
                  :state="errors.length > 0 ? false : null"
                  placeholder="Select Class"
                  :reduce="(val) => val.value"
                />
                <small class="text-danger">{{ errors[0] }}</small>
                <div class="text-danger" v-if="hasErrors('class')">
                  {{ getErrors("class") }}
                </div>
              </validation-provider>
            </b-col>

            <b-col cols="12" md="4" class="mb-3" v-if="SectionOption.length>0">
              <label class="form-label required">Section</label>
              <validation-provider
                #default="{ errors }"
                rules="required"
                name="Section"
              >
                <v-select
                  input-id="section"
                  v-model="AttendanceData.section"
                  :options="SectionOption"
                  :state="errors.length > 0 ? false : null"
                  placeholder="Select Section"
                  :reduce="(val) => val.value"
                />
                <small class="text-danger">{{ errors[0] }}</small>
                <div class="text-danger" v-if="hasErrors('section')">
                  {{ getErrors("section") }}
                </div>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="4" class="mb-3">
            <label class="form-label required">Date </label>
                <flat-pickr
                  v-model="AttendanceData.date"
                  :state="errors.length > 0 ? false : null"
                  class="form-control"
                  @input="RemoveError('dob')"
                  placeholder="Select Date"
                />
            </b-col>

            

          </b-row>

          <div class="container mt-0">
            <b-table
              striped
              hover
              bordered
              :items="AttendanceData.studentsData"
              :fields="fields"
              class="staticTable"
            >
             <template #cell(sr_no)="data">
                <div class="text-nowrap">
                  <span
                    class="align-text-top text-capitalize"
                    >{{ data.index+1 }}</span
                  >
                </div>
              </template>
              <template #cell(student_id)="data">
                <div class="text-nowrap">
                  <span
                    class="align-text-top text-capitalize"
                    :title="data.item.studentId"
                    >{{ data.item.studentId }}</span
                  >
                </div>
              </template>
              <template #cell(name)="data">
                <div class="text-nowrap">
                  <span
                    class="align-text-top text-capitalize"
                    :title="data.item.name"
                    >{{ data.item.name }}</span
                  >
                </div>
              </template>
              <template #cell(action)="data">
                <b-form-checkbox v-model="data.item.present" switch>
                </b-form-checkbox>
              </template>
            </b-table>

          </div>

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
import flatPickr from "vue-flatpickr-component";
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
  BTable,BFormCheckbox,
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
    BTable,
    flatPickr,BFormCheckbox,
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
      fields: [
        'sr_no',
        'studentId',
        'name',
        'action',
       
      ],
    };
  },
  computed: {
  },
  mounted() {
    axios.get("getClass").then((response) => {
      this.ClassOption = response.data.class;
    });
    if (this.$route.params.date) {
          this.CheckClassSection(this.$route.params.class);
          this.AttendanceData.date=this.$route.params.date;
    }
    
  },
  created() {},
  destroyed() {},
  methods: {
    getSection(id) {
      this.AttendanceData.section=null;
      this.SectionOption=[];
      axios.get(`getSectionBasedOnClass/${id}`).then((response) => {
        this.SectionOption = response.data.section;
      });
    },
    CheckClassSection(id){
      this.AttendanceData.section=null;
      this.SectionOption=[];
      axios.get(`checkClassSection/${id}`).then((response) => {
        this.AttendanceData.class = response.data.class_id;
        if(response.data.section_id){
          this.getSection(this.AttendanceData.class);
          this.AttendanceData.section=response.data.section_id;
          this.getStudentData();
        }
      });

    },
    getStudentData(){
      axios.get("stuentAttendanceData",{params:{AttendanceData:this.AttendanceData}}).then((response) => {
      this.AttendanceData.studentsData = response.data.data;
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
      if (AttendanceData.value.id != null) {
        axios
          .put(`/LeaveTypes/${route.value.params.id}`, AttendanceData.value)
          .then((response) => {
            toast({
              component: ToastificationContent,
              props: {
                title: "Leave Type Updated successfully",
                icon: "BellIcon",
                variant: "success",
              },
            });
            router.replace({ name: "leave-type" });
          })
          .catch((error) => {
            show.value = false;
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
            }
          });
        show.value = false;
      } else {
        axios
          .post("fees", AttendanceData.value)
          .then((response) => {
            toast({
              component: ToastificationContent,
              props: {
                title: "Fees Added successfully",
                icon: "BellIcon",
                variant: "success",
              },
            });
            router.replace({ name: "fees" });
          })
          .catch((error) => {
            show.value = false;
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
            }
          });
        show.value = false;
      }
    };
    const AttendanceData = ref({
      id: null,
      class: "",
      section: "",
      studentsData: [],
      date:null,
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
    const errors = ref([]);
    return {
      formSubmitted,
      show,
      AttendanceData,
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
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/quill.scss";
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>
    <style lang="scss">
.repeater-form {
  overflow: hidden;
  transition: 0.35s height;
}
.vue-form-wizard .wizard-navigation .wizard-nav {
  padding: 0px !important;
}
.table thead th {
  background-color: #f0f0f0;
}

.table tfoot td {
  background-color: #e0e0e0;
}

.table th,
.table td {
  vertical-align: middle;
}

.table td:first-child {
  text-align: left;
}

.table th {
  font-weight: bold;
}


@import "~@core/scss/vue/libs/vue-wizard.scss";
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/quill.scss";
</style>