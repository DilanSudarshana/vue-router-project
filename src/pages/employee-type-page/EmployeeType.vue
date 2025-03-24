<template>
    <div class="bg-light p-2 m-3 rounded" style="height: 90vh;overflow-y: scroll;">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold"><i class="bi bi-folder-plus"></i> Add new employee type</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2 mt-5">
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input v-model="type_name" type="text" class="form-control" placeholder="Type Name" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="2"
                            placeholder="Enter Description"></textarea>
                    </div>
                </div>
            </div>

            <div class="row pb-2 mt-3 d-flex justify-content-end align-items-end">
                <MainButton @click="addNewType" class="w-50" buttonText="Create Employee Type"></MainButton>
            </div>

            <div class="row p-3">
                <table class="table w-100">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="catogory in emp_categories" :key="catogory.id">
                            <td>#EID-{{ catogory.id }}</td>
                            <td>{{ catogory.type_name }}</td>
                            <td>{{ catogory.description }}</td>
                            <td>
                                <div class="d-flex">
                                    <router-link :to="'/employee-update/' + catogory.id">
                                        <button class="btn btn-warning me-2 text-white"><i
                                                class="bi bi-pencil-square"></i></button></router-link>

                                    <button @click="deleteCategory(catogory.id)" class="btn btn-danger"><i
                                            class="bi bi-trash-fill"></i></button>
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
import MainButton from '../../components/form-item/MainButton.vue';
import axios from 'axios';

export default {
    name: 'EmployeeType',

    components: {
        MainButton,
    },

    data() {
        return {
            type_name: '',
            description: '',
            emp_categories: [],
        }
    },

    methods: {

        async addNewType() {
            if (this.type_name == '' || this.description == '') {
                alert('Please fill all fields')
            } else {
                let result = await axios.post('http://localhost/company/type', {
                    type_name: this.type_name,
                    description: this.description,

                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                if (result.status == 200) {
                    this.$router.push('/')
                }
            }
        },

        async getAllCategories() {
            let result = await axios.get('http://localhost/company/type');
            this.emp_categories = result.data;
        },

        async deleteCategory(id) {
            axios.delete(`http://localhost/company/type/delete/${id}`, {
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then(response => {
                    alert(`Deleted employee type with ID ${id}`);
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.getAllCategories();
    }

}
</script>

<style></style>