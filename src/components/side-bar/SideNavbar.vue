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
            this.routes = router.getRoutes().slice(0, 5);
        }

    },

    mounted() {
        this.getRoutesNames();
    },


}
</script>
