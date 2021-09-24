<template>

    <div class="box">
        <h3>Usuarios registrados</h3>
        <line-chart :data="data"></line-chart>
    </div>

</template>

<script>
export default {

    name: 'EmpleadosRegistrados',
    data() {
        return {
            data: {
                '2021-05-13': 2, 
                '2021-05-14': 5,
                '2021-05-15': 3,
                '2021-05-16': 11,
                '2021-05-17': 10,
            }
        }
    },

}
</script>

<style>

</style>