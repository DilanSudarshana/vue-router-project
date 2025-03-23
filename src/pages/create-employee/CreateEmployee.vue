<template>

    <div class="bg-light p-2 m-3 rounded" style="height: 90vh;">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold"><i class="bi bi-person-add"></i> Create a new account</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="first_name" type="text" class="form-control" placeholder="First Name" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="last_name" type="text" class="form-control" placeholder="Last Name" />
                    </div>
                </div>
            </div>

            <div class="row pb-2">

                <div class="col-lg-6 col-md-6 mb-1">
                    <p class="text-muted fs-6 ms-1">Date of birth</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="dob" type="date" id="dayInput" class="form-control" />
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 mb-1">
                    <p class="text-muted fs-6 ms-1">Gender</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start align-items-center">
                            <input v-model="gender" type="radio" id="female" name="gender" value="female"
                                class="form-check-input" />
                            <label for="female" class="form-check-label ms-2">Female</label>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <input v-model="gender" type="radio" id="male" name="gender" value="male"
                                class="form-check-input" />
                            <label for="male" class="form-check-label ms-2">Male</label>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <input v-model="gender" type="radio" id="custom" name="gender" value="custom"
                                class="form-check-input" />
                            <label for="custom" class="form-check-label ms-2">Custom</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pb-2">

                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="email" type="text" class="form-control" placeholder="Email address" />
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="address" type="text" class="form-control" placeholder="Address" />
                    </div>
                </div>
            </div>

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="phone_number" type="text" class="form-control" placeholder="Phone Number" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <select v-model="employee_type" class="form-control">
                        <option value="">Select Employee Type</option>
                        <option :value="type.id" v-for="type in employeeType" :key="type.id">{{ type.type_name }}
                        </option>
                    </select>
                </div>

            </div>

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1"
                            rows="6"></textarea>
                    </div>
                </div>
            </div>


            <div class="row pb-2 mt-5">
                <MainButton v-on:click="createNewUser" buttonText="Create Employee"></MainButton>
            </div>

        </div>


    </div>

</template>

<script>
import MainButton from '../../components/form-item/MainButton.vue';
import axios from 'axios';

export default {
    name: 'CreateEmployee',

    components: {
        MainButton,
    },

    data() {
        return {
            first_name: '',
            last_name: '',
            dob: '',
            gender: '',
            email: '',
            address: '',
            phone_number: '',
            employee_type: '',
            description: '',
            employeeType: [],
        };
    },

    methods: {

        async createNewUser() {

            if (this.first_name == '' ||
                this.last_name == '' ||
                this.dob == '' ||
                this.gender == '' ||
                this.email == '' ||
                this.address == '' ||
                this.phone_number == '' ||
                this.employee_type == '' ||
                this.description == '') {
                alert('Please fill all fields');
            } else {
                let result = await axios.post('http://localhost/company/user', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    dob: this.dob,
                    gender: this.gender,
                    email: this.email,
                    address: this.address,
                    phone_number: this.phone_number,
                    employee_type: this.employee_type,
                    description: this.description,


                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                if (result.status == 200) {
                    console.log('data inserted')

                    this.first_name = ""
                    this.last_name = ""
                    this.dob = ""
                    this.gender = ""
                    this.email = ""
                    this.address = ""
                    this.phone_number = ""
                    this.employee_type = ""
                    this.$router.push('/')
                }
            }

        },

        async getEmployeeType() {
            let result = await axios.get('http://localhost/company/type');
            this.employeeType = result.data;
        },
    },

    mounted() {
        this.getEmployeeType();
    }


}
</script>