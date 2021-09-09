<template>
    <div class="box">

        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="form">
            <div class="form-box form-box2">

                <div class="input">
                    <label for="">
                        Propietario
                        <h6 v-if="v$.dataForm.ownerRef.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.ownerRef">
                </div>

                <div class="input">
                    <label for="">
                        Nro. de placa
                        <h6 v-if="v$.dataForm.enrollment.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.enrollment">
                </div>

                <div class="input">
                    <label for="">
                        Modelo del vehiculo
                        <h6 v-if="v$.dataForm.modelId.$error">Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.modelId">
                </div>

                <div class="input">
                    <label for="">
                        Modelo de tabla
                        <h6 v-if="v$.dataForm.modelTable.$error">Requerido</h6>    
                    </label>
                    <input type="number" v-model="dataForm.modelTable">
                </div>

                <div class="input">
                    <label for="">
                        Volumen de carga
                        <h6 v-if="v$.dataForm.boxCubic.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.boxCubic">
                </div>

                <div class="input">
                    <label for="">
                        Medidas de espacio
                        <h6 v-if="v$.dataForm.boxDimention.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.boxDimention">
                </div>

                <div class="input">
                    <label for="">
                        Tipo
                        <h6 v-if="v$.dataForm.type.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.type">
                </div>

                <div class="input">
                    <label for="">
                        Estado
                        <h6 v-if="v$.dataForm.state.$error">Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.state">
                </div>

                <div class="input">
                    <label for="">
                        Imagen
                        <h6 v-if="v$.dataForm.imgId.$error">Requerido</h6>    
                    </label>
                    <input type="number" v-model="dataForm.imgId">
                </div>

                <div class="input">
                    <label for="">
                        Fin del seguro
                        <h6 v-if="v$.dataForm.endSecure.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.endSecure">
                </div>



                <!-- <div class="input">
                    <label for="">
                        Estado
                        <h6 v-if="v$.dataForm.status.$error">Requerido</h6>
                    </label>
                    <select name="" id="" v-model="dataForm.status">
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                    </select>
                </div> -->

            </div>



            <div class="box-buttons box-buttons3">
                <div />
                <button class="button button1" v-on:click="postData">
                    Guardar
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
    name: "CrearContrato",
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
                state: null,
                modelTable: null,
                type: null,
                type: null,
                boxCubic: null,
                boxDimention: null,
                endSecure: "2021-09-08T02:34:47.802Z",
                ownerRef: null,
                modelId: null,
                imgId: null
            }

        }
    },
    validations () {
        return {
            dataForm: {
                
                state: { 
                    required
                },
                modelTable: { 
                    required 
                },
                enrollment: { 
                    required 
                },
                type: { 
                    required
                },
                boxCubic: { 
                    required
                },
                boxDimention: { 
                    required
                },
                endSecure: { 
                    required
                },
                ownerRef: { 
                    required
                },
                modelId: { 
                    required
                },
                imgId: { 
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

                    state: this.dataForm.state,
                    modelTable: this.dataForm.modelTable,
                    enrollment: this.dataForm.enrollment,
                    type: this.dataForm.type,
                    boxCubic: this.dataForm.boxCubic,
                    boxDimention: this.dataForm.boxDimention,
                    endSecure: this.dataForm.endSecure,
                    ownerRef: this.dataForm.ownerRef,
                    modelId: this.dataForm.modelId,
                    imgId: this.dataForm.imgId
                
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

                this.dataForm.state = "";
                this.dataForm.modelTable = "";
                this.dataForm.enrollment = "";
                this.dataForm.type = "";
                this.dataForm.boxCubic = "";
                this.dataForm.boxDimention = "";
                this.dataForm.endSecure = "";
                this.dataForm.ownerRef = "";
                this.dataForm.modelId = "";
                this.dataForm.imgId = "";

                this.tab(this.nameTab);

                toastSuccess("Contrato registrado");

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