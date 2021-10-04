<template>
    <div class="header">
        <div class="logo">
            <router-link to="/seleccionar-rol">
                <!-- <h2>LINCELEY</h2> -->
                <img :src="logo" alt="">
            </router-link>
        </div>
        <div class="menu-header">
            
            <div class="herramientas box-menu">
                <h2 class="titulo-pagina mar0">
                    {{ tituloP }}
                </h2>
            </div>

            <div class="otros box-menu">
                <div class="border-icon2 tamano-icon">
                    <span @click="fullscreen" class="expand">
                        <font-awesome-icon icon="expand" class="pointer" />
                    </span>
                </div>
            </div>

            <div class="menu-header-left box-menu">
                <ul>
                    <li class="pointer">
                        <div class="border-icon tamano-icon">
                            <font-awesome-icon icon="comment" />
                        </div>
                    </li>
                    
                    <li class="pointer">
                        <!-- <router-link :to="{ name: 'login' }" > -->
                            <div class="border-icon tamano-icon">
                                <font-awesome-icon icon="user" />
                            </div>
                        <!-- </router-link> -->
                    </li>

                    <li class="pointer">
                        <router-link :to="{ name: 'login' }" >
                            <div class="border-icon tamano-icon">
                                <font-awesome-icon icon="door-open" />
                            </div>
                        </router-link>
                    </li>
                    
                    

                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Header',

        data() {
            return {
                tituloP: ""
            }
        },

        created() {
            this.tituloPagina();
        },

        methods: {
            fullscreen(){
                alert("ok");
            },
            tituloPagina(){
                
                if (window.location.pathname == '/seleccionar-rol') {
                    this.tituloP = "seleccionar rol"
                    return
                }

                const ruta = window.location.pathname.slice(1)
                const len = (ruta.slice(0, ruta.indexOf("/")).length + 2)
                
                const url = window.location.pathname.slice(len);

                if (url.indexOf("/") !== -1) {
                    this.tituloP = url.slice(0, url.indexOf("/"))
                }else{
                    this.tituloP = url
                }

            }
        },

        computed:{
            logo(){
                
                return urlLocal() + "assets/image/imgs/logo-blanco.png"

            }
        }
    }

</script>

<style>

.header {
    background-color: var(--colorBox);
    display: grid;
    grid-template-columns: 18% 82%;
    height: 90px;
    box-shadow: var(--shadow);
}

.header .logo {
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: var(--menu);
}

.header .logo h2{
    margin: 0;
    color: var(--blanco)
}

.header .logo img {
    width: 110px;
}

.header .menu-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0px 30px;
}

.header .menu-header .box-menu {
    display: flex;
    align-self: center;
    margin: 0;
    justify-content: center;
}

.header .menu-header .titulo-pagina {
    text-transform: uppercase;
    padding: 0 30px;
}

.header .menu-header .herramientas{
    justify-content: flex-start;
}

.header .menu-header .menu-header-left{
    justify-content: flex-end;
}

.header .menu-header .menu-header-left ul{
    margin: 0;
}


.header .menu-header ul li{
    display: inline-block;
    margin: 0 5px;
    vertical-align: middle;
}

</style>