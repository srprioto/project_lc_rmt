<template>
    <Layout>

        <div class="grid grid-4">
            <div class="box grid-center">
                <p class="mar0">
                    Rutas api: 
                    <a class="link" href="https://liceley.herokuapp.com/routes" target="_blank">
                        Click aqui
                    </a>
                </p>
            </div>

            <div class="box grid-center">
                <p class="mar0">Perfil usuario: <a class="link" href="https://liceley.herokuapp.com/view/menu" target="_blank">Click aqui</a></p>
            </div>

            <div class="box grid-center">
                <p class="mar0">Roles: <a class="link" href="https://liceley.herokuapp.com/view/users" target="_blank">Click aqui</a></p>
            </div>

            <div class="box grid-center">
                <p class="mar0">Tickets: <a class="link" href="https://liceley.herokuapp.com/view/dashboard" target="_blank">Click aqui</a></p>
            </div>

        </div>

        <!-- charts -->
        <div class="grid grid-2">
            <VehiculosDisponibles />
            <EmpleadosRegistrados />
        </div>
        <ReporteSemana />



    </Layout>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
import Layout from '@/components/Layout';

// charts
import EmpleadosRegistrados from '@/components/charts/EmpleadosRegistrados.vue'
import VehiculosDisponibles from '@/components/charts/VehiculosDisponibles.vue'
import ReporteSemana from '@/components/charts/ReporteSemana.vue'


export default {
    name: 'Home',
    components: {
        Layout,
        EmpleadosRegistrados,
        VehiculosDisponibles,
        ReporteSemana
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            formData: { 
                idOwner: "",
                token: "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjIxMDM4ODc3LCJleHAiOjE2MjEwNDAzMTd9.-GhclnJSW2tU-wosrwV6B2ZYAJgvHoYr8HIjnNicFHw"
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
    created() {
        


    },
    methods: {

        async okFun (valor) {

            if (!await this.v$.$validate()) return

            this.$router.push({ 
                name: 'crear-empresa', 
                params: { owner: valor } 
            })

        },



    },

    
}

</script>

<style>

</style>