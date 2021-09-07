<template>

    <div class="login">

        <div class="content-login">

            <div class="box">

                <div class="box-logo">
                    <h1>Liceley CEDI</h1>
                </div>

                <div class="box-login">
                    
                    <div class="input">
                        <label for="" class="grid grid-3">
                            <div />
                            Usuario
                            <div class="middle">
                                <h6 class="alert" v-if="v$.formLogin.user.$error">Requerido</h6>
                            </div>
                        </label>
                        <input type="text" v-model="formLogin.user">
                    </div>

                    <div class="input">
                        <label for=""  class="grid grid-3">
                            <div />
                            Contraseña
                            <div class="middle">
                                <h6 class="alert" v-if="v$.formLogin.pass.$error">Requerido</h6>
                            </div>
                        </label>
                        <input type="password" v-model="formLogin.pass">
                    </div>

                    <div class="box-buttons box-buttons3">
                        <div/>
                        <button @click="acceder" class="button button1">Acceder</button>
                        <div/>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'


export default {
    name: 'Login',
    components: {
        
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            formLogin: { 
                user: "",
                pass: ""
            }
        }
    },
    validations () {
        return {
            formLogin: {
                user: { required },
                pass: { required }
            }
        }
    },
    methods: {
        async acceder(){

            if (!await this.v$.$validate()) return


            this.$router.push({ name: 'home' })
        }
    },

    
}

</script>

<style>

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login .content-login {
    width: 400px;
}

.login .content-login .box {
    padding: 50px 30px;
}

.login .content-login .box-logo{
    text-align: center;
}

.login .content-login .box-login{
    text-align: center;
}

.login .content-login .box-login .input {
    margin-bottom: 30px;
}


</style>