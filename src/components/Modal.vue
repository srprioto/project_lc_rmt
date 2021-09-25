<template>

    <div class="background-modal" v-if="modal">

        <div class="modal">

            <div class="box-modal" v-if="!loading">

                <div class="modal-header">
                    <h2>Alerta!</h2>
                </div>
                <div class="modal-body">
                    <p>
                        Seguro que quieres borrar 
                        <strong v-if="nombreBorrar">{{ nombreBorrar }}</strong>
                        <span v-else>este elemento</span>
                    </p>
                </div>
                <div class="modal-footer">
                    <div class="box-buttons box-buttons2">
                        <span class="button button1" v-on:Click="handlerDelete">
                            Ok
                            <font-awesome-icon icon="check" />
                        </span>
                        <span class="button button3" v-on:click="toggleModal">
                            Cancelar
                            <font-awesome-icon icon="ban" />
                        </span>
                    </div>
                </div>

            </div>

            <Loading v-if="loading" />

        </div>

    </div>
    

</template>

<script>

import Loading from '@/components/Loading'

export default {
    name: "Modal",
    components: {
        Loading
    },
    props: [
        "modal", 
        "toggleModal", 
        "idBorrar", 
        "nombreBorrar",
        "url",
        "getData"
    ],
    data() {
        return {
            loading: false,
            error: null,
            data: undefined,
        }
    },
    methods: {
        handlerDelete(){
            const headers = {
                'Content-Type': 'application/json'
            }

            this.loading = true;
            this.error = null;

            this.axios.delete(
                this.url + "/" + this.idBorrar, {

                    params: this.idBorrar

                }, headers 
            ).then( res => {

                // console.log(res);
                this.loading = false;
                this.getData();
                this.toggleModal();

            }).catch( error => {

                this.loading = false;
                this.error = error;
                console.error(error);

            });
            
        }
    }
}
</script>

<style>
/* .background-modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #0000004f;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* .background-modal .modal {
    background-color: var(--colorBox3);
    text-align: center;
    box-sizing: border-box;
    padding: 30px 25px 40px 25px;
    box-shadow: var(--shadow2);
    border-radius: 10px;
    height: 260px;
    width: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-modal .modal .modal-footer {
    box-sizing: border-box;
    padding: 30px 0 0 0;
} */



</style>