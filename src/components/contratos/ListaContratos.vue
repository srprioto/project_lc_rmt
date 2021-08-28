<template>
    <div class="box">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="table-list">

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre publico</th>
                        <th>Turno</th>
                        <th>RFC</th>
                        <th>Estado</th>
                        <th>Ultima actualizacion</th>
                        <th class="table-icons">...</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in data" :key="item.key">
                        <td>{{ item.id }}</td>
                        <td>{{ item.namePublic }}</td>
                        <td>{{ item.turn }}</td>
                        <td>{{ item.rfc }}</td>
                        <td>{{ item.status }}</td>
                        <td>{{ item.updatedAt }}</td>
                        <td class="table-icons">
                            <img src="./assets/image/icons/show.svg" alt="">
                            <img src="./assets/image/icons/editar.svg" alt="">
                            <img src="./assets/image/icons/eliminar.svg" alt="">
                        </td>
                    </tr>
                </tbody>


            </table>
        </div>
    </div>

    <Loading v-if="loading"/>
</template>

<script>
import Loading from '@/components/Loading'

export default {
    name:"ListaContratos",
    props: ["loading", "data"],
    components: {
        Loading
    }
}
</script>

<style>

</style>