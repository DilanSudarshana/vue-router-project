<template>

    <div class="bg-light p-2 m-3 rounded h-100">

        <div class="container">

            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="d-flex justify-content-start align-items-start">
                        <h5 class="text-center fw-bold">Create a new account</h5>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" placeholder="First Name" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" placeholder="Last Name" />
                    </div>
                </div>
            </div>

            <div class="row pb-2">

                <div class="col-lg-6 col-md-6 mb-1">
                    <p class="text-muted fs-6 ms-1">Date of birth</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="date" id="dayInput" class="form-control" placeholder="DD" min="1" max="31" />
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 mb-1">
                    <p class="text-muted fs-6 ms-1">Gender</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex justify-content-start align-items-center">
                            <input type="radio" id="female" name="gender" value="female" class="form-check-input" />
                            <label for="female" class="form-check-label ms-2">Female</label>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <input type="radio" id="male" name="gender" value="male" class="form-check-input" />
                            <label for="male" class="form-check-label ms-2">Male</label>
                        </div>
                        <div class="d-flex justify-content-start align-items-center">
                            <input type="radio" id="custom" name="gender" value="custom" class="form-check-input" />
                            <label for="custom" class="form-check-label ms-2">Custom</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row pb-2">

                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" placeholder="Email address" />
                    </div>
                </div>

                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" placeholder="Address" />
                    </div>
                </div>
            </div>

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6 mb-1">
                    <div class="d-flex justify-content-center align-items-center">
                        <input type="text" class="form-control" placeholder="Phone Number" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-1">
                    <select class="form-control">
                        <option>Choose Employee Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                    </select>
                </div>

            </div>

            <div class="row pb-2">
                <div class="col-lg-6 col-md-6">
                    <div class="d-flex justify-content-center align-items-center">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                </div>
            </div>


            <div class="row pb-2 mt-5">
                <MainButton buttonText="Create Employee"></MainButton>
            </div>

        </div>


    </div>

</template>

<script>
import MainButton from '../../components/form-item/MainButton.vue';

export default {
    name: 'CreateEmployee',

    components: {
        MainButton,
    },

}
</script>