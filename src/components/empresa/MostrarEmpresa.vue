<template>
    <Layout>
        
        <Title v-if="!editData" :title="!loading ? `Informacion de ${dataForm.name}` : 'Espere...'" />
        <Title v-if="editData" :title="!loading ? `Editar informacion de ${dataForm.name}` : 'Espere...'" />
            
        <div class="box">

            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <div v-if="!loading" class="form">
                <div class="form-box form-box1">

                    <div class="show-edit">
                        <label for="">Key</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.key }}</p>
                            <input v-if="editData" type="text" v-model="dataForm.key">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Nombre</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.name }}</p>
                            <input v-if="editData" type="text" v-model="dataForm.name">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Nombre publico</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.namePublic }}</p>
                            <input v-if="editData" type="text" v-model="dataForm.namePublic">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">RFC</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.rfc }}</p>
                            <input v-if="editData" type="text" v-model="dataForm.rfc">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Regimen fiscal</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.fiscalRegime }}</p>
                            <input v-if="editData" type="text" v-model="dataForm.fiscalRegime">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Propietario</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">{{ dataForm.owner }}</p>
                            <input v-if="editData" type="number" v-model="dataForm.owner">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Giro postal</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">
                                {{ dataForm.turn }}
                            </p>
                            <input v-if="editData" type="text" v-model="dataForm.turn">
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Estado</label>
                        <div class="box-showEdit">
                            <p v-if="!editData">
                                {{ dataForm.status }}
                            </p>
                            <select v-if="editData" name="" id="" v-model="dataForm.status">
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Fecha de creacion</label>
                        <div class="box-showEdit">
                            <p>
                                {{ dataForm.createdAt }}
                            </p>

                        </div>
                    </div>

                    <div class="show-edit">
                        <label for="">Ultima actualizacion</label>
                        <div class="box-showEdit">
                            <p>
                                {{ dataForm.updatedAt }}
                            </p>
                        </div>
                    </div>

                </div>

                <div class="box-buttons box-buttons4">
                    <div />
                    <div>
                        <button v-if="!editData" class="button button1" v-on:click="handlerEdit">Editar</button>
                        <button v-if="editData" class="button button2" v-on:click="confirmEdit">Confirmar</button>
                    </div>
                    <div>
                        <button v-if="!editData" class="button button2" v-on:click="regresar">Regresar</button>
                        <button v-if="editData" class="button button3" v-on:click="handlerEdit">Cancelar</button>
                    </div>
                    <div />
                </div>
                
            </div>

            <Loading v-if="loading"/>

        </div>
        
    </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import Title from '@/components/Title';

import Loading from '@/components/Loading'

export default {
    name: 'MostrarEmpresa',
    components:{
        Title, Layout, Loading
    },
    data() {
        return {
            loading: false,
            loadingPut: true,
            error: null,

            dataForm: {
                key: "",
                name: "",
                namePublic: "",
                turn: null,
                rfc: null,
                fiscalRegime: null,
                owner: null,
                status: null
            },

            url: this.$route.params.url,
            id: this.$route.params.value,

            editData: false


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

        confirmEdit(){

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