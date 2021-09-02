<template>
    <div class="box">

        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="form">

            <div class="form-box form-box1">
                <div>
                    <label class="box-buttons box-buttons3" for="">
                        <div />
                        Codigo del propietario
                        <h6 v-if="v$.dataForm.owner.$error" class="right">
                            Necesita un valor numerico | Requerido
                        </h6>
                    </label>
                    <input 
                        class="center" 
                        v-if="idOwner == null" 
                        type="text" 
                        v-model="dataForm.owner"
                    >
                    <p class="center" v-else>{{ idOwner }}</p>
                </div>
            </div>

            <div class="form-box form-box2">

                <div class="input">
                    <label for="">
                        Nombre
                        <h6 v-if="v$.dataForm.name.$error">Requerido</h6>    
                    </label>
                    <input type="text" v-model="dataForm.name">
                </div>

                <div class="input">
                    <label for="">
                        Nombre publico
                        <h6 v-if="v$.dataForm.namePublic.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.namePublic">
                </div>

                <div class="input">
                    <label for="">
                        Key
                        <h6 v-if="v$.dataForm.key.$error">Min 3 caracteres | Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.key">
                </div>

                 <div class="input">
                    <label for="">
                        RFC
                        <h6 v-if="v$.dataForm.rfc.$error">Min 11 caracteres | Max 13 caracteres | Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.rfc">
                </div>

                <div class="input">
                    <label for="">
                        Regimen fiscal
                        <h6 v-if="v$.dataForm.fiscalRegime.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.fiscalRegime">
                </div>

                <div class="input">
                    <label for="">
                        Giro postal
                        <h6 v-if="v$.dataForm.turn.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.turn">
                </div>


                <!-- <div class="input">
                    <label for="">Estado</label>
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
import { required, minLength, maxLength, numeric } from '@vuelidate/validators'
import Loading from '@/components/Loading'

export default {
    name: "CrearEmpresa",
    props: ["prueba", "getData", "url", "tab", "nameTab", "idOwner", "clearOwner"],

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
                key: null,
                name: null,
                namePublic: null,
                turn: null,
                rfc: null,
                fiscalRegime: null,
                owner: null
            }
        }
    },
    validations () {
        return {
            dataForm: {
                owner: this.idOwner === null ? { required, numeric } : { },
                key: { 
                    required,
                },
                name: { 
                    required 
                },
                namePublic: { 
                    required 
                },
                turn: { 
                    required 
                },
                rfc: { 
                    required,
                    minLength: minLength(11),
                    maxLength: maxLength(13)
                },
                fiscalRegime: { 
                    required 
                },


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
                    key: this.dataForm.key,
                    name: this.dataForm.name,
                    namePublic: this.dataForm.namePublic,
                    turn: this.dataForm.turn,
                    rfc: this.dataForm.rfc,
                    fiscalRegime: this.dataForm.fiscalRegime,
                    owner: this.idOwner === null ? this.dataForm.owner : this.idOwner

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

                this.dataForm.key = "";
                this.dataForm.name = "";
                this.dataForm.namePublic = "";
                this.dataForm.turn = "";
                this.dataForm.rfc = "";
                this.dataForm.fiscalRegime = "";
                this.dataForm.owner = "";
                
                //cambiar a .then
                this.clearOwner();

                //cambiar a .then
                this.$router.push({ 
                    name: 'empresas'
                })


                this.tab(this.nameTab);              

                toastSuccess();

            })
            

        }

    },
    
}
</script>

<style>

</style>
