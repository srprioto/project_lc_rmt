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
                <router-link :to="{ name: 'empleados' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Empleados
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'paquetes' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Paquetes
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'rutas' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Rutas
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contratos' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Contratos
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'empresas' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Empresas
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'repartidores' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Repartidores
                </router-link>
            </li>


            <li>
                <router-link :to="{ name: 'roles' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Roles
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'tickets' }" >
                    <font-awesome-icon icon="chevron-right" size="lg"/>
                    Tikets
                </router-link>
            </li>

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
    padding: 60px 20px 20px 20px;
    background-color: var(--colorBox2);
    display: inline-block;
}

.menu ul li {
    margin-bottom: 20px;
}

.menu ul li a {
    width: 90%;
    box-sizing: border-box;
    padding: 5px 20px 5px 23px;
    position: relative;
    display: flex;
    color: var(--blanco);
    margin: 0 auto;
    border-left: 2px solid transparent;
    align-items: center;
}

.menu ul li a svg {
    margin-right: 16px;
}

.menu ul li .router-link-active.router-link-exact-active {
    background-color: var(--background);
    border-left: 2px solid var(--lines);
    color: var( --blanco2);
    border-radius: var(--radius);
}

</style>