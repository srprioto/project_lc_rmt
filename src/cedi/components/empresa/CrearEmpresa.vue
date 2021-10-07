<template>

    <div class="form pad0" v-if="!loading" >

        <div class="box">

            <div class="form-box form-box1 mar0">
                <div>
                    <label class="box-buttons box-buttons3" for="">
                        <div />
                        Propietario de empresa
                        <!-- <h6 v-if="v$.dataForm.owner.$error" class="right">
                            Necesita un valor numerico | Requerido
                        </h6> -->
                    </label>

                    <div v-if="loadingUsers">
                        <input type="text" value="Espere..." readonly="readonly">
                    </div>

                    <select name="" v-if="!loadingUsers" v-model="dataForm.owner">
                        <option 
                            v-for="user in dataUser" 
                            :key="user.id" 
                            :value="user.id"
                            >{{ user.email }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- <div class="form-box form-box1 mar0">
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
                    <h2 class="center mar0" v-else>{{ idOwner }}</h2>
                </div>
            </div> -->

        </div>

        <div class="box">

            <h3>Razón social</h3>

            <div class="form-box form-box2">

                <div class="input">
                    <label for="">
                        Nombre de razón social
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
                    <!-- <input type="text" v-model="dataForm.fiscalRegime"> -->
                    <select name="" id="" v-model="dataForm.fiscalRegime">

                        <option :value="rf.c_RegimenFiscal" v-for="rf in regimenFiscal" :key="rf.c_RegimenFiscal">
                            {{ rf.c_RegimenFiscal }} - {{ rf.descripcion }} - {{ rf.f_Inicio }}
                        </option>
                        
                    </select>
                </div>

                <div class="input">
                    <label for="">
                        Codigo postal
                        <h6 v-if="v$.dataForm.turn.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.turn">
                </div>

            </div>
            
        </div>

        <div class="box">

            <h3 v-if="!daExped">Domicilio fiscal</h3>
            <h3 v-else>Datos de expedición</h3>

            <div class="form-box form-box2 grid-row3">

                <div class="input">
                    <label for="">
                        Calle
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Colonia
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Población
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Referencia
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <Switch v-on:estado="alternarDaExped" :texto="daExpedDesc" />
                </div>

                <div class="input" v-if="daExped">
                    <label for="">
                        Lugar de expedición
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

            </div>

            <div class="form-box form-box4">

                <div class="input">
                    <label for="">
                        Numero Ext
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Numero Int
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Entre calle
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Y calle
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        CP
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        País
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Estado
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
                </div>

                <div class="input">
                    <label for="">
                        Municipio
                        <!-- <h6 v-if="v$.dataForm.name1.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.name1">
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
import { required, minLength, maxLength, numeric } from '@vuelidate/validators'

import regimenFiscal from '@/cedi/components/empresa/regimenFiscal.js'
// import crearTicket from '@/cedi/components/tickets/crearTicket.js';

import Loading from '@/components/Loading'
import Switch from '@/components/mini/Switch';

export default {
    name: "CrearEmpresa",
    props: ["prueba", "getData", "url", "tab", "nameTab", "idOwner", "clearOwner", "dataUser", "loadingUsers"],

    components:{
        Loading,
        Switch
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
            },

            daExped: false,
            daExpedDesc: 'Alternar',

            regimenFiscal: regimenFiscal,

            // buscar: "",
            // openSelectUser: false,
            // emailUser: null
            
        }
    },
    validations () {
        return {
            dataForm: {
                // owner: this.idOwner === null ? { required, numeric } : { },
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

        alternarDaExped(){
            this.daExped = !this.daExped
        },

        async postData(){
            
            // validaciones
            if (!await this.v$.$validate()) return

            // envio de datos

            const headers = {
                'Content-Type': 'application/json'
            }
            this.loading = true;
            this.error = null;

            // crearTicket(
            //     `1@business`, 
            //     'R-Cedi-01',
            //     `1@business`
            // );

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

                // console.log(res.tickets.id);

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

                toastSuccess("Empresa registrada");

            })
            

        },

        computed:{
            filterUsers(){
                // comprivacion de orden
                // const altOrder = this.sortOrder === 1 ? -1 : 1

                // buscar dato
                return this.dataUser.filter(a => (
                    a.email.toLowerCase().includes(this.buscar.toLowerCase())
                ))
                // ordenar datos en base al id
                // .sort((a, b) => {
                //     if (parseInt(a.id) > parseInt(b.id)) {
                //         return this.sortOrder
                //     }
                //     return altOrder;
                // })

            },
        }

    },
    
}
</script>

<style>

</style>
