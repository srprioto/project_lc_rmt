<template>

    <div class="box">
        <h3>Vehiculos disponibles</h3>
        <pie-chart :data="data"></pie-chart>
    </div>

</template>

<script>
export default {
    name: "VehiculosDisponibles",
    data() {
        return {
            data: [
                ['En uso', 23],
                ['En espera', 16],
                ['Disponibles', 44], 
            ]
        }
    },
}
</script>

<style>

</style>