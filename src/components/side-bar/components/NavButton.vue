<template>

    <div v-for="route in routes" type="button" class="button-30 text-white p-2 mt-3 rounded"
        @click="$router.push(route.path)">
        <div class="ms-2">
            {{ route.name }}
        </div>
    </div>

</template>

<script>


export default {
    name: 'NavButton',
    props: ['routes'],
}
</script>
<style>
/* CSS */
.button-30 {
    background-color: #2b2d42;
}

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
