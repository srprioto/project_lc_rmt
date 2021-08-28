<template>

    <div class="box">

        <div class="box-info">
            <div class="info-list">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div class="ordenar">
                <div v-on:click="changeSortOrder" class="pointer">

                    <span class="btnOrder" v-if="sortOrder === -1">
                        Más reciente
                        <font-awesome-icon icon="sort-up" />
                    </span>
                    <span class="btnOrder" v-else >
                        Más antiguo
                        <font-awesome-icon icon="sort-down" />
                    </span>

                </div>
            </div>
            

            <div class="search">
                <form class="box-search">

                    <input type="text" v-model="buscar" placeholder="Buscar ...">
                    
                    <button class="buttonN pointer">
                        <font-awesome-icon icon="genderless" size="2x"/>
                    </button>

                </form>
            </div>
        </div>

        <div v-if="!loading" class="table-list">

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre publico</th>
                        <th>Giro postal</th>
                        <th>RFC</th>
                        <th>Estado</th>
                        <th>Ultima actualizacion</th>
                        <th class="table-icons">...</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in datosFiltrados" :key="item.key">
                        <td>{{ item.id }}</td>
                        <td>{{ item.namePublic }}</td>
                        <td>{{ item.turn }}</td>
                        <td>{{ item.rfc }}</td>
                        <td>{{ item.status }}</td>
                        <td>{{ item.updatedAt }}</td>
                        <td class="table-icons">
                            
                            <!-- <img src="./assets/image/icons/editar.svg" alt=""> -->

                            <router-link 
                                :to="{ 
                                    name: 'empresas-show', 
                                    params: { 
                                        value: item.id,
                                        url: url 
                                    } 
                                }" 
                            >
                                <img src="./assets/image/icons/show.svg" alt="">
                            </router-link>
                            
                            <span v-on:click="toggleModal(item.id, item.name)" class="pointer">
                                <img src="./assets/image/icons/eliminar.svg" alt="">
                            </span>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>

    <Loading v-if="loading"/>

    <Modal 
        :modal="modal" 
        :toggleModal="toggleModal"
        :url="url"
        :idBorrar="idBorrar" 
        :nombreBorrar="nameBorrar"
        :getData="getData"
    />

</template>

<script>

    import Loading from '@/components/Loading'
    import Modal from '@/components/Modal'

    export default {
        name:"ListaEmpresas",
        props: ["data", "loading", "url", "getData"],
        components: {
            Loading, Modal
        },
        data() {
            return {
                modal: false,
                idBorrar: undefined,
                nameBorrar: "",
                buscar: "",
                sortOrder: -1
            }
        },
        created() {
            this.getData();
        },
        methods: {
            toggleModal(idBorrar, nameBorrar){
                this.modal = !this.modal
                
                this.idBorrar = this.modal ? idBorrar : ""
                this.nameBorrar = this.modal ? nameBorrar : ""
            },
            changeSortOrder(){
                this.sortOrder = this.sortOrder === 1 ? -1 : 1
            }
        },
        computed:{
            datosFiltrados(){
                const altOrder = this.sortOrder === 1 ? -1 : 1

                return this.data.filter(a => (
                    a.name.toLowerCase().includes(this.buscar.toLowerCase()) ||
                    a.namePublic.toLowerCase().includes(this.buscar.toLowerCase())
                ))
                .sort((a, b) => {
                    if (parseInt(a.id) > parseInt(b.id)) {
                        return this.sortOrder
                    }
                    return altOrder;
                })

            },
        },
    }
</script>

<style>

.box-info {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr 1fr;
}

.search {
display: flex;
justify-content: flex-end;
align-items: center;
}

.search .box-search {
    position: relative;
    display: flex;
}

.search .box-search button.buttonN.pointer {
    margin: 0 0 0 10px;
}

.box-load{
    width: 100%;
}

.btnOrder {
    box-sizing: border-box;
    padding: 0 60px;
    display: flex;
    justify-content: space-evenly;
}

</style>

