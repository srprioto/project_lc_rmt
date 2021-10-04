<template>

    <ul>
        <li>
            <router-link :to="{ name: 'user-home' }" >
                <div class="icon-menu">
                    <font-awesome-icon icon="house-user" />
                </div>
                Dashboard
            </router-link>
        </li>

        <li>
            <router-link :to="{ name: 'user-tickets' }" >
                <div class="icon-menu">
                    <font-awesome-icon icon="comment" />
                </div>
                Tickets
            </router-link>
        </li>
        
        <li>
            <router-link :to="{ name: 'user-contratos' }" >
                <div class="icon-menu">
                    <font-awesome-icon icon="file-contract" />
                </div>
                Contratos
            </router-link>
        </li>


    </ul>

</template>

<script>

export default {
    name: 'Menu',
    data() {
        return {
            // permAccess: window.localStorage.getItem("profiles")
        }
    },

    created() {
        // console.log(this.tituloPagina);
        
    },

    methods: {
        
    }
}

</script>

<style>



</style>