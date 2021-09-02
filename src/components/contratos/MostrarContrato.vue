<template>
    <Layout>
        
        <!-- intercambio de nombres mostrar y editar -->
        <Title v-if="!editData" :title="!loading ? `Informacion de contrato` : 'Espere...'" />
        <Title v-if="editData" :title="!loading ? `Editar estado del contrato` : 'Espere...'" />
            
        <div class="box">

            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div v-if="!loading" class="form">
                <div class="form-box form-box1">

                    <div class="show-edit">
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
                    </div>


                    <div class="show-edit">
                        <label for="">Descripción</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.description }}</p>
                            <!-- <span v-if="editData" >
                                <input type="text" v-model="dataForm.description">
                                <h6 v-if="v$.dataForm.description.$error">Min 3 caracteres | Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Autenticación</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.auth }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.auth">
                                <h6 v-if="v$.dataForm.auth.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Fecha de verificacion</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.dateCheck }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.dateCheck">
                                <h6 v-if="v$.dataForm.dateCheck.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Tipo</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.type }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.type">
                                <h6 v-if="v$.dataForm.type.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Costo</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.cost }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.cost">
                                <h6 v-if="v$.dataForm.cost.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Precio de envio</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.priceDispatch }}</p>
                            <!-- <span v-if="editData">
                                <input type="number" v-model="dataForm.priceDispatch">
                                <h6 v-if="v$.dataForm.priceDispatch.$error">Valor numerico | Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Precio por unidad</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.priceUnity }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.priceUnity">
                                <h6 v-if="v$.dataForm.priceUnity.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Precio por guía</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.priceByGuide }}</p>
                            <!-- <span v-if="editData">
                                <input type="text" v-model="dataForm.priceByGuide">
                                <h6 v-if="v$.dataForm.priceByGuide.$error">Requerido</h6>
                            </span> -->
                        </div>
                    </div>



                    <div class="show-edit">
                        <label for="">Fecha de creacion</label>
                        <div class="box-showEdit">
                            <p>{{ dataForm.createdAt }}</p>
                        </div>
                    </div>

                    <div class="show-edit">
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
    name: 'MostrarEmpresa',
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
                // description: null,
                // auth: null,
                // dateCheck: null,
                // type: null,
                // cost: null,
                // priceDispatch: null,
                // priceUnity: null,
                // priceByGuide: null,
                status: null
            },

            url: this.$route.params.url,
            id: this.$route.params.value,

            editData: false

        }
    },
    validations () {
        return {
            dataForm: {
                // description: { 
                //     required
                // },
                // auth: { 
                //     required 
                // },
                // dateCheck: { 
                //     required 
                // },
                // type: { 
                //     required 
                // },
                // cost: { 
                //     required 
                // },
                // priceDispatch: { 
                //     required 
                // },
                // priceUnity: { 
                //     required
                // },
                // priceByGuide: { 
                //     required
                // },
                status: { 
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


