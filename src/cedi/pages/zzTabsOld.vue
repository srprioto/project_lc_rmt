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
                    <div 
                        class="items" 
                        v-on:click="handleTabClick(tabNames.tab3)" 
                        :class="{ 'tabs-item-active': activeTabName === tabNames.tab3 }"
                    >
                        <img src="./assets/image/icons/persona.svg" alt="" width="30" height="30">
                        <h6>{{ activeTabName }}</h6>
                    </div>
                </div>

                

            </div>
        </div>

        <!-- <Lista /> -->

        <div class="" v-if="activeTabName === 'Empleados'">
            <Lista />
        </div>

        <div class="" v-if="activeTabName === 'tab 2'">
            <p>texto texto 222</p>
        </div>

        <div class="" v-if="activeTabName === 'tab 3'">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui eaque repudiandae iste dignissimos, amet reprehenderit neque quae, distinctio recusandae non aspernatur sequi itaque, quaerat eligendi doloremque accusantium voluptate quos.</p>
        </div>
        


    </Layout>
</template>

<script>

    import Layout from '@/components/Layout';
    import Lista from '@/cedi/components/clientes/ListaClientes';

    export default {
        name: 'Empleados',
        components: {
            Layout,
            Lista
        },
        data() {
            return {
                activeTabName: 'Empleados',
                tabNames: {
                    tab1: 'Empleados',
                    tab2: 'tab 2',
                    tab3: 'tab 3'
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