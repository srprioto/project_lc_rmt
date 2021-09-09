<template>

    <div class="background-modal" v-if="modalDetails">
        <div class="modalDetails">
            <div class="box-modal" >
                <div v-if="!loadingUser && !loadingUpdate">

                    <div class="modal-header">
                        <h2>Solicitud de contrato Cedi</h2>
                    </div>

                    <div class="modal-body">
                        <div class="form">
                            <div class="box-buttons box-buttons3">

                                <div class="datos-ticket datos-user-ticket">
                                    <p>
                                        De: 
                                        <strong>{{ dataUser.email }}</strong>
                                    </p>
                                    <font-awesome-icon class="icon-message" icon="comment" />
                                    <div class="info-usuario box">
                                        <h3>Informacion del Usuario</h3>
                                        <table>
                                            <tr>
                                                <td><strong>Correo</strong></td>
                                                <td>{{ dataUser.email }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Roles</strong></td>
                                                <td>{{ dataUser.roleId }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Perfil</strong></td>
                                                <td>{{ dataUser.profileId }}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Lista Perfil</strong></td>
                                                <td>{{ dataUser.profileList }}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                                <div class="datos-ticket">
                                    <p>
                                        Tipo de Ticket: 
                                        <strong>{{ dataItem.type }}</strong>
                                    </p>
                                </div>
                                <div class="datos-ticket">
                                    <p>
                                        Fecha: 
                                        <strong>{{ dataItem.createdAt }}</strong>
                                    </p>
                                </div>

                            </div>

                            <div class="descripcion">
                                <p><strong>Descripcion del Ticket: </strong></p>
                                <p>{{ dataItem.description }}</p>
                            </div>

                            <div class="form-box form-box1">
                                <div class="input">
                                    <label for="">Feedback</label>
                                    <input type="text" v-model="dataItem.feedback">
                                </div>
                                <div class="input">
                                    <label for="">Nota</label>
                                    <input type="text" v-model="dataItem.notes">
                                </div>
                            </div>


                            <!-- <div class="form-box form-box2">

                                <div class="input">
                                    <label for="">Estado</label>
                                    <select name="" id="" v-model="dataTicket.success">
                                        <option value="true">Activo</option>
                                        <option value="false">Inactivo</option>
                                    </select>
                                </div>

                                <div class="input">
                                    <label for="">Negociación</label>
                                    <select name="" id="" v-model="dataTicket.negotiating">
                                        <option value="true">Activo</option>
                                        <option value="false">Inactivo</option>
                                    </select>
                                </div>

                            </div> -->

                        </div>

                    </div>
                    <div class="modal-footer">
                        <div class="box-buttons box-buttons4">

                            <div/>
                            <button @click="actualizarTicket(dataItem.id)" class="button button1">
                                Ok
                                <font-awesome-icon icon="check" />
                            </button>
                            <span class="button button3" v-on:click="toggleModalDetails">
                                Cancelar
                                <font-awesome-icon icon="ban" />
                            </span>
                            <div/>

                        </div>
                    </div>
                </div>

                <Loading v-if="loadingUser || loadingUpdate" />

            </div>
        </div>
    </div>
</template>

<script>

import Loading from '@/components/Loading'

export default {
    name: "ModalTickets",
    components: {
        Loading
    },
    props: [
        "modalDetails", 
        "toggleModalDetails", 
        "dataItem", 
        "idUsuario",
        "url",
        "dataUser",
        "loadingUser"
        // "getData"
    ],
    data() {
        return {
            loadingUpdate: false,
            error: null,
            data: undefined,
            // dataTicket: {
            //     notes: "",
            //     feedback: "",
            //     success: "",
            //     negotiating: "",
            //     type: null
            // },

        }
    },
    created() {

        // console.log(this.url);

    },
    methods: {

        urlss(idTicket){
            console.log(url + "/" + idTicket);
        },


        actualizarTicket(idTicket){
            const headers = {
                'Content-Type': 'application/json'
            }

            this.loadingUpdate = true;
            this.error = null;

            this.axios.put(
                this.url + "/" + idTicket, 
                this.dataItem,
                { headers: headers }
            )
            .then( res => {

                // console.log(res);
                this.loadingUpdate = false;
                // history.back();
                toastSuccess("Ticket actualizado");

            })
            .catch( error => {
                // console.log( error )
                this.error = error;
                this.loadingUpdate = false;
            })
            .finally(() => { 
                // this.toggleModalDetails();
            })
        },
    }
}
</script>

<style>
.background-modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #0000004f;

    display: flex;
    justify-content: center;
    align-items: center;
}

.background-modal .modalDetails {
    background-color: var(--colorModal);
    box-sizing: border-box;
    padding: 30px 25px 40px 25px;
    box-shadow: var(--shadow2);
    border-radius: 10px;
    max-width: 70%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.background-modal .modalDetails .box-modal{
    min-width: 900px;
}

.background-modal .modalDetails .modal-footer {
    box-sizing: border-box;
    padding: 0 0 0 0;
}

.background-modal .modalDetails .form .form-box {
    margin-bottom: 15px;
}

.background-modal .modalDetails .descripcion {
    text-align: left;
    margin-bottom: 30px;
}

.background-modal .modalDetails .icon-message {
    margin-left: 15px;
}

.background-modal .modalDetails .box-modal .datos-ticket {
    margin-bottom: 25px;
}

.background-modal .modalDetails .box-modal .datos-user-ticket{
    cursor: pointer;
}

.background-modal .modalDetails .box-modal .datos-user-ticket .info-usuario {
    position: absolute;
    transition: .2s;
    width: auto;
    height: auto;
    z-index: 4;
    border: 1px solid var(--warning);
    transform: scale(0);
    opacity: 0;
    position: absolute;
    margin: auto;
    cursor: auto;
}

.background-modal .modalDetails .box-modal .datos-user-ticket .info-usuario h3 {
    text-align: center;
    margin-bottom: 15px;
}

.background-modal .modalDetails .box-modal .datos-user-ticket .info-usuario table tr td {
    text-align: left;
    margin-bottom: 9px;
    padding: 5px 7px;
}

.background-modal .modalDetails .box-modal .datos-user-ticket:hover .info-usuario{
    transition: .2s;
    transform: scale(1);
    opacity: 1;
}


.background-modal .modalDetails .box-modal .datos-ticket p{
    margin: 0 0 0 0;
    display: inline-block;
}


</style>


