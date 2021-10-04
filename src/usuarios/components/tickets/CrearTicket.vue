<template>
    <div class="box">

        <h3>Lorem ipsum</h3>

        <div v-if="!loading" class="form">
            <div class="form-box form-box1">

                <div class="input">

                    <label for="">
                        Tipo
                        <!-- <h6 v-if="v$.dataForm.notes.$error">Requerido</h6> -->
                    </label>

                    <select name="" id="" v-model="dataForm.type">
                        <option value="R-Cedi-01">Cedi</option>
                        <option value="R-Cedi-01">Opcion 2</option>
                        <option value="R-Cedi-01">Opcion 3</option>
                    </select>
                    <!-- <input type="text" v-model="dataForm.notes"> -->
                </div>

                <div class="input">
                    <label for="">
                        Descripcion
                        <h6 v-if="v$.dataForm.description.$error">Requerido</h6>
                    </label>
                    <textarea cols="30" rows="10" v-model="dataForm.description"></textarea>
                </div>

            </div>

            <div class="box-buttons box-buttons3">
                <div />
                <button class="button button1" v-on:click="postData">
                    Enviar
                    <font-awesome-icon icon="check" />
                </button>
                <div />
            </div>
            
        </div>
    </div>

    <Loading v-if="loading"/>


</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric } from '@vuelidate/validators'

import Loading from '@/components/Loading'

export default {
    name: "CrearTicket",
    props: ["prueba", "getData", "url", "tab", "nameTab"],

    components:{
        Loading
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            loading: false,
            error: null,
            submited: false,

            dataForm: {
                description: null,
                type: "R-Cedi-01",
                toRef: "1@business"
            }

        }
    },
    validations () {
        return {
            dataForm: {
                
                description: { 
                    required
                }

            }
        }
    },

    created() {
        
    },

    methods: {

        async postData(){
            
            // validaciones
            if (!await this.v$.$validate()) return

            // envio de datos

            const headers = {
                'Content-Type': 'application/json'
            }
            this.loading = true;
            this.error = null;
            this.axios.post( 
                this.url, 
                {
                    description: this.dataForm.description,
                    type: this.dataForm.description,
                    toRef: this.dataForm.description,
                },
                { 
                    headers: headers 
                }
            )
            .then( res => {

                this.loading = false;
                this.getData();

            })
            .catch( error => {

                this.loading = false;
                this.error = error;
                this.getData();
                
            })
            .finally( () => {

                this.dataForm.description

                this.tab(this.nameTab);

                toastSuccess("Ticket enviado correctamente");

            })
            

        }

    },
    
}
</script>

<style>

</style>



Propietario
Nro. de placa
Modelo del vehiculo
Modelo de tabla
Volumen de carga
Medidas de espacio
Tipo
Estado
Imagen
Fin del seguro



ownerRef
enrollment
modelId
modelTable
boxCubic
boxDimention
type
state
imgId
endSecure