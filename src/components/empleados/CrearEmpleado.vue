<template>
    <div class="form pad0" v-if="!loading">

        <div class="">
            
            <div class="grid grid-2 mar0">

                <div class="box">
                    <p class="desc-form">Relacion</p>
                    <div class="input relative">

                        <label for="">
                            Usuario
                            <h6 v-if="v$.dataForm.userId.$error">Requerido</h6>
                        </label>
                        




                        <!-- <input type="text" v-model="buscar" @click="handlerSelectUser">

                        <div class="buscarUser" v-if="openSelectUser">
                            <div v-if="!loadingUsers">   
                                <p
                                    v-for="user in filterUsers" 
                                    :key="user.id"
                                    v-on:click="handlerUser(user.id, user.email)"
                                    >{{ user.email }}
                                </p>
                            </div>
                            <div class="center" v-if="loadingUsers">
                                <p>Espere...</p>
                            </div>
                        </div> -->

                        <div v-if="loadingUsers">
                            <input type="text" value="Espere..." readonly="readonly">
                        </div>

                        <select name="" v-if="!loadingUsers" v-model="dataForm.userId">
                            <option 
                                v-for="user in filterUsers" 
                                :key="user.id" 
                                :value="user.id"
                                >{{ user.email }}
                            </option>
                        </select>

                    </div><br>

                    <div class="input">
                        <label for="">
                            Posición
                            <h6 v-if="v$.dataForm.positionId.$error">Requerido</h6>
                        </label>
                        <select name="" id="" v-model="dataForm.positionId">
                            
                            <option :value="2">Empleado</option>
                            <option :value="1">Repartidor</option>                            
                        </select>
                    </div>

                </div>
                
                <ModalUsers :idUser="dataForm.userId" />

            </div>

            <div class="box">

                <p class="desc-form">Contrato de empleado</p>
                <CrearContrato 
                    :getData="getData" 
                    :tab="tab" 
                    :nameTab="nameTab"
                    :importar="true"
                    :metodoUp="enviarTicket"
                    :enviar="true"
                />

            </div>

            <!-- <p class="desc-form">Datos del empleado</p>
            <div class="form-box form-box2">

                <div class="input">
                    <label for="">
                        Contrato
                        <h6 v-if="v$.dataForm.contractsId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.contractsId">
                </div>

                <div class="input">
                    <label for="">
                        Sector
                        <h6 v-if="v$.dataForm.userId.$error">Requerido</h6>
                    </label>
                    <input type="text" v-model="dataForm.userId">
                </div>



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

            </div> -->



            <!-- 
            <div class="box-buttons box-buttons3">
                <div />
                <button class="button button1" v-on:click="postData">
                    Guardar
                    <font-awesome-icon icon="check" />
                </button>
                <div />
            </div> 
            -->
            
            
        </div>
    </div>

    <Loading v-if="loading"/>


</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric } from '@vuelidate/validators';
import CrearContrato from '@/components/contratos/CrearContrato';
import Loading from '@/components/Loading';
import ModalUsers from '@/components/usuarios/ModalUsers';
import crearTicket from '@/components/tickets/crearTicket.js';

export default {
    name: "CrearEmpleado",
    props: ["getData", "url", "tab", "nameTab", "dataUser", "loadingUsers"],

    components:{
        Loading,
        CrearContrato,
        ModalUsers
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
                name: "4444",
                description: "4444",
                curp: "4444",
                socialSecurity: "4444",
                workRegime: "4444",
                hiringRegime: "4444",
                commission: 1,
                salary: 1,
                extern: true,

                // contractsId: 2,
                sectorId: 1,
                positionId: null,
                userId: null
            },

            buscar: "",
            openSelectUser: false,
            emailUser: null
        }
    },
    validations () {
        return {
            dataForm: {
                
                // name: { 
                //     required
                // },
                // description: { 
                //     required 
                // },
                // curp: { 
                //     required 
                // },
                // socialSecurity: { 
                //     required
                // },
                // workRegime: { 
                //     required
                // },
                // hiringRegime: { 
                //     required
                // },
                // commission: { 
                //     required
                // },
                // salary: { 
                //     required
                // },
                // extern: { 
                //     required
                // },
                // sectorId: { 
                //     required
                // },
                // contractsId: { 
                //     required
                // },
                positionId: { 
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

        handlerUser(id, email){
            this.dataForm.userId = id;
            this.buscar = email;

            this.handlerSelectUser();
        },

        handlerSelectUser(){
            this.openSelectUser = !this.openSelectUser
        },

        enviarTicket(idContrato){

            let position = this.dataForm.positionId === 1 ? "R-Delivery-01" : "R-Employee-01"

            // this.postData(idContrato);
            crearTicket(
                `{ idContrato: ${idContrato}@contracts }`, 
                position,
                `1@business`
            );

            // crearTicket(`{
            //     idRef: ${idContrato}@contracts, 
            //     idUser: users@${this.dataForm.userId},
            //     idPosicion: ${this.dataForm.positionId}@posicion
            // }`, 'R-Cedi-02');
            

            this.$router.push({ name: 'tickets' });

            toastSuccess("Contrato y ticket registrado");

        },

        async postData(idContrato){
            
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
                    // revisar en tickets
                    name: this.dataForm.name,
                    description: this.dataForm.description,
                    curp: this.dataForm.curp,
                    socialSecurity: this.dataForm.socialSecurity,
                    workRegime: this.dataForm.workRegime,
                    hiringRegime: this.dataForm.hiringRegime,
                    commission: this.dataForm.commission,
                    salary: this.dataForm.salary,
                    extern: this.dataForm.extern,
                    contractsId: idContrato,
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

                // añadir aqui el ticket de envio
                

            })
            .catch( error => {

                this.loading = false;
                this.error = error;
                this.getData();
                
            })
            .finally( () => {

                // this.dataForm.name = "";
                // this.dataForm.description = "";
                // this.dataForm.curp = "";
                // this.dataForm.socialSecurity = "";
                // this.dataForm.workRegime = "";
                // this.dataForm.hiringRegime = "";
                // this.dataForm.commission = "";
                // this.dataForm.salary = "";
                // this.dataForm.extern = "";
                // this.dataForm.positionId = "";
                // this.dataForm.sectorId = "";

                this.dataForm.contractsId = "";
                this.dataForm.userId = "";

                // toastSuccess("Empleado registrado");

            })

        },


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

}
</script>

<style>

.buscarUser {
    position: absolute;
    padding: 6px 0 6px 0;
    width: 100%;
    z-index: 2;
    background-color: var(--background);
    border-bottom: 1px solid var(--warning);
}

.buscarUser p {
    margin: 0;
    padding: 5px 20px;
    cursor: pointer;
    /* border-bottom: 1px solid var(--lines); */
}


</style>








