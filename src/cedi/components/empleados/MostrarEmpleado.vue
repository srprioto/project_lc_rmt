<template>
    <Layout>
        
        <!-- intercambio de nombres mostrar y editar -->
        <Title v-if="!editData" :title="!loading ? `Informacion del empleado` : 'Espere...'" />
        <Title v-if="editData" :title="!loading ? `Editar informacion del empleado` : 'Espere...'" />
            
        <div class="box">

            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div v-if="!loading" class="form">

                <p class="desc-form">Relacion</p>
                <div class="form-box form-box4">

                    <div class="input">
                        <label for="">Contrato</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.contractsId }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.contractsId">
                                <h6 v-if="v$.dataForm.contractsId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="input">
                        <label for="">Posición</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ handlerPosition(dataForm.positionId) }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.positionId">
                                <h6 v-if="v$.dataForm.positionId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="input">
                        <label for="">Sector</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.sectorId }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.sectorId">
                                <h6 v-if="v$.dataForm.sectorId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="input">
                        <label for="">Usuario</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.userId }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.userId">
                                <h6 v-if="v$.dataForm.userId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                </div>


                <p class="desc-form">Datos del empleado</p>
                <div class="form-box form-box2">

                    <div class="show-edit-m">
                        <label for="">Nombre</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.name }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.name">
                                <h6 v-if="v$.dataForm.name.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Descripción</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.description }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.description">
                                <h6 v-if="v$.dataForm.description.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Curp</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.curp }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.curp">
                                <h6 v-if="v$.dataForm.curp.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Nro. seguro social</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.socialSecurity }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.socialSecurity">
                                <h6 v-if="v$.dataForm.socialSecurity.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Régimen de trabajo</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.workRegime }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.workRegime">
                                <h6 v-if="v$.dataForm.workRegime.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Régimen de contratación</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.hiringRegime }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.hiringRegime">
                                <h6 v-if="v$.dataForm.hiringRegime.$error">Valor numerico | Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Comisión</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.commission }}</p>
                            <span v-if="editData">
                                <input type="number" v-model="dataForm.commission">
                                <h6 v-if="v$.dataForm.commission.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Salario</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.salary }}</p>
                            <span v-if="editData">
                                <input type="number" v-model="dataForm.salary">
                                <h6 v-if="v$.dataForm.salary.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Externo</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.extern }}</p>
                            <span v-if="editData">
                                <select name="" id="" v-model="dataForm.extern">
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                                <h6 v-if="v$.dataForm.extern.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                </div>


                <div class="form-box form-box2">
                    <div class="show-edit-m">
                        <label for="">Fecha de creacion</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.createdAt }}</p>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Ultima actualizacion</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.updatedAt }}</p>
                        </div>
                    </div>
                </div>



                <!-- intercambio de botones mostrar, editar, salir -->
                <div class="box-buttons box-buttons4">
                    <div />
                    <div>
                        <button v-if="!editData" class="button button1" v-on:click="handlerEdit">Editar</button>
                        <button v-if="editData" class="button button2" v-on:click="confirmEdit">Confirmar</button>
                    </div>
                    <div>
                        <button v-if="!editData" class="button button2" v-on:click="regresar">Regresar</button>
                        <button v-if="editData" class="button button3" v-on:click="regresar">Cancelar</button>
                    </div>
                    <div />
                </div>
                
            </div>

            <Loading v-if="loading"/>

        </div>
        
    </Layout>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric } from '@vuelidate/validators'
import Layout from '@/components/Layout';
import Title from '@/components/Title';

import Loading from '@/components/Loading'

export default {
    name: 'MostrarContrato',
    components:{
        Title, Layout, Loading
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            loading: false,
            loadingPut: true,
            error: null,

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
            },

            url: this.$route.params.url,
            id: this.$route.params.value,

            editData: false

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
        this.getValue();
    },
    methods: {
        async getValue(){
                
            this.loading = true;

            try {
                const res = await this.axios({
                    method: 'get',
                    url: this.url + "/" + this.id + "/get?by=id",
                });
                const { data } = await res;

                this.dataForm = data.success
                this.loading = false;

            } catch (error) {
                this.loading = false;
                this.error = error
            }
        },

        async confirmEdit(){

            // confirmar validaciones 
            if (!await this.v$.$validate()) return
            
            // actualizar datos
            const headers = {
                'Content-Type': 'application/json'
            }

            this.loading = true;
            this.error = null;

            this.axios.put(
                this.url + "/" + this.id, 
                this.dataForm,
                { headers: headers }
            )
            .then( res => {

                // console.log(res);
                this.loading = false;
                history.back();

                toastSuccess("Contrato actualizado");

            })
            .catch( error => {
                // console.log( error )
                this.error = error;
                this.loading = false;
            })

        },

        handlerEdit(){
            this.editData = !this.editData
        },

        regresar(){
            history.back();
        },

        handlerPosition(idPos){
            if (idPos === 1) {
                return "Repartidor"
            }else if (idPos === 2){
                return "Empleado"
            }
        }

    }

}
</script>

<style>

</style>


Nombre
Descripción
Curp
Nro. seguro social
Régimen de trabajo
Régimen de contratación
Comisión
Salario
Externo - si no

Contrato
Usuario

Posición
Sector



"name": "name2",
"description": "description2",
"curp": "curp2",
"socialSecurity": "socialSecurity2",
"workRegime": "workRegime2",
"hiringRegime": "hiringRegime2",
"commission": 1,
"salary": 1,
"extern": true,

"contractsId": 1,
"positionId": 1,
"sectorId": 1,
"userId": 1