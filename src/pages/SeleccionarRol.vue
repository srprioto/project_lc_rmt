<template>
    <Header></Header>

    <div class="contentRol">

        <div class="rolBotones">

            <div class="boxRolBotones">
                <div @mouseover="cambiarImg('cedi')">
                    <button @click="accederCEDI" class="">
                        <span>CEDI</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>
                </div>

                <div @mouseover="cambiarImg('usuario')">
                    <button @click="construccion" class="">
                        <span>USUARIO</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>
                </div>

                <div @mouseover="cambiarImg('transporte')">
                    <button @click="construccion" class="">
                        <span>TRANSPORTE</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>
                </div>
                
            </div>

        </div>

        <div class="rolImg">
            <img :src="'./assets/image/imgs/' + nombreImg" alt="">
        </div>

    </div>

</template>

<script>

import Header from '@/components/Header'

export default {

    name: "SeleccionarRol",
    components: {
        Header
    },
    data() {
        return {
            nombreImg: 'repartidor.svg'
        }
    },
    methods:{
        accederCEDI(){
            this.$router.push({ name: 'home' })
        },

        construccion(){
            this.$router.push({ name: 'en-construccion' })
        },

        cambiarImg(nImg){

            if (nImg === 'cedi') {
                
                this.nombreImg = 'repartidor.svg';

            }else if(nImg === 'usuario'){

                this.nombreImg = 'user.svg';

            }else if(nImg === 'transporte'){
                
                this.nombreImg = 'transporte.svg';

            }

        }

    }

}
</script>

<style>

.contentRol {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 80px);
}

.contentRol .rolBotones{
	display: grid;
	place-items: center;
}

/* .contentRol .rolBotones .boxRolBotones {

} */

.contentRol .rolBotones .boxRolBotones button {
    color: #000;
    border: none;
    display: block;
    width: 200px;
    height: 80px;
    background-color: var(--color);
    cursor: pointer;
    margin: 10px 0;
    border-bottom: 2px solid var(--primary);
}

.contentRol .rolBotones .boxRolBotones button svg{
    color: var(--primary);
}

.contentRol .rolBotones .boxRolBotones button span {
    width: 130px;
    display: inline-block;
}

.contentRol .rolImg{
    display: flex;
    justify-content: center;
    align-content: center;
}

.contentRol .rolImg img {
    width: 380px;
}

img{
    width: 400px;
}

</style>