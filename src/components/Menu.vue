<template>
    <div class="menu">
        <ul>
            <li>
                <router-link :to="{ name: 'home' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="house-user" />
                    </div>
                    Dashboard
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'empresas' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="building" />
                    </div>
                    Empresas
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'roles' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="users" />
                    </div>
                    Roles
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'vehiculos' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="truck-moving" />
                    </div>
                    Vehiculos
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'empleados' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="restroom" />
                    </div>
                    Empleados
                </router-link>
            </li>
            
            <li>
                <router-link :to="{ name: 'contratos' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="file-contract" />
                    </div>
                    Contratos
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'tickets' }" >
                    <div class="icon-menu">
                        <font-awesome-icon icon="comment" />
                    </div>
                    Tickets
                </router-link>
            </li>

            <!-- <li><div class="linea" /></li> -->



            <!-- <li>
                <router-link :to="{ name: 'repartidores' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Repartidores
                </router-link>
            </li>  -->
            
            <!-- <li>
                <router-link :to="{ name: 'paquetes' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Paquetes
                </router-link>
            </li> -->

        </ul>
    </div>
</template>

<script>

export default {
    name: 'Menu',

    created() {
        // console.log(this.tituloPagina);
        
    },

    methods: {
        
    }
}

</script>

<style>



</style>