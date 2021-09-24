<template>

    <div class="switch">   

        <label>{{ texto }}</label>

        <div class="switch-in">
            <input type="checkbox" id="switch" class="switchIn" v-model="estado"/>
            <label for="switch" class="switchLb"  v-on:click="handleState"></label>
        </div>

    </div> 

</template>

<script>
export default {
    props: ["texto"],
    methods: {
        
        handleState(){
            this.$emit('estado')
        }


        // requiere esta funcion fuera del componente
        // changeState(){
        //     this.state = !this.state
        // },
        // state - estado que cambiara el switch

        // actualizar funcion "changeState" de :estado="changeState"

    }
    
}
</script>

<style>

</style>