<template>
    <div class="container-fluid">

        <div class="row">
            <Header></Header>
        </div>

        <div class="row">
            <div class="col-lg-3" style="height: 100vh;background-color: #8d99ae;">
                <SideNavbar></SideNavbar>
            </div>

            <div class="col-lg-9" id="pages-main">
                <router-view/>
            </div>

        </div>

    </div>
</template>

<script>
import Header from './components/header/Header.vue';
import SideNavbar from './components/side-bar/SideNavbar.vue';
export default {
    name: 'Layout',

    components: {
        Header,
        SideNavbar,
    }
}
</script>

<style>
#pages-main{
    background-color: #edf2f4;
}
</style>