<template>
    <div>
        <NavButton v-bind:routes="routes"></NavButton>
    </div>
</template>
<script>
import NavButton from './components/NavButton.vue';

export default {
    name: 'SideNavbar',

    components: {
        NavButton,
    },

    data() {
        return {
            
            routes: [
                { name: 'Home', path: '/' },
                { name: 'Attendace', path: '/attendance' },
                { name: 'Create Employee', path: '/create-employee' },
                { name: 'Add Employee Type', path: '/employee-type' },
                { name: 'Report', path: '/report' },
            ]
        }
    },

}
</script>
