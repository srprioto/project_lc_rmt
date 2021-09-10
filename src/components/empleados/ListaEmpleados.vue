<template>

    <div class="box">

        <div class="box-info">
            <div class="info-list">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div class="ordenar">
                <div v-on:click="changeSortOrder" class="pointer">

                    <span class="button button3 btnOrder" v-if="sortOrder === -1">
                        Más reciente
                        <font-awesome-icon icon="angle-up" size="lg"/>
                    </span>
                    <span class="button button3 btnOrder" v-else >
                        Más antiguo
                        <font-awesome-icon icon="angle-down" size="lg"/>
                    </span>

                </div>
            </div>
            
            <div class="search">
                <form class="box-search">

                    <input type="text" v-model="buscar" placeholder="Buscar nombre...">
                    
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
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Nro S.S.</th>
                        <th>Posición</th>
                        <th>Ultima actualizacion</th>
                        <th class="table-icons">...</th>
                    </tr>
                </thead>

                <tbody>
                    <!-- iterar datos en base a al resultado de datosFiltrados -->
                    <tr v-for="item in datosFiltrados" :key="item.key">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.socialSecurity }}</td>
                        <td>{{ handlerPosition(item.positionId) }}</td>
                        <td>{{ item.updatedAt }}</td>
                        <td class="table-icons">

                            <!-- enviamos id del dato que vamos a mostrar o editar como parametro -->
                            <router-link 
                                class="icon-action"
                                :to="{ 
                                    name: 'empleados-show', 
                                    params: { 
                                        value: item.id,
                                        url: url 
                                    } 
                                }" 
                            >
                                <font-awesome-icon icon="eye" />
                            </router-link>
                            
                            <!-- elimina dato, recibe el id y nombre del dato que vamos a eliminar -->
                            <!-- tambien se puede enviar solo el id -->
                            <span v-on:click="toggleModal(item.id, item.name)" class="pointer icon-action">
                                <font-awesome-icon icon="trash" />
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
        name:"ListaContratos",
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

            handlerPosition(idPos){
                if (idPos === 1) {
                    return "Repartidor"
                }else if (idPos === 2){
                    return "Empleado"
                }
            }

        },
        computed:{

            datosFiltrados(){
                // comprivacion de orden
                const altOrder = this.sortOrder === 1 ? -1 : 1

                // buscar dato
                return this.data.filter(a => (
                    a.name.toLowerCase().includes(this.buscar.toLowerCase())
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

/* .btnOrder {
    box-sizing: border-box;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
} */

</style>

