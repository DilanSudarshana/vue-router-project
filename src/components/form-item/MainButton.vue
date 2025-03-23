<template>
    <div class="col-lg-6 col-md-6">
        <div class="d-flex justify-content-between align-items-center">
            <button id="button" class="btn btn-block w-100 button-30" :disabled="!status" :style="{ backgroundColor: color, border: 'none' }">
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
            default: () => "Button",
        },
        status: {
            type: Boolean,
            default: () => true,
        },
        color: {
            type: String,
            default: () => '#1a50d9',
        }
    }

}
</script>

<style>
.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>