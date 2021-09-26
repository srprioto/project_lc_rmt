<template>
    <div class="form pad0" v-if="!loading">

        <div class="box">

            <h3>Informacion de la factura</h3>

            <div class="form-box form-box3">

                <div class="input">
                    <label for="">
                        Dato 1
                        <!-- <h6 v-if="v$.dataForm.ownerRef.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.dato1">
                </div>

                <div class="input">
                    <label for="">
                        Dato 2
                        <!-- <h6 v-if="v$.dataForm.enrollment.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.dato2">
                </div>

                <div class="input">
                    <label for="">
                        Dato 3
                        <!-- <h6 v-if="v$.dataForm.modelId.$error">Requerido</h6> -->
                    </label>
                    <input type="text" v-model="dataForm.dato3">
                </div>

            </div>

        </div>

        <ModalFactura v-if="showModalFactura" :handleModalFactura="handleModalFactura" :addItem="addItem"/>

        <div class="box">

            <h3>Relacion de productos</h3>
            
            <div v-if="this.dataForm.items != 0" class="altura-min">

                <table class="table">
                    <tbody>
                        <tr v-for="(item, i) in dataForm.items" :key="item.id">
                            <td>{{ i+1 }}</td>
                            <td>{{ item.item1 }}</td>
                            <td>{{ item.item2 }}</td>
                            <td>{{ item.item3 }}</td>
                            <td>
                                <span v-on:click="popItem(i)" class="pointer icon-action warning">
                                    <font-awesome-icon icon="trash" />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br>

            </div>

            <div v-else class="altura-min middle">
                <h3>Añade un producto</h3>
            </div>

            <div class="box-buttons box-buttons3">
                <div />
                <button class="button button1" v-on:click="asdf">
                    Guardar
                    <font-awesome-icon icon="check" />
                </button>
                <div />
            </div>

        </div>


    </div>

    <Loading v-if="loading"/>

    <div class="plusButton floatButton pointer" v-on:click="handleModalFactura">
        <font-awesome-icon icon="plus" size="2x" />
    </div>


</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric } from '@vuelidate/validators'
import Loading from '@/components/Loading'

import ModalFactura from '@/components/facturacion/ModalFactura'

export default {
    name: "CrearContrato",
    props: ["prueba", "getData", "url", "tab", "nameTab"],

    components:{
        Loading,
        ModalFactura
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
                dato1: null,
                dato2: null,
                dato3: null,
                items: [ ]
            },

            // elemento: {
            //     id: 1,
            //     item1: "",
            //     item2: "",
            //     item3: "",
            // },

            showModalFactura: false

        }
    },
    validations () {
        return {
            dataForm: {
                
                // state: { 
                //     required
                // },
                // modelTable: { 
                //     required 
                // },
                // enrollment: { 
                //     required 
                // }


            }
        }
    },

    created() {
        
    },

    methods: {

        handleModalFactura(){
            this.showModalFactura = !this.showModalFactura;
        },

        addItem(elemento) {
          
            this.dataForm.items = [ ...this.dataForm.items, ...[elemento] ]

        },

        popItem(i){
            this.dataForm.items.splice(i,1);;
        },

        asdf(){
            alert("ok");
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
            this.axios.post( 
                this.url, 
                {

                    // state: this.dataForm.state,
                    // modelTable: this.dataForm.modelTable,
                    // enrollment: this.dataForm.enrollment,
                    // type: this.dataForm.type,
                    // boxCubic: this.dataForm.boxCubic,
                    // boxDimention: this.dataForm.boxDimention,
                    // endSecure: this.dataForm.endSecure,
                    // ownerRef: this.dataForm.ownerRef,
                    // modelId: this.dataForm.modelId,
                    // imgId: this.dataForm.imgId
                
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

                this.dataForm.state = "";
                this.dataForm.modelTable = "";
                this.dataForm.enrollment = "";
                this.dataForm.type = "";
                this.dataForm.boxCubic = "";
                this.dataForm.boxDimention = "";
                this.dataForm.endSecure = "";
                this.dataForm.ownerRef = "";
                this.dataForm.modelId = "";
                this.dataForm.imgId = "";

                this.tab(this.nameTab);

                toastSuccess("Contrato registrado");

            })
            

        }

    },
    
}
</script>

<style>

.altura-min{
    min-height: 300px
}

</style>


