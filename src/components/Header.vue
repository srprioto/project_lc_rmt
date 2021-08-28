<template>
    <div class="header">
        <div class="logo">
            <h2><router-link to="/">Liceley CEDI</router-link></h2>
        </div>
        <div class="menu-header">
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
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
    background-color: #752e7185;
    display: grid;
    grid-template-columns: 18% 82%;
    height: 70px;
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