<template>

    <h3>Envios semanales</h3>
    <column-chart :data="data"></column-chart>

</template>

<script>
export default {
    name: "ReporteSemana",
    data() {
        return {
            data: [
                ['Lunes', 32], 
                ['Martes', 46], 
                ['Miercoles', 28],
                ['Juevez', 10],
                ['Viernes', 15],
                ['Sabado', 50],
                ['Domingo', 5],
            ]
        }
    },
}
</script>

<style>

</style>