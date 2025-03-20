<template>
    <div class="col-lg-6 col-md-6">
        <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-primary btn-block w-100">
                <h6 class="text-light fw-bold">{{ buttonText }}</h6>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainButton',

    props: {
        buttonText: {
            type: String,
            default:()=>"Button",
        }
    }


}
</script>