<template>
    <div class="menu">
        <ul>
            <li>
                <router-link :to="{ name: 'home' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Dashboard
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'empresas' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Empresas
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'roles' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Roles
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'vehiculos' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Vehiculos
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'empleados' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Empleados
                </router-link>
            </li>
            
            <li>
                <router-link :to="{ name: 'contratos' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Contratos
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'tickets' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
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
    name: 'Menu'
}

</script>

<style>

.menu {
    box-sizing: border-box;
    padding: 60px 0px 20px 0px;
    background-color: var(--menu);
    display: inline-block;
}

.menu ul li {
    margin-bottom: 10px;
}

.menu ul li a {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 20px 8px 40px;
    position: relative;
    display: flex;
    color: var(--blanco);
    margin: 0;
    border-left: 2px solid transparent;
    align-items: center;
}

.menu ul li .linea {
    border-bottom: 1px solid var(--blanco);
}

.menu ul li a svg {
    margin-right: 16px;
}

.menu ul li .router-link-active.router-link-exact-active {
    background-color: var(--blancoT);
    color: var( --blanco);
    border-right: 3px solid var(--primary);
}

</style>