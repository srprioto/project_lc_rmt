<template>
    <Layout>
        
        <!-- tabs -->
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
                        <font-awesome-icon icon="list" size="2x" />
                        <h6>{{ tabNames.tab1 }}</h6>
                    </div>

                    <div 
                        class="items" 
                        v-on:click="handleTabClick(tabNames.tab2)" 
                        :class="{ 'tabs-item-active': activeTabName === tabNames.tab2 }"
                    >
                        <font-awesome-icon icon="plus" size="2x" />
                        <h6>{{ tabNames.tab2 }}</h6>
                    </div>

                </div>
            </div>
        </div>

        <!-- componentes de tabs -->
        <div class="" v-if="activeTabName === tabNames.tab1">
            <ListaEmpleados :data="data" :loading="loading" :url="url" :getData="getData"/>
        </div>

        <div class="" v-if="activeTabName === tabNames.tab2">
            <CrearEmpleado 
                :getData="getData" 
                :url="url" 
                :tab="handleTabClick" 
                :nameTab="tabNames.tab1"
                :dataUser="dataUser"
                :loadingUsers="loading"
            />
        </div>

    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    
    import ListaEmpleados from '@/components/empleados/ListaEmpleados';
    import CrearEmpleado from '@/components/empleados/CrearEmpleado';

    export default {
        name: "Empleados",
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
                },

                url: dominio() + "employee",
                urlUsers: dominio() + "users",
                loading: true,
                error: null,

                data: {},
                dataUser: { },

            }
        },
        created() {
            this.getData();
            // this.getUsers();
            
        },
        methods: {
            handleTabClick(value){
                this.activeTabName = value;
                this.getData();
            },

            async getData() {
                
                this.loading = true;

                try {
                    const res = await this.axios({
                        method: 'get',
                        url: this.url,
                    });
                    const resUser = await this.axios({
                        method: 'get',
                        url: this.urlUsers,
                    });

                    this.data = await res.data.success;
                    this.dataUser = await resUser.data.success;

                    // this.data = data.success
                    this.loading = false;

                } catch (error) {

                    this.loading = false;
                    this.error = error

                }
            },

            // async getUsers() {
                
            //     this.loading = true;

            //     try {
            //         const resUser = await this.axios({
            //             method: 'get',
            //             url: this.urlUsers,
            //         });
            //         this.dataUser = await resUser.data.success;

            //         // console.log(resUser.data.success);

            //         // this.dataUser = data.success
            //         this.loading = false;

            //     } catch (error) {
            //         this.loading = false;
            //         this.error = error
            //     }

            // },

        }
    }
</script>

<style>




</style>