<template>

    <div class="login">

        <div class="content-login">

            <div class="box">

                <div class="box-logo">
                    <img :src="logo" alt="">
                </div>

                <div class="box-login">
                    
                    <div class="input">
                        <label for="" class="grid grid-3">
                            <div />
                            Usuario
                            <div class="middle">
                                <h6 class="alert" v-if="v$.email.$error">Requerido</h6>
                            </div>
                        </label>
                        <input type="text" v-model="email">
                    </div>

                    <div class="input">
                        <label for=""  class="grid grid-3">
                            <div />
                            Contraseña
                            <div class="middle">
                                <h6 class="alert" v-if="v$.password.$error">Requerido</h6>
                            </div>
                        </label>
                        <input type="password" v-model="password">
                    </div>

                    <div class="box-buttons box-buttons3">
                        <div/>
                        <button @click="signin" class="button button1">Acceder</button>
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

            valid: true,
			error:'',
			formName:'',
            message:'',

            email: 'learfen001@gmail.com',
			password: '123456789',

            // mxgick@gmail.com
            // martin
			
			passwordRules: [
			  v => !!v || 'Contraseña es requerido',
			  v => (v && v.length >= 8) || 'Minimo 8 caracteres',
			],
			emailRules: [
			  v => !!v || 'E-mail es requerido',
			  v => /.+@.+\..+/.test(v) || 'E-mail es valido',
			],

        }
    },
    validations () {
        return {
            password: { required },
            email: { required }
        }
    },
    created() {
        // console.log(this.$router.push({ name: 'select-rol' }));
    },
    methods: {
        async acceder(){

            if (!await this.v$.$validate()) return

            this.$router.push({ name: 'select-rol' })

        },

        formNext(){
            if(this.formName=='signin') this.signin()
            else this.signup()
        },

        async signin() {

            if (!await this.v$.$validate()) return

            this.message = ''
            this.error = ''

            this.axios.put(dominio()+'users/signin' , {
                email:this.email,
                password:this.password
            })
            .then( res => {
                // console.log(res);
                if( res.data.error ) this.error = res.data.error
                else {
                    // console.log(this.$router.push({ name: 'select-rol' }));
                    localStorage.setItem('token' , res.data.success.token)
                    localStorage.setItem('profiles' , res.data.success.profiles)
                    // this.$router.push({ name: 'select-rol' })

                    // this.$router.push({ path: '/seleccionar-rol?token=' + res.data.success.token })


                    location.href = urlLocal()+'seleccionar-rol?token='+res.data.success.token
                    // localStorage.setItem('profiles' , JSON.stringify(res.data))
                    
                }
            })
            .catch(error => this.error = error.message)
        },

        signup() {
            this.message = ''
            this.error = ''
            this.axios.post(dominio()+'users/signup' , {
                email:this.email,
                password:this.password
            })
            .then( res => {
                if( res.data.error ) this.error = res.data.error
                else this.message = res.data.success
            })
            .catch(error => this.error = error.message)
        },

        resetValidation () {
            this.$refs.form.resetValidation()
        }



    },
    computed:{
        logo(){
            
            return urlLocal() + "assets/image/imgs/logo-negro.png"

        }
    },
    watch:{
        error(){
            this.message = ''
        },
        message(){
            this.error = ''
        },
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

.login .content-login .box-logo img {
    width: 250px;
}

.login .content-login .box-login{
    text-align: center;
}

.login .content-login .box-login .input {
    margin-bottom: 30px;
}




</style>