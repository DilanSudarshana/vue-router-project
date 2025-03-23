<template>
    <div class="bg-light p-2 m-3 rounded h-100">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold"><i class="bi bi-house"></i> Wellcome to Home Page</h5>
                    </div>
                    <div class="d-flex justify-content-start align-items-start mt-2 mb-2">
                        <h6>All employee details<span class="text-danger">*</span></h6>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row p-3">
                <table class="table w-100">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>#EID-{{ user.id }}</td>
                            <td>{{ user.first_name }}</td>
                            <td>{{ user.last_name }}</td>
                            <td>{{ user.phone_number }}</td>
                            <td>{{ user.type_name }}</td>
                            <td>
                                <span v-if="user.is_active == 1" class="badge bg-success mt-2">Active</span>
                                <span v-else class="badge bg-danger mt-2">Deactivated</span>
                            </td>
                            <td>
                                <div class="d-flex">
                                    <router-link :to="'/' + user.id">
                                        <button class="btn btn-warning me-2 text-white"><i class="bi bi-pencil-square"></i></button>
                                    </router-link>
                                    <button @click="deleteUser(user.id)" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Home',

    data() {
        return {
            users: [],
        }
    },

    methods: {

        async getAllUsers() {
            let result = await axios.get('http://localhost/company/user');
            this.users = result.data;
        },


        async deleteUser(id) {

            if (confirm(`Are you sure you want to delete the user with ID ${id}?`) == true) {
                axios.delete(`http://localhost/company/user/delete/${id}`, {
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                    .then(response => {
                        window.location.reload();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    },

    async mounted() {
        this.getAllUsers();
    }
}
</script>