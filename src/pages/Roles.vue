<template>
    <Layout>

        <div class="box-title">
            <div class="box-grid">
                
                <div class="title-page">
                    <h2>{{ activeTabName }}</h2>
                </div>

                <div class="tabs">

                    <div 
                        class="items" 
                        v-on:click="handleTabClick(tabNames.tab1)" 
                        :class="{ 'tabs-item-active': activeTabName === tabNames.tab1 }"
                    >
                        <img src="./assets/image/icons/persona.svg" alt="" width="30" height="30">
                        <h6>{{ activeTabName }}</h6>
                    </div>

                    <div 
                        class="items" 
                        v-on:click="handleTabClick(tabNames.tab2)" 
                        :class="{ 'tabs-item-active': activeTabName === tabNames.tab2 }"
                    >
                        <img src="./assets/image/icons/persona.svg" alt="" width="30" height="30">
                        <h6>{{ activeTabName }}</h6>
                    </div>

                </div>
            </div>
        </div>

        <!-- <Lista /> -->

        <div class="" v-if="activeTabName === 'Lista Roles'">
            <ListaRoles />
        </div>

        <div class="" v-if="activeTabName === 'Nuevo Rol'">
            <NuevoRol />
        </div>
        
    </Layout>
</template>

<script>

    import Layout from '@/components/Layout';
    import NuevoRol from '@/components/roles/NuevoRol';
    import ListaRoles from '@/components/roles/ListaRoles';

    export default {
        name: "Roles",
        components: {
            Layout,
            NuevoRol,
            ListaRoles
        },
        data() {
            return {
                activeTabName: 'Lista Roles',
                tabNames: {
                    tab1: 'Lista Roles',
                    tab2: 'Nuevo Rol'
                }
            }
        },
        methods: {
            handleTabClick(value){
                this.activeTabName = value;
            }
        }
        
    }
</script>

<style>




</style>