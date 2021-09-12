<template>
    <div class="header">
        <div class="logo">
            <router-link to="/home"><h2>Liceley CEDI</h2></router-link>
        </div>
        <div class="menu-header">
            
            <div class="herramientas box-menu">
                <span @click="fullscreen" class="expand">
                    <font-awesome-icon icon="expand" class="pointer" />
                </span>
            </div>

            <div class="otros box-menu">
                
            </div>

            <div class="menu-header-left box-menu">
                <ul>
                    <li class="pointer">item1</li>
                    <li class="pointer">item2</li>
                    <li class="pointer">
                        <router-link :to="{ name: 'login' }" >
                            Salir
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
        methods: {
            fullscreen(){
                alert("ok");
            }
        },
    }
</script>

<style>

.header {
    background-color: var(--colorBox);
    display: grid;
    grid-template-columns: 18% 82%;
    height: 70px;
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

.header .menu-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0px 30px;
}

.header .menu-header .box-menu {
    display: flex;
    align-self: center;
    margin: 0;
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
}

</style>