<template>
    <div class="bg-light p-2 m-3 rounded" style="height: 90vh;">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold"><i class="bi bi-card-checklist"></i> Mark Attendance</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2 mt-4">
                <div class="col-lg-12 col-md-12 mb-1">
                    <h6 class="mt-2 mb-3">Select Name<span class="text-danger">*</span></h6>
                    <select v-model="user_id" class="form-control" @change="getAttendenceDetails(user_id)">
                        <option value="">Select User</option>
                        <option v-for="user in users" :key="user.id" :value="user.id">
                            #ID- {{ user.id }} {{ user.first_name }} {{ user.last_name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row pb-2 mt-4">
                <div class="col-lg-6 col-md-6 mb-1">
                    <h6 class="mt-2 mb-3">Date<span class="text-danger">*</span></h6>
                    <input type="date" class="form-control" id="currentDate" />
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <h6 class="mt-2 mb-3">Time<span class="text-danger">*</span></h6>
                    <input type="time" class="form-control" id="currentTime" />
                </div>
            </div>

            <div class="row pb-2 mt-4">
                <div class="col-lg-12 col-md-12 mb-1">
                    <h6 class="mt-2 mb-3">Attendace Details<span class="text-danger">*</span></h6>
                    <div class="card">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><i class="bi bi-calendar2-check-fill text-warning"></i>
                                Attendace Date: {{
                                    attendaceDetails.mark_date }}</li>
                            <li class="list-group-item"><i class="bi bi-lightbulb-fill text-success"></i> Check In: {{
                                attendaceDetails.check_in }}</li>
                            <li class="list-group-item"><i class="bi bi-lightbulb-fill text-danger"></i> Check Out: {{
                                attendaceDetails.check_out ?
                                    attendaceDetails.check_out : 'Not Checked Out Yet' }}</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="row pb-2 mt-5">
                <h6 class="mt-2 mb-3">Mark Attendace Here <span class="text-danger">*</span></h6>
                <MainButton v-on:click="makeCheckIn" buttonText="Check In">
                </MainButton>
                <MainButton v-on:click="makeCheckOut(attendaceDetails.user_id)" buttonText="Check Out" color="#ed3b05"
                    :status="attendaceDetails.attendace_status == 1 ? true : false">
                </MainButton>
            </div>

        </div>


    </div>
</template>

<script>
import DateInput from '../../components/form-item/DateInput.vue';
import TimeInput from '../../components/form-item/TimeInput.vue';
import MainButton from '../../components/form-item/MainButton.vue'
import SearchBar from '../../components/form-item/SearchBar.vue';
import axios from 'axios';

export default {
    name: 'Attendance',

    components: {
        MainButton,
        SearchBar,
        DateInput,
        TimeInput,
    },

    data() {
        return {
            users: [],
            attendaceDetails: [],
            user_id: '',
        };
    },

    methods: {

        //get all users
        async getAllUsers() {
            let result = await axios.get('http://localhost/company/user');
            this.users = result.data;
        },

        //make check in based on user id
        async makeCheckIn() {
            const user_id = this.user_id
            if (user_id) {
                let result = await axios.post('http://localhost/company/attendance', {
                    user_id: this.user_id,
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                if (result.data.status == true) {
                    alert(result.data.message)
                    window.location.reload();
                } else {
                    alert(result.data.message)
                }
            } else {
                alert('Please select a user')
            }

        },

        //get user attendance based on user id and current date
        async getAttendenceDetails($id) {
            let result = await axios.get(`http://localhost/company/attendance/${$id}`)

            if (result.data.status == true) {
                this.attendaceDetails = result.data.data;
            }

        },

        showCurrentDateTime() {
            const today = new Date().toISOString().split('T')[0];
            const time = new Date().toTimeString().split(' ')[0].substring(0, 5);
            document.getElementById('currentDate').value = today;
            document.getElementById('currentDate').disabled = true;
            document.getElementById('currentTime').value = time;
            document.getElementById('currentTime').disabled = true;
        },

        async makeCheckOut($id) {

            // console.log($id)
            if ($id) {
                let result = await axios.put(`http://localhost/company/attendance/update/${$id}`)

                if (result.data.status == true) {
                    alert(result.data.message)
                    window.location.reload();
                } else {
                    alert(result.data.message)
                }
            } else {
                alert('Please select a user')
            }

        }
    },

    mounted() {
        this.getAllUsers();
        this.showCurrentDateTime();
    }

}
</script>