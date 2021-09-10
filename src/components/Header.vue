<template>
    <div class="header">
        <div class="logo">
            <router-link to="/home"><h2>Liceley CEDI</h2></router-link>
        </div>
        <div class="menu-header">
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>                
                    <router-link :to="{ name: 'login' }" >
                        Salir
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>

.header {
    background-color: var(--colorBox2);
    display: grid;
    grid-template-columns: 18% 82%;
    height: 70px;
    border-bottom: 1px solid var(--lines2);
}

.header .logo{
    display: grid;
    align-items: center;
    justify-content: center;
}

.header .logo h2{
    margin: 0;
}

.header .menu-header {
    display: grid;
    align-items: center;
    justify-content: flex-end;
    margin-right: 30px;
}

.header .menu-header ul{
    margin: 0;
}

.header .menu-header ul li{
    display: inline-block;
    margin: 0 5px;
}

</style>