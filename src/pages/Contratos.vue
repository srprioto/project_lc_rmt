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

        <!-- componentes de tabs -->
        <div class="" v-if="activeTabName === 'Lista contratos'">
            <ListaContratos />
        </div>

        <div class="" v-if="activeTabName === 'Crear contrato'">
            <NuevoContrato />
        </div>

    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    import Title from '@/components/Title';

    import ListaContratos from '@/components/contratos/ListaContratos';
    import NuevoContrato from '@/components/contratos/NuevoContrato';

    export default {
        name: "Contratos",
        components: {
            Layout,
            Title,
            ListaContratos,
            NuevoContrato
        },
        data() {
            return {
                activeTabName: 'Lista contratos',
                tabNames: {
                    tab1: 'Lista contratos',
                    tab2: 'Crear contrato'
                },
            }
        },
        methods: {
            handleTabClick(value){
                this.activeTabName = value;
            },
        },
    }
</script>

<style>

</style>