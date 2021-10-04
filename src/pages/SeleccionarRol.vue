<template>
    <Header></Header>

    <div class="contentRol">

        <div class="rolBotones">

            <div class="boxRolBotones">

                <div 
                    @mouseover="cambiarImg('cedi')" 
                    v-if="
                        permAccess.includes('@profile') &&
                        permAccess.includes('@profile')
                    ">

                    <button @click="accederCEDI" class="">
                        <span>CEDI</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>

                </div>

                <div 
                    @mouseover="cambiarImg('usuario')" 
                    v-if="permAccess.includes('@profile')">

                    <button @click="accederUSER" class="">
                        <span>USUARIO</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>

                </div>

                <div 
                    @mouseover="cambiarImg('transporte')" 
                    v-if="permAccess.includes('@profile')">

                    <button @click="construccion" class="">
                        <span>TRANSPORTE</span>
                        <font-awesome-icon icon="chevron-right" size="lg"/>
                    </button>

                </div>
                
            </div>

        </div>

        <div class="rolImg">
            <img v-show="nombreImg === 'cedi'" src="./assets/image/imgs/repartidor.svg" alt="">
            <img v-show="nombreImg === 'usuario'" src="./assets/image/imgs/user.svg" alt="">
            <img v-show="nombreImg === 'transporte'" src="./assets/image/imgs/transporte.svg" alt="">
            <!-- <img :src="'./assets/image/imgs/' + nombreImg" alt=""> -->
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
            nombreImg: 'cedi',
            permAccess: window.localStorage.getItem("profiles")
        }
    },
    created() {
        
    },
    methods:{
        accederCEDI(){
            // localStorage.setItem('menu', JSON.stringify('menuCedi'))
            localStorage.setItem('menu', 'menuCedi')
            this.$router.push({ name: 'home' })
        },

        accederUSER(){
            localStorage.setItem('menu', 'menuUser')
            this.$router.push({ name: 'user-home' })
        },

        cambiarImg(nImg){

            if (nImg === 'cedi') {
                
                this.nombreImg = 'cedi';

            }else if(nImg === 'usuario'){

                this.nombreImg = 'usuario';

            }else if(nImg === 'transporte'){
                
                this.nombreImg = 'transporte';

            }

        },


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