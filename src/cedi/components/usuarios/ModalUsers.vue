<template>

    <div class="box">

        <p class="desc-form">Informacion del Usuario</p>

        <table v-if="!loading" class="table2">
            <tr>
                <td><strong>Correo</strong></td>
                <td>{{ dataUser.email }}</td>
            </tr>
            <tr>
                <td><strong>Roles</strong></td>
                <td>{{ dataUser.roleId }}</td>
            </tr>
            <tr>
                <td><strong>Perfil</strong></td>
                <td>{{ dataUser.profileId }}</td>
            </tr>
            <tr>
                <td><strong>Lista Perfil</strong></td>
                <td>{{ dataUser.profileList }}</td>
            </tr>
        </table>

        <Waiting v-if="loading" :msg="'Seleccione un usuario'" />
    
    </div>

    

</template>

<script>
import Waiting from '@/components/Waiting'

export default {
    name: "ModalUsers",
    props: ["idUser"],
    components:{
        Waiting
    },
    data() {
        return {
            loading: true,
            error: null,
            dataUser: { }
        }
    },
    created() {

    },
    methods: {

        async userData(){
            
            this.loading = true;

            try {
                const res = await this.axios({
                    method: 'get',
                    url: dominio() + "users/" + this.idUser + "/get?by=id"
                });
                const { data } = await res;

                this.dataUser = data.success
                this.loading = false;

            } catch (error) {
                this.loading = false;
                this.error = error
            }
        }
    },

    watch:{
        
        idUser(newV, oldV){
            // console.log(newV, oldV);
            this.userData()
        }

    }
}
</script>

<style>

/* .modalUser{

} */

</style>