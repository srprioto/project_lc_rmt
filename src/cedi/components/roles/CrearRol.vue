<template>
    <div class="box">

        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="form">
            <div class="form-box form-box1">

                <div class="input">
                    <label for="">
                        Nombre
                        <h6 v-if="v$.dataForm.name.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.name">
                </div>

            </div>

            <p>Permisos</p>

            <div class="grid grid-4 form-box">

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

                <article class="check">
                    <input type="checkbox"/>
                    <div class="desc-check">
                        <span>
                            Permiso para ...
                        </span>
                    </div>
                </article>

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
                name: null,

            }

        }
    },
    validations () {
        return {
            dataForm: {
                
                name: { 
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

                    name: this.dataForm.name,
                    // auth: this.dataForm.auth,
                    // type: this.dataForm.type,
                    // cost: this.dataForm.cost,
                    // priceDispatch: this.dataForm.priceDispatch,
                    // priceUnity: this.dataForm.priceUnity,
                    // priceByGuide: this.dataForm.priceByGuide
                
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

                this.dataForm.name = "";
                // this.dataForm.auth = "";
                // this.dataForm.type = "";
                // this.dataForm.cost = "";
                // this.dataForm.priceDispatch = "";
                // this.dataForm.priceUnity = "";
                // this.dataForm.priceByGuide = "";

                this.tab(this.nameTab);

                toastSuccess("Contrato registrado");

            })
            

        }

    },
    
}
</script>

<style>

</style>



{
  "success": "contrato creado",
  "contracts": {
    "id": 4,
    "status": true,
    "description": "nuevo dato 3",
    "auth": "nuevo dato 3",
    "type": "nuevo dato 3",
    "cost": 1,
    "priceDispatch": 1,
    "priceUnity": 1,
    "priceByGuide": 1,
    "dateCheck": "2021-08-30T09:25:31.915Z",
    "updatedAt": "2021-08-30T09:25:31.915Z",
    "createdAt": "2021-08-30T09:25:31.915Z"
  }
}






