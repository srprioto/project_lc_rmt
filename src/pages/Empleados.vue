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

        <div class="" v-if="activeTabName === 'Lista empleados'">
            <ListaEmpleados />
        </div>

        <div class="" v-if="activeTabName === 'Crear empleado'">
            <CrearEmpleado />
        </div>

    </Layout>
</template>

<script>

    import Layout from '@/components/Layout';
    import ListaEmpleados from '@/components/empleados/ListaEmpleados';
    import CrearEmpleado from '@/components/empleados/CrearEmpleado';

    export default {
        name: 'Empleados',
        components: {
            Layout,
            ListaEmpleados,
            CrearEmpleado
        },
        data() {
            return {
                activeTabName: 'Lista empleados',
                tabNames: {
                    tab1: 'Lista empleados',
                    tab2: 'Crear empleado'
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