<template>
    <div class="box">

        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="form">

            <p class="desc-form">Relacion</p>
            <div class="form-box form-box4">

                <div class="input">
                    <label for="">
                        Usuario
                        <h6 v-if="v$.dataForm.positionId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.positionId">
                </div>

                <div class="input">
                    <label for="">
                        Contrato
                        <h6 v-if="v$.dataForm.contractsId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.contractsId">
                </div>

                <div class="input">
                    <label for="">
                        Posición
                        <h6 v-if="v$.dataForm.sectorId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.sectorId">
                </div>

                <div class="input">
                    <label for="">
                        Sector
                        <h6 v-if="v$.dataForm.userId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.userId">
                </div>

            </div>

            <p class="desc-form">Datos del empleado</p>
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
                        Descripción
                        <h6 v-if="v$.dataForm.description.$error">Requerido</h6>    
                    </label>
                    <input type="text" v-model="dataForm.description">
                </div>

                <div class="input">
                    <label for="">
                        Curp
                        <h6 v-if="v$.dataForm.curp.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.curp">
                </div>

                 <div class="input">
                    <label for="">
                        Nro. seguro social
                        <h6 v-if="v$.dataForm.socialSecurity.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.socialSecurity">
                </div>

                <div class="input">
                    <label for="">
                        Régimen de trabajo
                        <h6 v-if="v$.dataForm.workRegime.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.workRegime">
                </div>

                <div class="input">
                    <label for="">
                        Régimen de contratación
                        <h6 v-if="v$.dataForm.hiringRegime.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.hiringRegime">
                </div>

                <div class="input">
                    <label for="">
                        Comisión
                        <h6 v-if="v$.dataForm.commission.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.commission">
                </div>

                <div class="input">
                    <label for="">
                        Salario
                        <h6 v-if="v$.dataForm.salary.$error">Valor numerico | Requerido</h6>
                    </label>
                    <input type="number" v-model="dataForm.salary">
                </div>

                <div class="input">
                    <label for="">
                        Externo
                        <h6 v-if="v$.dataForm.extern.$error">Requerido</h6>
                    </label>
                    <select name="" id="" v-model="dataForm.extern">
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                </div>

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
                description: null,
                curp: null,
                socialSecurity: null,
                workRegime: null,
                hiringRegime: null,
                commission: null,
                salary: null,
                extern: null,
                contractsId: null,
                positionId: null,
                sectorId: null,
                userId: null
            }

        }
    },
    validations () {
        return {
            dataForm: {
                
                name: { 
                    required
                },
                description: { 
                    required 
                },
                curp: { 
                    required 
                },
                socialSecurity: { 
                    required
                },
                workRegime: { 
                    required
                },
                hiringRegime: { 
                    required
                },
                commission: { 
                    required
                },
                salary: { 
                    required
                },
                extern: { 
                    required
                },
                contractsId: { 
                    required
                },
                positionId: { 
                    required
                },
                sectorId: { 
                    required
                },
                userId: { 
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

                    name: this.dataForm.name,
                    description: this.dataForm.description,
                    curp: this.dataForm.curp,
                    socialSecurity: this.dataForm.socialSecurity,
                    workRegime: this.dataForm.workRegime,
                    hiringRegime: this.dataForm.hiringRegime,
                    commission: this.dataForm.commission,
                    salary: this.dataForm.salary,
                    extern: this.dataForm.extern,
                    contractsId: this.dataForm.contractsId,
                    positionId: this.dataForm.positionId,
                    sectorId: this.dataForm.sectorId,
                    userId: this.dataForm.userId
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
                this.dataForm.description = "";
                this.dataForm.curp = "";
                this.dataForm.socialSecurity = "";
                this.dataForm.workRegime = "";
                this.dataForm.hiringRegime = "";
                this.dataForm.commission = "";
                this.dataForm.salary = "";
                this.dataForm.extern = "";
                this.dataForm.contractsId = "";
                this.dataForm.positionId = "";
                this.dataForm.sectorId = "";
                this.dataForm.userId = "";

                this.tab(this.nameTab);

                toastSuccess("Contrato registrado");

            })
            

        }

    },
    
}
</script>

<style>

</style>








