<template>
    <div class="bg-light p-2 m-3 rounded h-100">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold">Add new employee type</h5>
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
                        <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="6"
                            placeholder="Enter Description"></textarea>
                    </div>
                </div>
            </div>

            <div class="row pb-2 mt-5">
                <MainButton @click="addNewType" class="w-100" buttonText="Create Employee Type"></MainButton>
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
        }
    },

    methods: {

        async addNewType() {
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
                this.$router.push('/create-employee')
            }
        }
    },

}
</script>
<style></style>