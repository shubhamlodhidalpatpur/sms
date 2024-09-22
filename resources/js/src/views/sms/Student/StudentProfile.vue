<template>
  <div>
    <div class="user__profile">
      <b-row>
        <b-col md="3">
          <div class="profile__pic">
            <div class="upload__pic">
              <b-link>
                <b-avatar
                  ref="previewEl"
                  rounded-full
                  :src="userData.profileImage"
                  :text="avatarText(userData.name)"
                  :key="'profile_key_'"
                  height="120"
                  :variant="`light-primary`"
                  size="120px"
                />
              </b-link>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                size="md"
                class="my-50 mx-auto d-block"
                @click="$refs.refInputEl.$el.click()"
                v-if="Editable"
              >
                Upload
              </b-button>
              <b-card-text class="notetxt font-small" v-if="Editable"
                >(Allowed JPG,JPEG or PNG. )</b-card-text
              >
              <span v-if="profile_error != ''"
                ><small class="text-danger">{{ profile_error }}</small></span
              >
              <b-form-file
                v-model="userData.profileImage"
                ref="refInputEl"
                accept="image/*"
                :hidden="true"
                plain
                @change="onFileChange"
              />
            </div>
            <h4>{{ userData.first_name + " " + userData.last_name }}</h4>
            <h3 class="bloodText donorSpecifier">
              <span>You're {{ userData.role_name }}</span>
            </h3>
            <ul>
              <div>
                <li>
                  <span v-if="userData.role == 'student'">
                    Student Id : {{ userData.roll_number }}</span
                  >
                  <span v-if="userData.role == 'teacher'">
                    Teacher Id : {{ userData.employee_id }}</span
                  >
                </li>
                <li>
                  <span
                    ><img src="../../../assets/images/profile/Cake.png" /></span
                  ><span>{{
                    userData.dob != null ? formatDate(userData.dob) : "-"
                  }}</span>
                </li>
                <li>
                  <span
                    ><img src="../../../assets/images/profile/Call.png"
                  /></span>
                  <span v-if="userData.role == 'student'">{{
                    userData.prsnol_number
                  }}</span>
                  <span v-else>{{ userData.mobile_no }}</span>
                </li>
              </div>
            </ul>
          </div>
        </b-col>
        <b-col md="9">
          <div>
            <b-tabs v-model="activeTab" ref="tabs">
              <b-tab title="Basic">
                <div class="profiletab__txt">
                  <div
                    class="d-flex justify-content-between align-items-center px-2 py-1 pb-0"
                  >
                    <h4>Basic Information</h4>
                    <b-button v-if="Editable == true" @click="Editable = false"
                      >View</b-button
                    >
                    <b-button v-if="Editable == false" @click="Editable = true"
                      >Edit</b-button
                    >
                  </div>

                  <div class="basic__frm">
                    <b-form class="px-2">
                      <hr class="mt-0 mb-2" />

                      <b-row>
                        <b-col md="4">
                          <label class="form-label required">{{
                            "First Name"
                          }}</label>
                          <b-form-group label-for="first_name">
                            <validation-provider
                              #default="{ errors }"
                              name="First Name"
                            >
                              <b-form-input
                                v-model="userData.first_name"
                                name="first_name"
                                :plaintext="!Editable"
                                :placeholder="'First Name'"
                                @input="NameValidation = false"
                              />
                              <small class="text-danger"
                                >{{ errors[0] }}
                                <p v-if="NameValidation" class="text-danger">
                                  Please enter First name
                                </p></small
                              >
                              <small class="text-danger"
                                >{{ errors[0] }}
                                <p
                                  v-if="NameFormatValidation"
                                  class="text-danger"
                                >
                                  Please enter proper First name format
                                </p></small
                              >
                              <div
                                class="text-danger"
                                v-if="hasErrors('first_name')"
                              >
                                {{ getErrors("first_name") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group
                            label="middle_name"
                            label-for="middle_name"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="middle_name"
                            >
                              <b-form-input
                                v-model="userData.middle_name"
                                name="middle_name"
                                placeholder="middle_name"
                                @input="RemoveError('middle_name')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('middle_name')"
                              >
                                {{ getErrors("middle_name") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group label="last_name" label-for="last_name">
                            <validation-provider
                              #default="{ errors }"
                              name="last_name"
                            >
                              <b-form-input
                                v-model="userData.last_name"
                                name="last_name"
                                placeholder="last_name"
                                @input="RemoveError('last_name')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('last_name')"
                              >
                                {{ getErrors("last_name") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col md="4">
                          <label class="form-label">Gender</label>
                          <b-form-group label-for="gender">
                            <validation-provider
                              #default="{ errors }"
                              name="gender"
                            >
                              <v-select
                                @input="RemoveError('salutation')"
                                input-id="salutation"
                                v-model="userData.gender"
                                :options="GenderOptions"
                                :reduce="(val) => val.value"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                placeholder="Select Gender"
                                :disabled="!Editable"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('gender')"
                              >
                                {{ getErrors("gender") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <label class="form-label">Date of Birth</label>
                          <b-form-group label-for="dob">
                            <validation-provider
                              #default="{ errors }"
                              name="Date of Birth"
                            >
                              <b-form-input
                                type="date"
                                @input="RemoveError('dob')"
                                v-model="userData.dob"
                                :plaintext="!Editable"
                                class="form-control"
                                placeholder="Select Date"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div class="text-danger" v-if="hasErrors('dob')">
                                {{ getErrors("dob") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="4">
                          <b-form-group
                            label="father name"
                            label-for="father_name"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="father_name"
                            >
                              <b-form-input
                                v-model="userData.father_name"
                                name="father_name"
                                placeholder="father name"
                                @input="RemoveError('father_name')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('father_name')"
                              >
                                {{ getErrors("father_name") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="4">
                          <b-form-group
                            label="Mother Name"
                            label-for="mother_name"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="mother_name"
                            >
                              <b-form-input
                                v-model="userData.mother_name"
                                name="mother_name"
                                placeholder="mother name"
                                @input="RemoveError('mother_name')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('mother_name')"
                              >
                                {{ getErrors("mother_name") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="4">
                          <b-form-group
                            label="Aadhar number"
                            label-for="aadhar_number"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="aadhar_number"
                            >
                              <b-form-input
                                v-model="userData.aadhar_number"
                                name="aadhar_number"
                                placeholder="parent number"
                                @input="RemoveError('aadhar_number')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('aadhar_number')"
                              >
                                {{ getErrors("aadhar_number") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="4">
                          <b-form-group label="Samgra Id" label-for="samgra_id">
                            <validation-provider
                              #default="{ errors }"
                              name="samgra_id"
                            >
                              <b-form-input
                                v-model="userData.samgra_id"
                                name="samgra_id"
                                placeholder="Samgra Id number"
                                @input="RemoveError('samgra_id')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('samgra_id')"
                              >
                                {{ getErrors("samgra_id") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <div class="text-center mb-2 pb-2">
                        <b-button
                          class="btn btn_bluetype btn-secondary mr-1"
                          @click="resetData()"
                          v-if="Editable"
                          >Reset</b-button
                        >
                        <!-- <b-button class="btn btn_redtype btn-secondary">Save</b-button> -->
                        <b-button
                          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                          variant="primary"
                          class="mt-2 mb-2 mr-1"
                          @click="goToNextTab('Contact')"
                          v-if="Editable"
                        >
                          Next
                        </b-button>
                      </div>
                    </b-form>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Contact">
                <div class="profiletab__txt">
                  <div class="basic__frm">
                    <b-form class="px-2">
                      <hr class="mt-0 mb-2" />

                      <b-row>
                        <b-col md="4" v-if="userData.role == 'student'">
                          <b-form-group
                            label="persnol mobile number"
                            label-for="prsnol_number"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="prsnol_number"
                            >
                              <b-form-input
                                v-model="userData.prsnol_number"
                                name="prsnol_number"
                                placeholder="persnol number"
                                @input="RemoveError('prsnol_number')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('prsnol_number')"
                              >
                                {{ getErrors("prsnol_number") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4" v-if="userData.role == 'student'">
                          <b-form-group
                            label="parent mobile number"
                            label-for="parent_number"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="parent_number"
                            >
                              <b-form-input
                                v-model="userData.parent_number"
                                name="parent_number"
                                placeholder="parent number"
                                @input="RemoveError('parent_number')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('parent_number')"
                              >
                                {{ getErrors("parent_number") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="4" v-if="userData.role == 'teacher'">
                          <b-form-group
                            label="mobile number"
                            label-for="mobile_number"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="mobile_number"
                            >
                              <b-form-input
                                v-model="userData.mobile_no"
                                name="mobile_no"
                                placeholder="Mobile number"
                                @input="RemoveError('mobile_no')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('mobile_no')"
                              >
                                {{ getErrors("mobile_no") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4" v-if="userData.role == 'teacher'">
                          <b-form-group
                            label="Altranate mobile number"
                            label-for="altranate_number"
                          >
                            <validation-provider
                              #default="{ errors }"
                              name="altranate_number"
                            >
                              <b-form-input
                                v-model="userData.altranate_number"
                                name="altranate_number"
                                placeholder="Altranate number"
                                @input="RemoveError('altranate_number')"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('altranate_number')"
                              >
                                {{ getErrors("altranate_number") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>

                        <b-col md="8">
                          <label class="form-label required">Address</label>
                          <validation-provider
                            #default="{ errors }"
                            rules="required"
                            name="address"
                          >
                            <b-form-textarea
                              id="title"
                              v-model="userData.address"
                              :state="errors.length > 0 ? false : null"
                              placeholder="Enter address"
                              autocomplete="off"
                              @input="RemoveError('address')"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                            <div
                              class="text-danger"
                              v-if="hasErrors('address')"
                            >
                              {{ getErrors("address") }}
                            </div>
                          </validation-provider>
                        </b-col>
                      </b-row>
                      <div class="text-center mb-2 py-2">
                        <b-button
                          class="btn btn_bluetype btn-secondary mr-1"
                          @click="resetData()"
                          v-if="Editable"
                          >Reset</b-button
                        >
                        <span>
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="mt-2 mb-2 mr-1"
                            @click="goToNextTab('Acedmic')"
                            v-if="Editable"
                          >
                            Next
                          </b-button>
                        </span>
                      </div>
                    </b-form>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="userData.role == 'student' || userData.role == 'teacher' " title="Acedmic">
                <div class="profiletab__txt">
                  <div class="basic__frm">
                    <b-form class="px-2">
                      <hr class="mt-0 mb-2" />
                      <b-row v-if="userData.role == 'student'">
                        <b-col md="4">
                          <label class="form-label">Class</label>
                          <b-form-group label-for="class">
                            <validation-provider
                              #default="{ errors }"
                              name="class"
                            >
                              <v-select
                                @input="RemoveError('salutation')"
                                input-id="salutation"
                                v-model="userData.class"
                                :options="classOptions"
                                :reduce="(val) => val.value"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                placeholder="Select class"
                                :disabled="!Editable"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('subject')"
                              >
                                {{ getErrors("subject") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <label class="form-label">Section</label>
                          <b-form-group label-for="Section">
                            <validation-provider
                              #default="{ errors }"
                              name="Section"
                            >
                              <v-select
                                @input="RemoveError('section')"
                                input-id="section"
                                v-model="userData.section"
                                :options="SectionOptions"
                                :reduce="(val) => val.value"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                placeholder="Select section"
                                :disabled="!Editable"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('section')"
                              >
                                {{ getErrors("section") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <label class="form-label">Subject</label>
                          <b-form-group label-for="subject">
                            <validation-provider
                              #default="{ errors }"
                              name="subject"
                            >
                              <v-select
                                @input="RemoveError('salutation')"
                                input-id="salutation"
                                v-model="userData.subject"
                                :options="subjectOptions"
                                :reduce="(val) => val.value"
                                :dir="
                                  $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                placeholder="Select subject"
                                :disabled="!Editable"
                              />
                              <small class="text-danger">{{ errors[0] }}</small>
                              <div
                                class="text-danger"
                                v-if="hasErrors('subject')"
                              >
                                {{ getErrors("subject") }}
                              </div>
                            </validation-provider>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row
                        v-if="userData.role == 'teacher'"
                        class="align-items-center mb-1"
                      >
                        <b-col cols="12" md="4">
                          <strong class="form-label text-primary"
                            >Class Teacher:</strong
                          >
                        </b-col>
                        <b-col cols="12" md="8">
                          <strong class="text-dark">{{
                            ClassTeacher.class_name
                          }}</strong>
                        </b-col>
                      </b-row>

                      <hr class="mt-0 mb-1" />

                      <b-row
                        v-if="userData.role == 'teacher'"
                        class="subjects-section"
                      >
                        <b-col cols="12">
                          <h5 class="text-secondary mb-1">Subjects:</h5>
                          <b-table
                            responsive
                            striped
                            bordered
                            hover
                            :items="SubjctClassData"
                            :fields="['class', 'subject']"
                            small
                            class="shadow-sm"
                          >
                            <template #cell(class)="data">
                              <span class="font-weight-bold text-info">{{
                                data.item.class_name
                              }}</span>
                            </template>
                            <template #cell(subject)="data">
                              <span class="font-weight-bold text-success">{{
                                data.item.subject_name
                              }}</span>
                            </template>
                          </b-table>
                        </b-col>
                      </b-row>

                      <div class="text-center mb-2 py-2">
                        <b-button
                          class="btn btn_bluetype btn-secondary mr-1"
                          @click="resetData()"
                          v-if="Editable"
                          >Reset</b-button
                        >
                        <span>
                          <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            variant="primary"
                            class="mt-2 mb-2 mr-1"
                            @click="goToNextTab('Document')"
                            v-if="Editable"
                          >
                            Next
                          </b-button>
                        </span>
                        <span>
                          <b-button
                            class="btn btn_redtype btn-secondary"
                            @click="changeProfile"
                            v-if="Editable"
                            >Save</b-button
                          ></span
                        >
                      </div>
                    </b-form>
                  </div>
                </div>
              </b-tab>
              <b-tab v-if="userData.role == 'student' || userData.role == 'teacher' " title="Document">
                <div class="profiletab__txt">
                  <div class="basic__frm">
                    <b-form class="px-2">
                      <hr class="mt-0 mb-2" />
                      <b-row>
                        <b-col md="6">
                          <label class="form-label" for="Donor"
                            >Samgra Id
                          </label>
                          <div class="p-1 bord__line text-center mb-2">
                            <div
                              v-if="
                                (userData.samgra_id_doc != null &&
                                  userData.samgra_id_doc != '') ||
                                !Editable
                              "
                            >
                              <div class="upload__docpreview erasebox">
                                <div
                                  class="d-flex justify-content-start align-items-center"
                                >
                                  <img
                                    :src="
                                      getIconPath(
                                        userData.samgra_id_doc_fileName
                                      )
                                    "
                                    class="fileiconUpload"
                                  />
                                  <p class="ml-1">
                                    <span
                                      v-if="
                                        userData.samgra_id_doc != null &&
                                        userData.samgra_id_doc != ''
                                      "
                                    >
                                      <a
                                        :href="userData.samgra_id_doc"
                                        class="filenameUpload"
                                        target="_blank"
                                        >{{
                                          userData.samgra_id_doc_fileName
                                        }}</a
                                      >
                                      <span class="uploadtime">{{
                                        formatDateTime(
                                          userData.samgra_id_doc_uploadTime
                                        )
                                      }}</span>
                                    </span>
                                    <span v-else>No file found</span>
                                  </p>
                                </div>

                                <div v-if="Editable">
                                  <validation-provider
                                    #default="{ errors }"
                                    title="Below Poverty Line"
                                  >
                                    <img
                                      src="@/assets/images/landingbase/ICN_Delete.svg"
                                      @click="docToBeDeleted = 'samgra_id_doc'"
                                      class="deleteIconUpload"
                                    />
                                    <small class="text-danger">{{
                                      errors[0]
                                    }}</small>
                                    <div
                                      class="text-danger"
                                      v-if="hasErrors('samgra_id_doc')"
                                    >
                                      {{ getErrors("samgra_id_doc") }}
                                    </div>
                                  </validation-provider>
                                </div>
                              </div>
                            </div>

                            <div v-else>
                              <b-button
                                class="btnOutlineRed mb-0"
                                @click="$refs.refSamgraUpload.$el.click()"
                              >
                                <img
                                  class=""
                                  src="@/assets/images/landingbase/ICN_Upload.svg"
                                  alt="Full Logo"
                                />
                                Upload</b-button
                              >
                            </div>
                            <b-form-file
                              hidden
                              ref="refSamgraUpload"
                              plain
                              @change="onUploadDocs($event, 'samgra_id_doc')"
                            />
                          </div>
                        </b-col>

                        <b-col md="6">
                          <label class="form-label" for="Donor"
                            >Aadhar Card
                          </label>
                          <div class="p-1 bord__line text-center mb-2">
                            <div
                              v-if="
                                (userData.aadhar_doc != null &&
                                  userData.aadhar_doc != '') ||
                                !Editable
                              "
                            >
                              <div class="upload__docpreview erasebox">
                                <div
                                  class="d-flex justify-content-start align-items-center"
                                >
                                  <img
                                    :src="
                                      getIconPath(userData.aadhar_doc_fileName)
                                    "
                                    class="fileiconUpload"
                                  />
                                  <p class="ml-1">
                                    <span
                                      v-if="
                                        userData.aadhar_doc != null &&
                                        userData.aadhar_doc != ''
                                      "
                                    >
                                      <a
                                        :href="userData.aadhar_doc"
                                        class="filenameUpload"
                                        target="_blank"
                                        >{{ userData.aadhar_doc_fileName }}</a
                                      >
                                      <span class="uploadtime">{{
                                        formatDateTime(
                                          userData.aadhar_doc_uploadTime
                                        )
                                      }}</span>
                                    </span>
                                    <span v-else>No file found</span>
                                  </p>
                                </div>

                                <div v-if="Editable">
                                  <validation-provider
                                    #default="{ errors }"
                                    title="Below Poverty Line"
                                  >
                                    <img
                                      src="@/assets/images/landingbase/ICN_Delete.svg"
                                      @click="docToBeDeleted = 'aadhar_doc'"
                                      class="deleteIconUpload"
                                    />
                                    <small class="text-danger">{{
                                      errors[0]
                                    }}</small>
                                    <div
                                      class="text-danger"
                                      v-if="hasErrors('aadhar_doc')"
                                    >
                                      {{ getErrors("aadhar_doc") }}
                                    </div>
                                  </validation-provider>
                                </div>
                              </div>
                            </div>

                            <div v-else>
                              <b-button
                                class="btnOutlineRed mb-0"
                                @click="$refs.refAadharUpload.$el.click()"
                              >
                                <img
                                  class=""
                                  src="@/assets/images/landingbase/ICN_Upload.svg"
                                  alt="Full Logo"
                                />
                                Upload</b-button
                              >
                            </div>
                            <b-form-file
                              hidden
                              ref="refAadharUpload"
                              plain
                              @change="onUploadDocs($event, 'aadhar_doc')"
                            />
                          </div>
                        </b-col>

                        <b-col md="6" v-if="userData.role == 'student'">
                          <label class="form-label" for="Donor"
                            >Transfer Certificate
                          </label>
                          <div class="p-1 bord__line text-center mb-2">
                            <div
                              v-if="
                                (userData.tc_doc != null &&
                                  userData.tc_doc != '') ||
                                !Editable
                              "
                            >
                              <div class="upload__docpreview erasebox">
                                <div
                                  class="d-flex justify-content-start align-items-center"
                                >
                                  <img
                                    :src="getIconPath(userData.tc_doc_fileName)"
                                    class="fileiconUpload"
                                  />
                                  <p class="ml-1">
                                    <span
                                      v-if="
                                        userData.tc_doc != null &&
                                        userData.tc_doc != ''
                                      "
                                    >
                                      <a
                                        :href="userData.tc_doc"
                                        class="filenameUpload"
                                        target="_blank"
                                        >{{ userData.tc_doc_fileName }}</a
                                      >
                                      <span class="uploadtime">{{
                                        formatDateTime(
                                          userData.tc_doc_uploadTime
                                        )
                                      }}</span>
                                    </span>
                                    <span v-else>No file found</span>
                                  </p>
                                </div>

                                <div v-if="Editable">
                                  <validation-provider
                                    #default="{ errors }"
                                    title="Below Poverty Line"
                                  >
                                    <img
                                      src="@/assets/images/landingbase/ICN_Delete.svg"
                                      @click="docToBeDeleted = 'tc_doc'"
                                      class="deleteIconUpload"
                                    />
                                    <small class="text-danger">{{
                                      errors[0]
                                    }}</small>
                                    <div
                                      class="text-danger"
                                      v-if="hasErrors('tc_doc')"
                                    >
                                      {{ getErrors("tc_doc") }}
                                    </div>
                                  </validation-provider>
                                </div>
                              </div>
                            </div>

                            <div v-else>
                              <b-button
                                class="btnOutlineRed mb-0"
                                @click="$refs.refTCUpload.$el.click()"
                              >
                                <img
                                  class=""
                                  src="@/assets/images/landingbase/ICN_Upload.svg"
                                  alt="Full Logo"
                                />
                                Upload</b-button
                              >
                            </div>
                            <b-form-file
                              hidden
                              ref="refTCUpload"
                              plain
                              @change="onUploadDocs($event, 'tc_doc')"
                            />
                          </div>
                        </b-col>

                        <b-col md="6" v-if="userData.role == 'student'">
                          <label class="form-label" for="Donor"
                            >Migration
                          </label>
                          <div class="p-1 bord__line text-center mb-2">
                            <div
                              v-if="
                                (userData.migration_doc != null &&
                                  userData.migration_doc != '') ||
                                !Editable
                              "
                            >
                              <div class="upload__docpreview erasebox">
                                <div
                                  class="d-flex justify-content-start align-items-center"
                                >
                                  <img
                                    :src="
                                      getIconPath(
                                        userData.migration_doc_fileName
                                      )
                                    "
                                    class="fileiconUpload"
                                  />
                                  <p class="ml-1">
                                    <span
                                      v-if="
                                        userData.migration_doc != null &&
                                        userData.migration_doc != ''
                                      "
                                    >
                                      <a
                                        :href="userData.migration_doc"
                                        class="filenameUpload"
                                        target="_blank"
                                        >{{
                                          userData.migration_doc_fileName
                                        }}</a
                                      >
                                      <span class="uploadtime">{{
                                        formatDateTime(
                                          userData.migration_doc_uploadTime
                                        )
                                      }}</span>
                                    </span>
                                    <span v-else>No file found</span>
                                  </p>
                                </div>

                                <div v-if="Editable">
                                  <validation-provider
                                    #default="{ errors }"
                                    title="Below Poverty Line"
                                  >
                                    <img
                                      src="@/assets/images/landingbase/ICN_Delete.svg"
                                      @click="docToBeDeleted = 'migration_doc'"
                                      class="deleteIconUpload"
                                    />
                                    <small class="text-danger">{{
                                      errors[0]
                                    }}</small>
                                    <div
                                      class="text-danger"
                                      v-if="hasErrors('migration_doc')"
                                    >
                                      {{ getErrors("migration_doc") }}
                                    </div>
                                  </validation-provider>
                                </div>
                              </div>
                            </div>

                            <div v-else>
                              <b-button
                                class="btnOutlineRed mb-0"
                                @click="$refs.refmigrationUpload.$el.click()"
                              >
                                <img
                                  class=""
                                  src="@/assets/images/landingbase/ICN_Upload.svg"
                                  alt="Full Logo"
                                />
                                Upload</b-button
                              >
                            </div>
                            <b-form-file
                              hidden
                              ref="refmigrationUpload"
                              plain
                              @change="onUploadDocs($event, 'migration_doc')"
                            />
                          </div>
                        </b-col>
                        <div
                          v-if="docToBeDeleted != null"
                          class="confirmation-dialog"
                        >
                          <p>Are you sure you want to delete?</p>
                          <b-button @click="docToBeDeleted = null">No</b-button>
                          <b-button
                            variant="primary"
                            @click="
                              userData[docToBeDeleted] = null;
                              docToBeDeleted = null;
                              documentComponentKey++;
                            "
                            >Yes</b-button
                          >
                        </div>
                      </b-row>
                      <div class="text-center mb-2 py-2">
                        <b-button
                          class="btn btn_bluetype btn-secondary mr-1"
                          @click="resetData()"
                          v-if="Editable"
                          >Reset</b-button
                        >
                        <span>
                          <b-button
                            class="btn btn_redtype btn-secondary"
                            @click="changeProfile"
                            v-if="Editable"
                            >Save</b-button
                          ></span
                        >
                      </div>
                    </b-form>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BFormFile,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BRow,
  BCol,
  BFormDatepicker,
  BCard,
  BCardText,
  BAvatar,
  BMedia,
  BMediaAside,
  BMediaBody,
  BLink,
  BFormTextarea,
  BAlert,
  BTabs,
  BTab,
  BFormRadioGroup,
  BTable,
} from "bootstrap-vue";
import { required } from "@validations";
import Ripple from "vue-ripple-directive";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
import { ref } from "@vue/composition-api";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { useToast } from "vue-toastification/composition";
import { useRouter } from "@core/utils/utils";
import { avatarText } from "@core/utils/filter";
import axios from "@axios";
import store from "@/store";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import { codeBasic } from "../../forms/form-repeater/code";
export default {
  components: {
    flatPickr,
    BButton,
    BForm,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BFormDatepicker,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
    BAvatar,
    BFormTextarea,
    BAlert,
    ValidationProvider,
    ValidationObserver,
    vSelect,
    BTabs,
    BTab,
    BFormRadioGroup,
    BTable,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      activeTab: 0,
      imageData: null,
      indexNo: 0,
      PinValidation: false,
      PANValidation: false,
      GSTValidation: false,
      IFSCValidation: false,
      NameValidation: false,
      NameFormatValidation: false,
      EmailValidation: false,
      AgeValidation: false,
      isValid: false,
      nextTodoId: 1,
      codeBasic,
      required,
      countryName: [],
      country_id: "",
      count: 0,
      avatarText,
      Editable: true,
      GenderOptions: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
      ],
      ReletionOptions: [
        { label: "Self", value: "self" },
        { label: "Other", value: "other" },
      ],
      getBloodOption: [],
      loggedInUserData: JSON.parse(localStorage.getItem("userData")),

      StateOptions: [],
      CityOptions: [],
      DistrictOptions: [],
      documentComponentKey: 0,
      selectedOptions: null,
      getComponent: [],
      GetEmployeeProfileData: [],
      docToBeDeleted: null,
      subjectOptions: [],
      classOptions: [],
      SectionOptions: [],
      SubjctClassData: [],
      ClassTeacher: null,
    };
  },
  methods: {
    getFileExtension(fileName) {
      if (fileName != null) {
        return fileName.split(".").pop();
      } else {
        return null;
      }
    },
    getIconPath(fileName) {
      const ext = this.getFileExtension(fileName);
      if (ext === "png") {
        return require("@/assets/images/landingbase/ICN_File.svg");
      } else if (ext === "jpeg" || ext === "jpg") {
        return require("@/assets/images/landingbase/ICN_FileJpeg.svg");
      } else {
        return require("@/assets/images/landingbase/ICN_FilePdf.svg");
      }
    },
    formatDateTime(dateTimeString) {
      const formatRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
      if (formatRegex.test(dateTimeString)) {
        const [datePart, timePart] = dateTimeString.split(" ");
        const [day, month, year] = datePart.split("-").map(Number);
        let [hours, minutes] = timePart.split(":").map(Number);
        const period = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12; // Convert to 12-hour format, ensuring '0' becomes '12'
        const formattedDate = `${day.toString().padStart(2, "0")}/${month
          .toString()
          .padStart(2, "0")}/${year} ${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${period}`;
        return formattedDate;
      } else {
        return dateTimeString;
      }
    },
    formatDate(dateTimeString) {
      const date = new Date(dateTimeString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to the month since it's zero-based
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    goToNextTab(nextTab) {
      if (nextTab) {
        const valid = this.validateForm();
        if (valid) {
          this.activeTab = this.$refs.tabs.tabs.findIndex(
            (tab) => tab.title === nextTab
          );
        }
      } else {
        this.activeTab = (this.activeTab + 1) % this.$refs.tabs.tabs.length;
      }
    },
    upload__doc(e, docName) {
      const inputElement = e.target.nextElementSibling.children[0];
      inputElement.click();
      inputElement.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];
        if (docName == "donor_card") {
          this.userData.donor_card = selectedFile;
        }
        if (docName == "aadhar_doc") {
          this.userData.aadhar_doc = selectedFile;
        }
        if (docName == "samgra_id_doc_documents") {
          this.userData.samgra_id_doc_documents = selectedFile;
        }
      });
    },
    onUploadDocs(e, docName) {
      console.log(e, docName);
      const formData = new FormData();
      if (e.target.files.length > 0) {
        const selectedFile = event.target.files[0];
        if (docName == "aadhar_doc") {
          this.userData.aadhar_doc = selectedFile;
          this.userData.aadhar_doc_fileName = selectedFile.name;
          this.userData.aadhar_doc_uploadTime = new Date().toLocaleString();
        }
        if (docName == "samgra_id_doc") {
          this.userData.samgra_id_doc = selectedFile;
          this.userData.samgra_id_doc_fileName = selectedFile.name;
          this.userData.samgra_id_doc_uploadTime = new Date().toLocaleString();
        }
        if (docName == "tc_doc") {
          this.userData.tc_doc = selectedFile;
          this.userData.tc_doc_fileName = selectedFile.name;
          this.userData.tc_doc_uploadTime = new Date().toLocaleString();
        }
        if (docName == "migration_doc") {
          this.userData.migration_doc = selectedFile;
          this.userData.migration_doc_fileName = selectedFile.name;
          this.userData.migration_doc_uploadTime = new Date().toLocaleString();
        }
      }
      this.documentComponentKey++;
    },
    validatePAN() {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!this.userData.pan_card_number.match(panRegex)) {
        this.PANValidation = true;
      } else {
        this.PANValidation = false;
      }
    },
    validatePin(value, index) {
      if (value.length != 6) {
        this.PinValidation = true;
        this.indexNo = index;
      } else {
        this.PinValidation = false;
      }
    },
    validateAadhar() {
      const aadharPattern = /^\d{12}$/;
      if (!this.userData.aadhar_number.match(aadharPattern)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    validateIFSC() {
      const ifscRegex = /^[A-Za-z]{4}\d{7}$/;

      if (!this.userData.ifsc.match(ifscRegex)) {
        this.IFSCValidation = true;
      } else {
        this.IFSCValidation = false;
      }
    },
    validateForm() {
      let output = true;
      // console.log(this.userData.userType, '1');
      if (
        this.userData.UserRole == "patient" ||
        this.userData.UserRole == "blood_donor" ||
        this.userData.UserRole == "community_user" ||
        this.userData.UserRole == "camp_organizer"
      ) {
        if (this.userData.name) {
          var regName = /[@#$%!^*<>?]/;
          var name = this.userData.name;
          if (regName.test(name)) {
            this.NameFormatValidation = true;
            output = false;
          } else {
            this.NameFormatValidation = false;
          }
        }
        if (!this.userData.name) {
          this.NameValidation = true;
          output = false;
        } else {
          this.NameValidation = false;
          output = true;
        }

        if (!this.userData.age) {
          if (!this.userData.age) {
            this.AgeValidation = true;
            output = false;
          } else {
            this.AgeValidation = false;
            output = true;
          }
          if (this.activeTab != 0) {
          }
        }
        if (this.activeTab != "0") {
          if (!this.userData.email) {
            this.EmailValidation = true;
            output = false;
          } else {
            this.EmailValidation = false;
            output = true;
          }
        }
      }

      if (
        this.userData.UserRole == "hospital" ||
        this.userData.UserRole == "blood_center"
      ) {
        if (!this.userData.name && this.activeTab == "0") {
          this.NameValidation = true;
          output = false;
        } else {
          this.NameValidation = false;
          output = true;
        }
      }
      return output;
    },
  },
  mounted() {
    axios.get(`profile/${this.$route.params.id}`).then((response) => {
      this.userData = response.data.data;
      this.userData.class = response.data.data.class_id;
      this.userData.section = response.data.data.section_id;
      this.userData.samgra_id_doc = response.data.image.samgra_id_doc;
      this.userData.samgra_id_doc_fileName =
        response.data.image.samgra_id_doc_fileName;
      this.userData.samgra_id_doc_uploadTime =
        response.data.image.samgra_id_doc_uploadTime;
      this.userData.aadhar_doc = response.data.image.aadhar_doc;
      this.userData.aadhar_doc_fileName =
        response.data.image.aadhar_doc_fileName;
      this.userData.aadhar_doc_uploadTime =
        response.data.image.aadhar_doc_uploadTime;
      this.userData.tc_doc = response.data.image.tc_doc;
      this.userData.tc_doc_fileName = response.data.image.tc_doc_fileName;
      this.userData.tc_doc_uploadTime = response.data.image.tc_doc_uploadTime;
      this.userData.migration_doc = response.data.image.migration_doc;
      this.userData.migration_doc_fileName =
        response.data.image.migration_doc_fileName;
      this.userData.migration_doc_uploadTime =
        response.data.image.migration_doc_uploadTime;

      if (response.data.data.role == "teacher") {
        axios
          .get(`SubjctClassData/${response.data.data.id}`)
          .then((response) => {
            this.SubjctClassData = response.data.SubjectClass;
            this.ClassTeacher = response.data.class_teacher;
          });
      }
    });
    axios.get(`getClass`).then((response) => {
      this.classOptions = response.data.class;
    });
    axios.get(`getSubject`).then((response) => {
      this.subjectOptions = response.data.data;
    });
    axios.get(`getClassSection`).then((response) => {
      this.SectionOptions = response.data.data;
    });
  },
  setup(props) {
    const RemoveError = (errorName) => {
      errors.value[errorName] = " ";
    };
    const toast = useToast();
    const { route, router } = useRouter();
    const refInputEl = ref(null);
    const previewEl = ref(null);
    const img_tab_key = ref(0);
    const errorBag = ref({
      isError: false,
      errors: [],
    });
    const blankuserData = {
      first_name: null,
      middle_name: null,
      last_name: null,
      gender: null,
      dob: null,
      father_name: null,
      profileImage: null,
      mother_name: null,
      aadhar_number: null,
      samgra_id: null,
      prsnol_number: null,
      parent_number: null,
      address: null,
      class: null,
      section: null,
      subject: null,
      aadhar_doc: null,
      samgra_id_doc: [],
    };
    const resetData = () => {
      axios.get("profile").then((response) => {
        userData.value = response.data.data.user;
        userData.value.class = response.data.data.user.class_id;
        userData.value.section = response.data.data.user.section_id;
        userData.value.role_name = response.data.data.user.role_name;
        userData.value.mobile = response.data.data.user.mobile;
      });
    };
    const errors = ref([]);

    const hasErrors = (fieldName) => {
      return fieldName in errors.value;
    };

    const getErrors = (fieldName) => {
      return errors.value[fieldName][0];
    };
    const userData = ref(JSON.parse(JSON.stringify(blankuserData)));
    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl);

    const validatFile = ref(null);

    const onFileChange = (e) => {
      validatFile.value = e;
      const file = e.target.files;
      if (file && file[0]) {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        // eslint-disable-next-line func-names
        reader.onload = function (event) {
          userData.value.profileImage = event.target.result;
        };
      }
    };
    const changeProfile = () => {
      if (validatFile.value) {
        const validationfile = validatFile.value.target.files[0];
        const fileName = validationfile.name;
        const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (
          fileExtension !== "jpeg" &&
          fileExtension !== "jpg" &&
          fileExtension !== "png"
        ) {
          profile_error.value = "Image Type Must be jpeg,png and jpg";
        }
      }
      if (profile_error.value != null) {
        const formData = new FormData();
        Object.keys(userData.value).forEach((element) => {
          formData.append(element, userData.value[element] ?? "");
        });
        axios
          .post("profile", formData)
          .then((response) => {
            if (response.data.status == true) {
              toast({
                component: ToastificationContent,
                props: {
                  title: "Profile Updated Successfully!!",
                  icon: "EditIcon",
                  variant: "success",
                },
              });
              localStorage.setItem(
                "profileImage",
                response.data.profile.data.user.profile_pic
              );
              localStorage.setItem(
                "name",
                response.data.profile.data.user.name
              );
              store.commit(
                "global-store/UPDATE_PROFILE_IMAGE",
                response.data.profile.data.user.profile_pic
              );
              store.commit(
                "global-store/UPDATE_PROFILE_NAME",
                response.data.profile.data.user.name
              );
              if (response.data.profile.data.user.userType === "raktam") {
                router.replace({ name: "admin-dashboard" });
              } else {
                router.replace({ name: "dashboard" });
              }

              var userData = store.state["global-store"].userData;
              userData.name = response.data.data.name;
              userData.phone = response.data.data.phone;
              // userData.profile_image = response.data.data.profile_pic;

              store.commit("global-store/UPDATE_USER_DATA", userData);
            }
          })
          .catch((error) => {
            if (error.response.status === 404) {
              userData.value = undefined;
            }
            if (error.response.data.code == 422) {
              errors.value = error.response.data.errors;
              toast(
                {
                  component: ToastificationContent,
                  props: {
                    title: error.response.data.message,
                    icon: "CheckCircleIcon",
                    variant: "danger",
                  },
                },
                { timeout: 3000 }
              );
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
    const encodeBase64 = (data) => {
      return data ? Buffer.from(data.toString()).toString("base64") : null;
    };
    const decodeBase64 = (data) => {
      return data
        ? Buffer.from(data.toString(), "base64").toString("ascii")
        : null;
    };
    const profile_error = ref([]);

    // const
    return {
      userData,
      onFileChange,
      blankuserData,
      hasErrors,
      getErrors,
      errors,
      profile_error,
      RemoveError,
      resetData,
      img_tab_key,
      changeProfile,
      validatFile,
    };
  },
};
</script>
<style>
.donorSpecifier {
  width: 100%;
  text-align: center;
  font-size: 12px;
  border: thin solid #85001a;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: thin solid #85001a;
  border-radius: 8px;
  /* width: auto; */
  position: relative;
}
.donorSpecifier img {
  margin-right: 5px;
  background: white;
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  position: absolute;
  left: -10px;
  transform: translateX(-0%);
  border: thin solid #85001a;
}

.donorSpecifier span {
  margin-left: 20px;
}
</style>
