<template>
    <Layout>

        <!-- plantilla -->
        <div class="box">
            <h1>titulo titulo titulo titulo</h1>
            <h2>titulo titulo titulo titulo</h2>
            <h3>titulo titulo titulo titulo</h3>
            <h4>titulo titulo titulo titulo</h4>
            <h5>titulo titulo titulo titulo</h5>
            <h6>titulo titulo titulo titulo</h6>

            <p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit.</strong> Hic natus totam quidem dicta laudantium accusantium minima commodi!</p>

            <a href="">link link link</a>

            <ul>
                <li>texto 1</li>
                <li>texto 1</li>
                <li>texto 1</li>
            </ul>

            <span>texto texto</span>

            <div class="box-buttons box-buttons5">
                <div/>
                <div class="button button1">boton1</div>
                <div class="button button2">boton2</div>
                <div class="button button3">boton3</div>
                <div/>
            </div>

        </div>

        <!-- formulario para el link -->
        <div class="box">
            <div class="form">
                <div class="form-box form-box1">
                    
                    <div class="input">

                        <label for="">Crear empresa</label>
                        <input type="text" v-model="formData.idOwner">
                        <h5 v-if="v$.formData.idOwner.$error">
                            Requerido id de propietario de empresa | Valor numerico
                        </h5>

                    </div>

                    <div class="box-buttons box-buttons5">
                        <div/><div/>

                        <button
                            v-if="formData.idOwner === ''"
                            class="button button1"
                            @click="okFun(formData.idOwner)"
                        >
                            Ok
                        </button>

                        <button
                            v-else
                            class="button button1"
                            @click="okFun(formData.idOwner)"
                        >
                            Ok
                        </button>

                        <!-- <router-link 
                            v-else
                            class="button button1"
                            @click="okFun(formData.idOwner)"
                            :to="{ 
                                name: 'crear-empresa', 
                                params: { owner: formData.idOwner } 
                            }" 
                        >
                            Ok
                        </router-link> -->

                        <div/><div/>
                    </div>

                </div>
            </div>
        </div>


    </Layout>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
import Layout from '@/components/Layout';

export default {
    name: 'Home',
    components: {
        Layout
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            formData: { 
                idOwner: ""
            }
        }
    },
    validations () {
        return {
            formData: {
                idOwner: { required, numeric }
            }
        }
    },
    methods: {

        async okFun (valor) {

            if (!await this.v$.$validate()) return

            this.$router.push({ 
                name: 'crear-empresa', 
                params: { owner: valor } 
            })

        }

    },

    
}

</script>

<style>

</style>