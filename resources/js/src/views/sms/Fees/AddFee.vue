<template >
  <div class="add_mentorship_program">
    <b-row>
      <b-col cols="12" md="6">
        <h4 class="card-title fontgry">
          <b-link :to="{ name: 'fees' }">Fees</b-link>/
          <span v-if="$route.name == 'add-fees'"> Add Fees</span>
          <span v-else>Edit Fees </span>
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
                  v-model="FeesData.class"
                  :options="ClassOption"
                  @input="getSection(FeesData.class)"
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
                  v-model="FeesData.section"
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
              <b-form-group label-for="fees_type" class="genderEmployee">
                <label class="form-label required">Fees Type</label>
                <div class="d-flex justify-content-between">
                  <div
                    class="position-relative pr-50 pl-0"
                    v-for="ps in FeesTypeOptions"
                    :key="ps.value"
                    style="flex: 1; margin-right: 10px"
                  >
                    <input
                      class="checkbox-budget"
                      type="radio"
                      name="freq-radios"
                      :id="ps.value"
                      @input="RemoveError('fees_type')"
                      v-model="FeesData.fees_type"
                      :value="ps.value"
                      style="display: none"
                    />
                    <label
                      class="for-checkbox-budget d-flex justify-content-center align-items-center"
                      :for="ps.value"
                      style="
                        border: 1px solid #ccc;
                        padding: 2px;
                        cursor: pointer;
                        border-radius: 10px;
                      "
                    >
                      <span :data-hover="ps.text">{{ ps.text }}</span>
                    </label>
                  </div>
                </div>
                <small class="text-danger">{{ errors[0] }}</small>
                <div class="text-danger" v-if="hasErrors('fees_type')">
                  {{ getErrors("fees_type") }}
                </div>
              </b-form-group>
            </b-col>
          </b-row>

          <div class="container mt-0" v-if="FeesData.fees_type == 'Admission'">
            <b-table
              striped
              hover
              bordered
              :items="FeesData.Addmission_payments"
              :fields="fields"
              class="staticTable"
            >
              <template #cell(paymentType)="data">
                <div class="text-nowrap">
                  <span
                    class="align-text-top text-capitalize"
                    :title="data.item.paymentType"
                    >{{ data.item.paymentType }}</span
                  >
                </div>
              </template>
              <template #cell(amount)="data">
                <div class="text-nowrap">
                  <b-form-input
                    v-model="data.item.amount"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Enter Amount"
                    autocomplete="off"
                    @input="RemoveError('amount')"
                  />
                </div>
              </template>
            </b-table>
          <div class="total-amount-wrapper">
            <div class="total-amount">
              <strong>Total Amount: </strong>
              <span>{{ totalAmount }}</span>
            </div>
          </div>

          </div>
          <div
            class="container mt-0"
            v-if="FeesData.fees_type == 'Installment'"
          >
            <b-table
              striped
              hover
              bordered
              :items="FeesData.installment_payments"
              :fields="InstallmentFields"
              class="staticTable"
            >
              <template #cell(sr)="data">
                <div class="text-nowrap">
                  <span class="align-text-top text-capitalize">{{
                    data.index + 1
                  }}</span>
                </div>
              </template>
              <template #cell(from_date)="data">
                <flat-pickr
                  v-model="data.item.from_date"
                  :state="errors.length > 0 ? false : null"
                  class="form-control"
                  @input="RemoveError('dob')"
                  placeholder="Select From Date"
                />
              </template>
              <template #cell(till_date)="data">
                <flat-pickr
                  v-model="data.item.till_date"
                  :state="errors.length > 0 ? false : null"
                  class="form-control"
                  @input="RemoveError('dob')"
                  placeholder="Select Till Date"
                />
              </template>
              <template #cell(amount)="data">
                <div class="text-nowrap">
                  <b-form-input
                    v-model="data.item.amount"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Enter Amount"
                    autocomplete="off"
                    @input="RemoveError('amount')"
                  />
                </div>
              </template>
              <template #cell(remark)="data">
                <b-form-input
                  v-model="data.item.remark"
                  :state="errors.length > 0 ? false : null"
                  placeholder="Enter remark"
                  autocomplete="off"
                  @input="RemoveError('remark')"
                />
                
              </template>
              <template #cell(action)="data">
                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="success" pill @click="addField(data.index)">
                <feather-icon icon="PlusIcon" size="18" />
               </b-button>
                
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
  BTable,
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
    flatPickr,
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
      FeesTypeOptions: [
        { text: "Admission", value: "Admission" },
        { text: "Installment", value: "Installment" },
      ],
      fields: [
        { key: "paymentType", label: "Being Payment Of" },
        { key: "amount", label: "Rs" },
      ],
      InstallmentFields: [
        { key: "sr", label: "Sr" },
        { key: "from_date", label: "From Date" },
        { key: "till_date", label: "Till Date" },
        { key: "amount", label: "Rs" },
        { key: "remark", label: "Remark" },
        'action',
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.FeesData.Addmission_payments.reduce((total, item) => {
        this.FeesData.AddmisionTotalAmmount =total + (parseFloat(item.amount) || 0);
        return this.FeesData.AddmisionTotalAmmount;
      }, 0).toFixed(2);
    }
  },
  mounted() {
    axios.get("getClass").then((response) => {
      this.ClassOption = response.data.class;
    });
    axios.get("AdmissionFees").then((response) => {
      this.FeesData.Addmission_payments = response.data.data;
    });
    if (this.$route.params.id) {
      if (this.$route.name == "edit-fees") {
        axios
          .get(`fees/${this.$route.params.id}/edit`)
          .then((response) => {
            const emp = response.data.data;
            this.getSection(emp.class_id);
            this.FeesData = {
              id: emp.id,
              class: emp.class_id,
              section: emp.section_id,
              fees_type: "Admission",
              Addmission_payments:emp.AdmissionFee,
              installment_payments:emp.InstallmentFee,
              
            };
          });
      }
    }
  },
  created() {},
  destroyed() {},
  methods: {
    addField(index){
      let data = {
       from_date: null, till_date: null, amount: null, remark: null
      }
      this.FeesData.installment_payments.splice(index+1, 0, data);

    },
    calculateTotal() {
      return this.payments.reduce((acc, payment) => acc + payment.amount, 0);
    },
    getSection(id) {
      this.FeesData.section=null;
      this.SectionOption=[];
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
      if (FeesData.value.id != null) {
        axios
          .put(`/LeaveTypes/${route.value.params.id}`, FeesData.value)
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
          .post("fees", FeesData.value)
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
    const FeesData = ref({
      id: null,
      class: "",
      section: "",
      fees_type: "",
      AddmisionTotalAmmount:0,
      Addmission_payments: [],
      installment_payments: [
        { id:null,from_date: null, till_date: null, amount: null, remark: null },
      ],
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
      FeesData,
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
.total-amount-wrapper {
  margin-top: 20px;
  padding: 15px;
  border-top: 2px solid #007bff;
  background-color: #f8f9fa;
  display: flex;
  justify-content: flex-end;
}

.total-amount {
  font-size: 1.5em;
  font-weight: bold;
  color: #343a40;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
}

.total-amount span {
  color: #ffc107;
  font-weight: bold;
}

@import "~@core/scss/vue/libs/vue-wizard.scss";
@import "~@core/scss/vue/libs/vue-select.scss";
@import "~@core/scss/vue/libs/quill.scss";
</style>