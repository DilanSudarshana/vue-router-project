<template>
    <div class="bg-light p-2 m-3 rounded h-100">

        <div class="d-flex justify-content-center align-items-center mt-2">
            <h5>Wellcome to Employee Management System</h5>
        </div>

        <div class="d-flex justify-content-center align-item-center mt-4 m-2">

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
                            <p v-if="user.is_active == 1">Active</p>
                            <p v-else>Deactivated</p>
                        </td>
                        <td>
                            <div class="d-flex">
                                <router-link :to="'/' + user.id">
                                    <button class="btn btn-warning me-2">Update</button>
                                </router-link>
                                <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            axios.delete(`http://localhost/company/user/delete/${id}`, {
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then(response => {
                    console.log(`Deleted post with ID ${id}`);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },

    async mounted() {
        this.getAllUsers();
    }
}
</script>