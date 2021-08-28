<template>
    <div class="box">

        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <div v-if="!loading" class="form">
            <div class="form-box form-box2">

                <div class="input">
                    <label for="">Key</label>
                    <input type="text" v-model="dataForm.key">
                </div>

                <div class="input">
                    <label for="">Nombre</label>
                    <input type="text" v-model="dataForm.name">
                </div>

                <div class="input">
                    <label for="">Nombre publico</label>
                    <input type="text" v-model="dataForm.namePublic">
                </div>

                 <div class="input">
                    <label for="">RFC</label>
                    <input type="text" v-model="dataForm.rfc">
                </div>

                <div class="input">
                    <label for="">Regimen fiscal</label>
                    <input type="text" v-model="dataForm.fiscalRegime">
                </div>

                <div class="input">
                    <label for="">Giro postal</label>
                    <input type="text" v-model="dataForm.turn">
                </div>

                <div class="input">
                    <label for="">Propietario</label>
                    <input type="number" v-model="dataForm.owner">
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
                <div></div>
                <button class="button button1" v-on:click="postData">Guardar</button>
                <div></div>
            </div>
            
        </div>
    </div>

    <Loading v-if="loading"/>


</template>

<script>

import Loading from '@/components/Loading'

export default {
    name: "CrearEmpresa",
    props: ["prueba", "getData", "url"],
    components:{
        Loading
    },
    data() {
        return {
            loading: false,
            error: null,

            dataForm: {
                key: "",
                name: "",
                namePublic: "",
                turn: null,
                rfc: null,
                fiscalRegime: null,
                // status: null,
                owner: null
            }
        }
    },

    created() {
        // this.postData()
    },

    methods: {

        postData(){

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
                    
                    owner: this.dataForm.owner ? this.dataForm.owner : 1
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
                
            })
            


            

            // try {
            //     await this.axios({
            //         method: 'post',
            //         url: this.url,
            //         data: this.dataForm,
            //     });



                // const { data } = await res;

                // this.data = data.success
                // this.loading = false;



            // } catch (error) {


                // this.loading = false;
                // this.error = error

            //     console.log(error);
                
            // }
            
            
        }

    }


}
</script>

<style>

</style>
