<template>
    <div id="report-page" class="bg-light p-2 m-3 rounded">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold"><i class="bi bi-bar-chart"></i> View Attendance report</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2">
                <div class="col-lg-12 col-md-12 mb-1">
                    <h6 class="mt-2 mb-3">Select Name<span class="text-danger">*</span></h6>
                    <select v-model="user_id" class="form-control">
                        <option value="">Select User</option>
                        <option v-for="user in users" :key="user.id" :value="user.id">
                            #ID- {{ user.id }} {{ user.first_name }} {{ user.last_name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6 mb-1">
                    <h6 class="mt-2 mb-3">Start Date<span class="text-danger">*</span></h6>
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="start_date" type="date" id="dayInput" class="form-control" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <h6 class="mt-2 mb-3">End Date<span class="text-danger">*</span></h6>
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="end_date" type="date" id="dayInput" class="form-control" />
                    </div>
                </div>
            </div>

            <div class="row pb-2 mt-3">
                <MainButton buttonText="Filter Data" color="#FF5733" class="w-100" v-on:click="filterAttendanceData">
                </MainButton>
            </div>

            <div class="row pb-2">
                <div id="main-right" class="d-flex justify-content-center align-item-center mt-4 m-2 overflow-auto">

                    <table class="table w-100">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Date</th>
                                <th>Employee</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Availability</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="attendance in attendaceDetails" :key="attendance.id">
                                <td>#AID- {{ attendance.id }}</td>
                                <td>{{ attendance.mark_date }}</td>
                                <td>{{ attendance.first_name }} {{ attendance.last_name }}</td>
                                <td>{{ attendance.check_in }}</td>
                                <td>{{ attendance.check_out }}</td>
                                <td class="text-center">
                                    <span v-if="attendance.attendace_status == 1"
                                        class="badge bg-success">Avalabale</span>
                                    <span v-else class="badge bg-danger">Not Available</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>

    </div>
</template>

<script>
import axios from 'axios';
import MainButton from '../../components/form-item/MainButton.vue'

export default {
    name: 'Report',

    components: {
        MainButton,
    },

    data() {
        return {
            users: [],
            attendaceDetails: [],
            user_id: '',
            start_date: '',
            end_date: '',
        };
    },
    methods: {

        //get all users
        async getAllUsers() {
            let result = await axios.get('http://localhost/company/user');
            this.users = result.data;
        },


        async getAllAttendance() {
            let result = await axios.get('http://localhost/company/summary');
            this.attendaceDetails = result.data;
        },

        //get summary about user
        async filterAttendanceData() {

            if (this.user_id && this.start_date && this.end_date) {
                let result = await axios.get('http://localhost/company/summary/filter', {
                    params: {
                        user_id: this.user_id,
                        start_date: this.start_date,
                        end_date: this.end_date,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });

                // console.log("Response:", result);

                if (result.data.status === true) {
                    this.attendaceDetails = result.data.data;
                } else {
                    alert('No data found')
                }

            } else {
                alert('You have to fill all the fields')
            }
        }


    },

    mounted() {
        this.getAllUsers();
        this.getAllAttendance();
    }
}
</script>

<style>
#report-page {
    height: 90vh;
    overflow-y: scroll;
}

#report-page::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}

#report-page::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 99px;
}

#report-page::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 99px;
    transition: background 0.3s ease-in-out;
}

#report-page::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
}
</style>