<template>
    <div class="container-fluid">

        <div class="row">
            <Header></Header>
        </div>

        <div class="row">
            <div class="col-lg-4 bg-warning" style="height: 100vh;">
                <SideNavbar></SideNavbar>
            </div>

            <div class="col-lg-8">
                <router-view/>
            </div>

        </div>

    </div>
</template>

<script>
import Header from '../../components/Header.vue';
import SideNavbar from '../../components/SideNavbar.vue';
export default {
    name: 'Layout',

    components: {
        Header,
        SideNavbar,
    }
}
</script>