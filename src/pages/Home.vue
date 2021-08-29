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

        <!-- formulario -->
        <div class="box">
            <div class="form">
                <div class="form-box form-box1">
                    
                    <div class="input">

                        <label for="">Prueba de formulario</label>
                        <input type="text" v-model="formData.nombre">
                        <h5 v-if="v$.formData.nombre.$error">Requerido</h5>

                    </div>

                    <div class="box-buttons box-buttons5">
                        <div/><div/>
                        <button class="button button1" @click="okFun" >Ok</button>
                        <div/><div/>
                    </div>

                </div>
            </div>
        </div>


    </Layout>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
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
                nombre: ""
            }
        }
    },
    validations () {
        return {
            formData: {
                nombre: { required }
            }
        }
    },
    methods: {

        async okFun () {

            if (!await this.v$.$validate()) return

            alert("datos enviar");

        }

    },

    
}

</script>

<style>

</style>