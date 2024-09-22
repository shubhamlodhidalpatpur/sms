<template>
  <div>
    <b-row>
      <b-col
        md="12"
        lg="12"
      >

        <!-- card 1 -->
        <b-card
        >
          <div class="d-md-flex justify-content-between align-items-center my-1">
            <div class="border-left-primary border-left-3">
              <p class="card-title p-50 mb-0">Employee</p>
            </div>
            <div >
              <!-- <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mb-2 ml-1"
                v-b-modal.modal-select2
              >
                Modal
              </b-button> -->
              
              <div class="d-flex justify-content-between mt-2 mt-md-0">
                <!-- <b-button  @click="showEmployeeImportModel=true"  v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mb-0 ml-md-1 basicButton">
                     Import
                </b-button> -->
                <b-button
                  variant="primary"
                  class="mb-0 ml-md-1 basicButton"
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'" v-b-toggle.collapse-1               >
                  Filter
                </b-button>
                <b-button
                @click="isEventHandlerSidebarActive=true,EmployeeEdit=0"
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  v-b-toggle.sidebar-right
                  variant="primary"
                  class="mb-0 ml-1 basicButton"
                >
                Add 
                </b-button>
              </div>
            </div>
          </div>


          <div>
            <b-collapse id="collapse-1" class="my-2">
              <b-card class="filterBox mb-0">
                <b-row>
                  <b-col
                    md="6"
                    xl="4"
                    class=""
                  >

                    <!-- basic -->
                    <b-form-group
                      label="Employee Name"
                      label-for="Name"
                    >
                      <b-form-input
                        v-model="employeeFilterData.name"
                        id="basicInput"
                        placeholder="Enter Employee Name"
                      />
                    </b-form-group>
                  </b-col>


                  <b-col
                    md="6"
                    xl="4"
                    class=""
                  >

                    <!-- basic -->
                    <b-form-group
                      label="Email"
                      label-for="Email"
                    >
                      <b-form-input
                       v-model="employeeFilterData.email"
                        id="basicInput"
                        placeholder="Enter Email"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col
                    md="6"
                    xl="4"
                    class=""
                  >

                    <!-- basic -->
                    <b-form-group
                      label="Department"
                      label-for="Department"
                      
                      class="teamFilterDepartment"
                    >
                      <v-select
                        v-model="employeeFilterData.department"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="DesignationOptions"
                        :reduce="(val) => val.value"
                        :clearable="true"
                        input-id="status"
                          placeholder="Select Department"
                      />
                    </b-form-group>
                  </b-col>

                  
                </b-row>
                <b-row>
                  <b-col
                    md="6"
                    xl="4"
                  >

                  <b-button
                  @click="SearchFilter()"
                    variant="primary mt-1 w-100" >
                    Search
                  </b-button>

                  </b-col>
                         <b-col
                    md="6"
                    xl="4"
                  >
                  
                  <b-button
                  @click="ResetFilter"
                    variant="primary mt-1 w-100" >
                    Reset
                  </b-button>
                  </b-col>
                </b-row>

              </b-card>
            </b-collapse>
          </div>
     <!-- <div class="mar10 mb-1">
        <b-row>
          <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
            <label>Show</label>
            <v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions"
              :clearable="false" class="per-page-selector d-inline-block mx-50" />
            <label>entries</label>
          </b-col>
        </b-row>
      </div>       -->
        <b-table
    responsive
    :sticky-header="true"
    ref="refEmployeeListTable"
    :items="fetchEmployee"
    :fields="fields"
    class="mb-2 staticTable"
    empty-text="No matching records found"
    :sort-by.sync="sortBy"
    :sort-desc.sync="isSortDirDesc" 
  >
    <template #cell(Name)="data">
      <span class="text-nowrap">
        {{ data.item.employee_name }}
      </span>
    </template>

   <template #cell(Email)="data">
      <span class="text-nowrap">
        {{ data.item.email }}
      </span>
    </template>
     <template #cell(Department)="data">
      <span class="text-nowrap">
        {{ data.item.department }}
      </span>
    </template>
         <template #cell(Role)="data">
      <span class="text-nowrap">
        {{ data.item.role }}
      </span>
    </template>
      <template #cell(ReportingHead)="data">
      <span class="text-nowrap">
        {{ data.item.reporting_head }}
      </span>
    </template>
     
    <template #cell(Action)="data">
             <div class="icon_flx">
             <b-link @click="editEmployee(data.item.id)"
                 title="Edit"
                  >
                  <feather-icon
                    class="custom-class"
                    icon="EditIcon"
                    size="1.5x"
                  />
                </b-link>

                 <b-link
                   :to="{ name: 'view-student', params: { id: data.item.user_id } }" title="View">
                  <feather-icon
                    class="custom-class"
                    icon="EyeIcon"
                    size="1.5x"
                  />
                </b-link>
                <b-link @click="showDeleteConfirmation(); DeleteId=data.item.id" title="Delete" >
                  <feather-icon
                    class="custom-class"
                    icon="TrashIcon"
                    size="1.5x"
                  />
                </b-link>
              </div>
      </template>
  </b-table>
      <div class="mx-2 mb-2">
        
        <div class="text-center"><span v-if="totalEmployees==0">No Records Found</span></div>
        <b-row v-if="totalEmployees!=0">
          <b-col cols="12" md="4" class="d-flex align-items-center justify-content-center justify-content-md-start mb-1 mb-md-0">
            <label>Show</label>
            <v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions"
              :clearable="false" class="per-page-selector d-inline-block mx-50" />
            <label>entries</label>
          </b-col>
          <b-col
            cols="12"
            sm="4"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-center
            "
          >
             <span class="text-muted"
              >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
              {{ dataMeta.of }} entries</span
            >
          </b-col>
          <b-col
            cols="12"
            sm="4"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalEmployees"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>



        </b-card>
      </b-col>
</b-row>
<b-modal v-model="showModal" title="Delete Confirmation" @ok="deleteEmployee">
      Are you sure you want to delete this employee?
    </b-modal>
          <b-modal  
            :visible="showEmployeeImportModel"
            @hidden="resetImportModal"
            v-if="import_modal" id="import_modal"
            title="Import"
            ok-only ok-title="Import"
            @ok="handleImportForm"
          >
            <b-card-text>
            <b-form ref="contact-report-form" @submit.stop.prevent="ImportemployeeForm">
               <b-row>
                  <b-button class="btn btn-primary" target="_blank" href="/ExportEmployeeData">
                  <span class="text-nowrap">Download Format</span>
                  </b-button>
                  <b-col cols="12">
                  <b-form-group label="Import Employee Excel." label-for="Employee_file" label-cols-md="4">
                     <b-input-group class="input-group-merge">
                        <b-form-file ref="refEmployeeFileImport" v-model="Employee_file.file" id="Employee_file" name="Employee_file" />
                     </b-input-group>
                  </b-form-group>
                  <li class="text-danger" v-for="(error, index) in errors" :key="index">{{ error }}</li>
                  </b-col>
               </b-row>
            </b-form>
            </b-card-text>
         </b-modal>




<!-- SideBar Starts -->

   <employee-event-handler
        v-model="isEventHandlerSidebarActive"
        @close-sidebar="CloseSidebar"
        @refatch-data="refetchData"
        :employee-id="EmployeeEdit"
      />
    <!-- Sidebar Ends -->


    <!-- Modal Starts -->
    <!-- select 2 demo -->
    <b-modal
      id="modal-select2"
      title="Basic Modal"
      ok-title="submit"
      centered
      cancel-variant="outline-secondary"
    >
      <b-form>
        <b-form-group
          label="Enter Name"
          label-for="name"
        >
          <b-form-input
            id="name"
            placeholder="Enter name"
          />
        </b-form-group>
        <b-form-group
          label="Choose the country"
          label-for="vue-select"
        >
          <v-select
            id="vue-select"
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="option"
          />
        </b-form-group>
        <b-form-group
          label="Zip Code"
          label-for="zip-code"
        >
          <b-form-input
            id="zip-code"
            type="number"
            placeholder="Zip Code"
          />
        </b-form-group>
      </b-form>
    </b-modal>
    <!-- Modal Ends -->

  </div>
</template>

<script>
import {
  BTable, BButton, BFormGroup, BAvatar, BBadge,
  BRow, BCol, BCard, BCollapse, VBToggle, BFormInput, BSidebar, BModal, VBModal, BForm,BPagination,BLink,BCardText,BFormFile,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import { ref,watch, computed } from "@vue/composition-api";
import EmployeeEventHandler from './EmployeeSidebar.vue'
import axios from "@axios";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BTable,
    BButton,
    BFormGroup,
    BAvatar,
    BBadge,
    vSelect,
    BRow, BCol, BCard, BCollapse, BFormInput, BModal, VBModal, BForm,
    BSidebar,
    EmployeeEventHandler,
    BPagination,
    BLink,BCardText,BFormFile,
  },
  directives: {
    'b-toggle': VBToggle,
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      showModal: false,
      DeleteId:0,
      Employee_file: {
            file: null
      },
      import_modal: 1,
      selected: 'USA',
      option: ['USA', 'Canada', 'Maxico'],
      fields: [
        {key: 'Name', sortable: true, stickyColumn: true },
        {key: 'Email', sortable: true},
        {key: 'Department', sortable: true},
        {key: 'Role', sortable: true},
        {key: 'ReportingHead', sortable: true},
        'Action'
      ],
      EmployeesData:[],
      DesignationOptions :[],
      
    }
  },
  mounted(){
     axios.get('getDepartment').then(response => {
    this.DesignationOptions = response.data.data
    })
    this.refetchData();
  },
  methods:{
    showDeleteConfirmation() {
      this.showModal = true;
    },
    ImportemployeeForm(event) {

        const formData = new FormData()
        formData.append('file', this.Employee_file.file)
        // Append the rest of your form data


        axios.post("/employee/import", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(response => {
          this.refetchData()
            // console.log(response);
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Employee Data Imported Successfully.',
                icon: 'BellIcon',
                variant: "success",
              },
            })
            this.$refs.refEmployeeFileImport.reset();
            this.showEmployeeImportModel=false;

          }).catch(error => {
            if(error.response.status == 422){
            const blob = new Blob([error.response.data.errors.toString()], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'EmployeeValidationErrorLog.txt';
            document.body.appendChild(link);
            
            link.click();
               
            this.errors = ['Validation Error! please check the downloaded log file.'];
            this.$toast({
               component: ToastificationContent,
               props: {
               //title: 'Download Fail',
               title:'Validation Error!',
               icon: 'BellIcon',
               variant: "danger",
               },
            })
            }
            else{
                this.errors = ['Something went wrong! please contact to administrator.'];
            }
            this.$refs.refEmployeeFileImport.reset();
          })

    },
    handleImportForm(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.ImportemployeeForm()
       
    },
    resetImportModal(){
         this.showEmployeeImportModel=false;

    },
    deleteEmployee(){
      axios.delete(`employee/${this.DeleteId}`).then((response) => {
        this.refetchData()

        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: 'Employee Deleted Successfully',
            icon: 'TrashIcon',
            variant: 'danger',
          },
        })
      });
      
    },  
  },
  setup(){
    const toast = useToast();
    const [sortBy, isSortDirDesc] = [ ref(null), ref(false)]
      const fetchEmployee = (ctx, callback) => {
    axios.get('employees', {
      params: {  
        name:employeeFilterData.value.name,
        email:employeeFilterData.value.email,
        department:employeeFilterData.value.department,
        page:currentPage.value,
        perPage:perPage.value,
        sortBy : sortBy.value,
        sortDesc : isSortDirDesc.value,
    }}
    ).then(response => {
       const  employee = response.data.data
       // console.log("fetchUser response",task, total,response.data)

        callback(employee)
        totalEmployees.value = (employee[0] != null )? employee[0].total_row_count : 0;
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Employee list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  const ExportEmployeeData=()=>{
      axios.get('ExportEmployeeData')
        .then(response => {
               let blob = new Blob([response.data], {
                  'Content-Type': 'multipart/form-data',
               });
              let link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = 'EntitiesData.csv'
              link.click()

          })
    }
      const isEventHandlerSidebarActive = ref(false);
      const EmployeeEdit = ref(0);
      const refEmployeeListTable = ref(null);
      const perPageOptions = [5, 10, 15]
     
      const SearchFilter=()=>{
        refetchData();
      }
      const refetchData = () => {
        refEmployeeListTable.value.refresh();
      }
      const CloseSidebar=()=>{
        isEventHandlerSidebarActive.value=false;
        }
      const editEmployee=(id)=>{
       isEventHandlerSidebarActive.value=true;
       EmployeeEdit.value=id;
      }
      const currentPage = ref(1);
      const perPage = ref(10);
      const totalUsers = ref(0)
      const totalEmployees = ref(0)
       

       const FilterData = {
        name:  "",
        email:  null,
        department: null,
       }
    
       const employeeFilterData =ref(JSON.parse(JSON.stringify({FilterData}))) ;
      const ResetFilter=()=> {
        employeeFilterData.value= JSON.parse(JSON.stringify(FilterData)) ;

        refetchData();
      }
      const errors = ref([]);

      const hasErrors = (fieldName) => {
        return fieldName in errors.value;
      };
      const getErrors = (fieldName) => {
        return errors.value[fieldName][0];
      };
      const RemoveError = (errorName) => {
        errors.value[errorName] = " ";
      };  
     
      const dataMeta = computed(() => {
    const localItemsCount = refEmployeeListTable.value ? refEmployeeListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalEmployees.value,
    }
  })
   watch([currentPage, perPage], () => {
    refetchData()
  })
  const showEmployeeImportModel = ref(false);


      return{
           isEventHandlerSidebarActive,
           CloseSidebar,
           editEmployee,
           EmployeeEdit,
           refEmployeeListTable,
           refetchData,
           SearchFilter,
           fetchEmployee,
           currentPage,
           perPage,
           totalUsers,
           employeeFilterData,
           FilterData,
           ResetFilter,
           dataMeta,
           perPageOptions,
           totalEmployees,
           showEmployeeImportModel,
           errors,hasErrors,getErrors,RemoveError,ExportEmployeeData,
           sortBy,
           isSortDirDesc
      }

  }
}
</script>

<style lang="scss">
.b-table-selectable{
  .feather{
    font-size: 1.3rem;
  }
}

</style>
 