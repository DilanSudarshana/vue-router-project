<template>

    <div id="nav-button" v-for="route in routes" type="button" class="text-white p-2 mt-3 rounded" @click="$router.push(route.path)">
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
#nav-button {
    background-color: #2b2d42;
}
#nav-button {
    transition: background-color 0.3s ease-in-out;
}

#nav-button:hover {
    background-color: #3e4160;
}
</style>
