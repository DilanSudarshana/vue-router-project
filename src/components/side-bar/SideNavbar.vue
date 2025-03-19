<template>
    <div>
        <NavButton v-bind:routes="routes"></NavButton>
    </div>
</template>
<script>
import NavButton from './components/NavButton.vue';
import router from '../../route.js'

export default {
    name: 'SideNavbar',

    components: {
        NavButton,
    },

    data() {
        return {
            routes: [],
        };
    },

    methods: {
        getRoutesNames() {
            this.routes = router.getRoutes();
            console.log(this.routes)
        }

    },

    mounted() {
        this.getRoutesNames();
    },


}
</script>
