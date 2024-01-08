    <template>
        <b-card class="right-aligned-card">
            <!-- <b-card-body> -->
            <b-row>
                <b-col md="6">
                <b-form-group class="myform" label-for="branch">
                    <label class="form-label required">Class</label>
                    <v-select
                        class="selctboxdisable"
                        v-model="lectureSchedule.class"
                        @input="RemoveError('class')"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        :options="ClassOptionData"
                        :reduce="(val) => val.value"
                        input-id="status"
                        placeholder="Select Class"
                    />
                </b-form-group>
                </b-col>
            </b-row>                
            <!-- </b-card-body> -->
            <b-tabs v-model="activeTab" @input="saveActiveTab">
                <b-tab>
                    <template #title>
                        <feather-icon icon="HomeIcon" /> <span>Scheduler Setting</span> </template>
                    <div>
                        <b-button @click="addLectureRow" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary"  style="margin-left: 800px;" class="mb-0 mr-1 basicButton">Add Row</b-button>
                        <br><br>
                        <b-table striped hover :items="lectureSchedule.LectureItems" :fields="tableFields">
                             <template #cell(lectureNo)="data">
                              <span>{{data.index+1}}</span>
                            </template>
                            <template #cell(startTime)="data">
                                <b-form-timepicker v-model="data.item.startTime"
                              class="form-control" @input="RemoveError('conduct_time')" />
                            </template>
                            <template #cell(endTime)="data">
                                <b-form-timepicker v-model="data.item.endTime"
                              class="form-control" @input="RemoveError('conduct_time')" />
                            </template>
                            <template #cell(Action)="data">
                                <b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" class="mt-0 mt-md-2"
                                    @click="removeItem(data.index)">
                                    <feather-icon icon="XIcon" class="mr-25" />
                                    <span>Delete</span>
                                </b-button>
                            </template>    
                        </b-table>
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
                   </div>
                </b-tab>

                <b-tab> <template #title>
                        <feather-icon icon="TargetIcon" /> <span>Period / Lectures</span> </template>
                </b-tab>
            </b-tabs>
        </b-card>
    </template>

<script>
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import {
    BRow,
    BCol,
    BButton,
    BAlert,
    BLink,
    BTabs,
    BTab,
    BCardText,
    BCard,
    BTable,
    BProgressBar,
    BProgress,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    BAvatar,
    VBTooltip,
    VBPopover,
    BPopover,
    BPagination,
    BSpinner,
    BOverlay,BFormTimepicker,

} from 'bootstrap-vue'
import axios from "@axios";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import { computed, watch } from "@vue/composition-api";
import moment from "moment";
import { useRouter } from "@core/utils/utils";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
export default {
    components: {
        BRow,
        BCol,
        BAlert,
        BLink,
        BCardText,
        BTabs,
        BTab,
        BCard,
        BTable,
        BProgressBar,
        BProgress,
        BButton,BFormTimepicker,vSelect,
    },

    directives: {
      Ripple,
      'b-popover': VBPopover,
      'b-tooltip': VBTooltip,
   },

    data() {
        return {
            fields: ["project", "totaltask", "progress", "hour"],
            value: null,
            max: null,
            profildata: [],
            Editable: false,
            activeTab: 0,
            tableFields: ['lectureNo', 'startTime', 'endTime','Action'],
            ClassOptionData:[],
        };
    },
    methods: {
        saveActiveTab() {
            localStorage.setItem('activeTab', this.activeTab);
        },
        addLectureRow() {
            const newLecture = {
                startTime: '',
                endTime: ''
            };
            this.lectureSchedule.LectureItems.push(newLecture);
        },
        removeItem(index){
            this.lectureSchedule.LectureItems.splice(index, 1)
        },
        formSubmitted(){
            axios.post('updateClassLacture',this.lectureSchedule).then((response) => {
                this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                        title: "Lectures Updated Successfully",
                        icon: "CheckIcon",
                        variant: "success",
                    },
                });
            });
        }

    }, 
    mounted(){
        axios.get("getClassSection").then((response) => {
            this.ClassOptionData = response.data.data;
            this.lectureSchedule.class = this.$route.params.id;
        });
        axios.get(`getLectureData/${this.$route.params.id}`).then((response) => {
            this.lectureSchedule.LectureItems = response.data.data.lecture_data;
        });

    },
    setup(props, { emit }) {
        const { route, router } = useRouter();
        const toast = useToast();
        const blanklectureSchedule = {
        class: null,
        LectureItems:[ { startTime: '10:00', endTime: '10:45' }],
        };
        const lectureSchedule = ref(JSON.parse(JSON.stringify(blanklectureSchedule)));
        return {
            blanklectureSchedule,
            lectureSchedule,
        }

    }

} 
    </script>