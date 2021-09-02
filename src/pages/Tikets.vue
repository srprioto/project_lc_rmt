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

            <div class="box">
                <h2>tab tiket 1</h2>
            </div>

            <!-- <ListaEmpresas :data="data" :loading="loading" :url="url" :getData="getData"/> -->
        </div>

        <div class="" v-if="activeTabName === tabNames.tab2">

            <div class="box">
                <h2>tab tiket 2</h2>
            </div>

            <!-- <CrearEmpresa 
                :getData="getData" 
                :url="url" 
                :tab="handleTabClick" 
                :nameTab="tabNames.tab1"
                :idOwner="idOwner"
                :clearOwner="clearOwner" 
            /> -->
        </div>

    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    
    // import ListaEmpresas from '@/components/empresa/ListaEmpresas';
    // import CrearEmpresa from '@/components/empresa/CrearEmpresa';

    export default {
        name: "Empresas",
        components: {
            Layout,
            // ListaEmpresas,
            // CrearEmpresa
        },
        data() {
            return {
                data: {},
                loading: true,
                error: null,

                tabNames: {
                    tab1: 'Tab1',
                    tab2: 'Tab2'
                },
                activeTabName: "Tab1",

                url: dominio() + "business",
                dataForms: { },

                idOwner: this.$route.params.owner ? this.$route.params.owner : null

            }
        },
        created() {
            this.getData();
            // console.log(this.idOwner);
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

            clearOwner(){
                this.idOwner = null;
            }

        }
    }
</script>

<style>




</style>