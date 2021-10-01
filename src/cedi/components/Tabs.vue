<template>

    <div class="box-title">
        <div class="box-grid">
            
            <div class="title-page">
                <h2>{{ activeTabName }}</h2>
            </div>

            <div class="tabs">

                <div 
                    v-for="comp in comps" :key="comp.name"
                    class="items" 
                    v-on:click="handleTabClick(comp.name)" 
                    :class="{ 'tabs-item-active': activeTabName === comp.name }"
                >
                    <img src="./assets/image/icons/persona.svg" alt="" wnameth="30" height="30">
                    <h6>{{ activeTabName }}</h6>
                </div>
            </div>
        </div>
    </div>

    <div v-for="comp in comps" :key="comp.id">
        <div class="" v-if="activeTabName === comp.name">
            <component :is="comp.comp"></component>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Tabs',
    props: [
        "comps"
    ],
    data() {
        return {
            activeTabName: this.comps[0].name
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