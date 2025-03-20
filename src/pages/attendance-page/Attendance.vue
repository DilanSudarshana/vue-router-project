<template>
    <div class="bg-light p-2 m-3 rounded h-100">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold">Mark Attendance</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2 mt-4">
                <div class="col-lg-12 col-md-12 mb-1">
                    <SearchBar Text="Search Employee Here"></SearchBar>
                </div>
            </div>

            <div class="row pb-2 mt-4">
                <DateInput></DateInput>
                <TimeInput></TimeInput>
            </div>


            <div class="row pb-2 mt-5">
                <MainButton buttonText="Check In"></MainButton>
                <MainButton buttonText="Check Out"></MainButton>
            </div>

        </div>


    </div>
</template>

<script>
import DateInput from '../../components/form-item/DateInput.vue';
import TimeInput from '../../components/form-item/TimeInput.vue';
import MainButton from '../../components/form-item/MainButton.vue'
import SearchBar from '../../components/form-item/SearchBar.vue';

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
            
        };
    },
}
</script>