<template>

    <div class="box">

        <div class="box-info">
            <div class="info-list">
                <h3>Lorem ipsum</h3>
                <p>
                    Crear un ticket, 
                    <a class="link" href="https://liceley.herokuapp.com/view/menu" target="_blank" rel="noopener noreferrer">click aqui</a>
                </p>
            </div>

            <div class="ordenar">
                <div v-on:click="changeSortOrder" class="pointer">

                    <span class="button button1 btnOrder" v-if="sortOrder === -1">
                        Más reciente
                        <font-awesome-icon icon="angle-up" size="lg"/>
                    </span>
                    <span class="button button1 btnOrder" v-else >
                        Más antiguo
                        <font-awesome-icon icon="angle-down" size="lg"/>
                    </span>

                </div>
            </div>
            
            <div class="search">
                <form class="box-search">

                    <input type="text" v-model="buscar" placeholder="Buscar ticket...">
                    
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
                        <th>Descripción</th>
                        <!-- <th>Usuario</th> -->
                        <!-- <th>Exito</th>
                        <th>Tipo</th> -->
                        <th>Ultima actualizacion</th>
                        <th class="table-icons">...</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- iterar datos en base a al resultado de datosFiltrados -->
                    <tr v-for="item in datosFiltrados" :key="item.key">
                        <td>{{ item.id }}</td>
                        <td class="item-desc">{{ item.description }}</td>
                        <!-- <td>{{ item.userId }}</td> -->
                        <!-- <td>{{ item.success }}</td>
                        <td>{{ item.type }}</td> -->
                        <td>{{ item.updatedAt }}</td>
                        <td class="table-icons">

                            <!-- enviamos id del dato que vamos a mostrar o editar como parametro -->
                            <span v-on:click="toggleModalDetails(item)" class="pointer icon-action">
                                <font-awesome-icon icon="eye" class="primary"/>
                            </span>
                            
                            <!-- elimina dato, recibe el id y nombre del dato que vamos a eliminar -->
                            <!-- tambien se puede enviar solo el id -->
                            <span v-on:click="toggleModal(item.id)" class="pointer icon-action">
                                <font-awesome-icon icon="trash" class="danger"/>
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

    <ModalTickets 
        :modalDetails="modalDetails"
        :toggleModalDetails="toggleModalDetails"
        :dataItem="dataItem"
        :url="url"
        :dataUser="dataUser"
        :loadingUser="loadingUser"
    />


</template>

<script>

    import Loading from '@/components/Loading'
    import Modal from '@/components/Modal'
    import ModalTickets from '@/components/tickets/ModalTickets'

    export default {
        name:"ListaTickets",
        props: ["data", "loading", "url", "getData"],
        components: {
            Loading, Modal, ModalTickets
        },
        data() {
            return {

                loadingUser: false,
                error: null,

                modal: false,
                idBorrar: undefined,
                nameBorrar: "",
                buscar: "",
                sortOrder: -1,

                modalDetails: false,
                dataItem: { },

                dataUser: { }

            }
        },
        created() {
            this.getData();
            // this.getUser();
        },
        methods: {
            
            // abrir y cerrar modal de borrado
            toggleModal(idBorrar, nameBorrar = null){
                this.modal = !this.modal
                
                this.idBorrar = this.modal ? idBorrar : ""
                this.nameBorrar = this.modal ? nameBorrar : ""
            },

            //cambiar orden de listas
            changeSortOrder(){
                this.sortOrder = this.sortOrder === 1 ? -1 : 1
            },

            // abrir y cerrar modal de detalles
            toggleModalDetails(item){
                this.modalDetails = !this.modalDetails
                this.dataItem = this.modalDetails ? item : {}

                this.loadingUser = true;

                this.userData();

            },

            async userData(){
                // buscar datos del usuario por id
                try {
                    const res = await this.axios({
                        method: 'get',
                        url: dominio() + "users/" + this.dataItem.userId + "/get?by=id"
                    });
                    const { data } = await res;

                    this.dataUser = this.modalDetails ? data.success : {}

                    this.loadingUser = false;

                } catch (error) {
                    this.loadingUser = false;
                    this.error = error
                }
            }

        },
        computed:{
            datosFiltrados(){
                // comprivacion de orden
                const altOrder = this.sortOrder === 1 ? -1 : 1

                // buscar dato
                return this.data.filter(a => (
                    a.description.toLowerCase().includes(this.buscar.toLowerCase())
                ))
                // ordenar datos en base al id
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

.item-desc{
    width: 600px;
}

</style>


