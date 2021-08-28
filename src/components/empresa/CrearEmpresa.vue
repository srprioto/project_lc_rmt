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

                <div class="input">
                    <label for="">Turno</label>
                    <select name="" id="" v-model="dataForm.turn">
                        <option value="manana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                    </select>
                </div>

            </div>

            <div class="input">
                <button class="button button3" v-on:click="postData">Ok</button>
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

                // console.log(res.data)
                // this.dataForm.key = ""
                // this.businessNewName=""
                // this.businessNewKey=""
                // this.businessNewNamePublic=""
                // this.businessNewRFC=""
                // this.businessNewFiscalRegime=""
                // this.businessNewTurn=""
                // this.businessNewOwner=""
                // this.business.push(res.data.rol)

                this.dataForm = {
                    key: "",
                    name: "",
                    namePublic: "",
                    turn: "",
                    rfc: "",
                    fiscalRegime: "",
                    // status: "",
                    owner: ""
                }

                this.loading = false;

                this.getData();

            })
            .catch( error => {

                this.loading = false;
                this.error = error;

                this.getData();
                
            });




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
