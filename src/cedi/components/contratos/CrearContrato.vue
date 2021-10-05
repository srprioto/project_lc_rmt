<template>
    <div :class="!importar ? 'box' : ''">

        <div v-if="!importar">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div v-if="!loading" class="form" :class="importar ? 'form2' : ''">
            <div class="form-box form-box2">

                <div class="input">
                    <label for="">
                        Descripción
                        <h6 v-if="v$.dataForm.description.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.description">
                </div>

                <div class="input">
                    <label for="">
                        Autenticación
                        <h6 v-if="v$.dataForm.auth.$error">Requerido</h6>    
                    </label>
                    <input type="text" v-model="dataForm.auth">
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
                        Costo
                        <h6 v-if="v$.dataForm.cost.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.cost">
                </div>

                <div class="input">
                    <label for="">
                        Precio de envio
                        <h6 v-if="v$.dataForm.priceDispatch.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.priceDispatch">
                </div>

                <div class="input">
                    <label for="">
                        Precio por unidad
                        <h6 v-if="v$.dataForm.priceUnity.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.priceUnity">
                </div>

                <div class="input">
                    <label for="">
                        Precio por guía
                        <h6 v-if="v$.dataForm.priceByGuide.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.priceByGuide">
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
                    {{ enviar ? "Enviar" : "Confirmar" }}
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
    props: [
        "prueba", 
        "getData", 
        "tab", 
        "nameTab", 
        "importar",
        "metodoUp",
        "enviar"
    ],

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
                auth: null,
                type: null,
                cost: null,
                priceDispatch: null,
                priceUnity: null,
                priceByGuide: null
            }

        }
    },
    validations () {
        return {
            dataForm: {
                
                description: { 
                    required
                },
                auth: { 
                    required 
                },
                type: { 
                    required 
                },
                cost: { 
                    required,
                    numeric
                },
                priceDispatch: { 
                    required,
                    numeric
                },
                priceUnity: { 
                    required,
                    numeric
                },
                priceByGuide: { 
                    required,
                    numeric
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
                dominio() + "contracts", 
                {

                    description: this.dataForm.description,
                    auth: this.dataForm.auth,
                    type: this.dataForm.type,
                    cost: this.dataForm.cost,
                    priceDispatch: this.dataForm.priceDispatch,
                    priceUnity: this.dataForm.priceUnity,
                    priceByGuide: this.dataForm.priceByGuide
                
                },
                { 
                    headers: headers 
                }
            )
            .then( res => {

                // console.log(res.data.contracts.id);
                
                if (this.metodoUp) {
                    this.metodoUp(res.data.contracts.id);
                }

                this.loading = false;
                this.getData();

                if (!this.importar) {
                    this.tab(this.nameTab);
                    toastSuccess("Contrato registrado");
                }

            })
            .catch( error => {

                this.loading = false;
                this.error = error;
                this.getData();
                
            })
            .finally( () => {

                this.dataForm.description = "";
                this.dataForm.auth = "";
                this.dataForm.type = "";
                this.dataForm.cost = "";
                this.dataForm.priceDispatch = "";
                this.dataForm.priceUnity = "";
                this.dataForm.priceByGuide = "";

            })
        },
    },
    
}
</script>

<style>

</style>
