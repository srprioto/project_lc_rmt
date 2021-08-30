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
                        <img src="./assets/image/icons/persona.svg" alt="" width="30" height="30">
                        <h6>{{ tabNames.tab1 }}</h6>
                    </div>

                    <div 
                        class="items" 
                        v-on:click="handleTabClick(tabNames.tab2)" 
                        :class="{ 'tabs-item-active': activeTabName === tabNames.tab2 }"
                    >
                        <img src="./assets/image/icons/persona.svg" alt="" width="30" height="30">
                        <h6>{{ tabNames.tab2 }}</h6>
                    </div>

                </div>



            </div>
        </div>

        <!-- componentes de tabs -->
        <div class="" v-if="activeTabName === 'Lista contratos'">
            <ListaContratos :data="data" :loading="loading" :url="url" :getData="getData"/>
        </div>

        <div class="" v-if="activeTabName === 'Crear contrato'">
            <CrearContrato :getData="getData" :url="url" />
        </div>



    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    
    import ListaContratos from '@/components/contratos/ListaContratos';
    import CrearContrato from '@/components/contratos/CrearContrato';

    export default {
        name: "Empresas",
        components: {
            Layout,
            ListaContratos,
            CrearContrato
        },
        data() {
            return {
                activeTabName: 'Lista contratos',
                tabNames: {
                    tab1: 'Lista contratos',
                    tab2: 'Crear contrato'
                },

                url: dominio() + "business",
                data: {},
                loading: true,
                error: null,

                dataForms: { },

            }
        },
        created() {

            // console.log(this.url);

            this.getData();
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
                    const { data } = await res;

                    this.data = data.success
                    this.loading = false;

                } catch (error) {
                    this.loading = false;
                    this.error = error
                }
            },

        }
    }
</script>

<style>




</style>