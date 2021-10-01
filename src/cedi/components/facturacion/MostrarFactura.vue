<template>
    <Layout>
        
        <!-- intercambio de nombres mostrar y editar -->
        <Title v-if="!editData" :title="!loading ? `Informacion de vehiculo` : 'Espere...'" />
        <Title v-if="editData" :title="!loading ? `Editar informacion de vehiculo` : 'Espere...'" />
            
        <div class="box">

            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div v-if="!loading" class="form">
                <div class="form-box form-box2">

                    <div class="show-edit-m">
                        <label for="">Propietario</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.ownerRef }}</p>
                            <span v-if="editData" >
                                <input type="text" v-model="dataForm.ownerRef">
                                <h6 v-if="v$.dataForm.ownerRef.$error">Min 3 caracteres | Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Nro. de placa</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.enrollment }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.enrollment">
                                <h6 v-if="v$.dataForm.enrollment.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Modelo del vehiculo</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.modelId }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.modelId">
                                <h6 v-if="v$.dataForm.modelId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Modelo de tabla</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.modelTable }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.modelTable">
                                <h6 v-if="v$.dataForm.modelTable.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Volumen de carga</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.boxCubic }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.boxCubic">
                                <h6 v-if="v$.dataForm.boxCubic.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Medidas de espacio</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.boxDimention }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.boxDimention">
                                <h6 v-if="v$.dataForm.boxDimention.$error">Valor numerico | Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Tipo</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.type }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.type">
                                <h6 v-if="v$.dataForm.type.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Estado</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.state }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.state">
                                <h6 v-if="v$.dataForm.state.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Imagen</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.imgId }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.imgId">
                                <h6 v-if="v$.dataForm.imgId.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>

                    <div class="show-edit-m">
                        <label for="">Fin del seguro</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.endSecure }}</p>
                            <span v-if="editData">
                                <input type="text" v-model="dataForm.endSecure">
                                <h6 v-if="v$.dataForm.endSecure.$error">Requerido</h6>
                            </span>
                        </div>
                    </div>




                    <!-- <div class="show-edit">
                        <label for="">Estado</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.status }}</p>
                            <span v-if="editData">
                                <select name="" id="" v-model="dataForm.status">
                                    <option value="true">Activo</option>
                                    <option value="false">Inactivo</option>
                                </select>
                                <h6 v-if="v$.dataForm.status.$error">Requerido</h6>
                            </span>
                        </div>
                    </div> -->

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
                ownerRef: null,
                enrollment: null,
                modelId: null,
                modelTable: null,
                boxCubic: null,
                boxDimention: null,
                type: null,
                state: null,
                imgId: null,
                endSecure: null
            },

            url: this.$route.params.url,
            id: this.$route.params.value,

            editData: false

        }
    },
    validations () {
        return {
            dataForm: {
                ownerRef: { 
                    required
                },
                enrollment: { 
                    required 
                },
                modelId: { 
                    required 
                },
                modelTable: { 
                    required 
                },
                boxCubic: { 
                    required 
                },
                boxDimention: { 
                    required 
                },
                type: { 
                    required
                },
                state: { 
                    required
                },
                imgId: { 
                    required
                },
                endSecure: { 
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
        }

    }

}
</script>

<style>

</style>


