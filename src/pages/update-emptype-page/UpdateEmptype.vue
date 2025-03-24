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
                <MainButton class="w-50" buttonText="Update Employee Category" v-on:click="updateCategory"
                    color="#ed3b05"></MainButton>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios';
import MainButton from '../../components/form-item/MainButton.vue';


export default {
    name: 'UpdateEmptype',

    components: {
        MainButton,
    },

    data() {
        return {
            type_name: '',
            description: '',
        };
    },

    methods: {
        async getCategoryDetails() {
            let result = await axios.get(`http://localhost/company/type/${this.$route.params.id}`);
            this.type_name = result.data.type_name;
            this.description = result.data.description;
        },

        async updateCategory() {

            if (this.type_name == '' || this.description == '') {
                alert('Please fill all the fields')
            } else {
                let result = await axios.put(`http://localhost/company/type/update/${this.$route.params.id}`, {
                    type_name: this.type_name,
                    description: this.description,

                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                )
                if (result.status == 200) {
                    console.log('data updated successfull')
                    this.$router.push('/employee-type')
                }
            }
        },
    },

    mounted() {
        this.getCategoryDetails();
    }


}
</script>
<style></style>