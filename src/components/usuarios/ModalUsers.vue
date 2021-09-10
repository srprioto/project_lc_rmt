<template>

    <div class="modalUser">

        <h3>Informacion del Usuario</h3>

        <table>
            <tr>
                <td><strong>Correo</strong></td>
                <!-- <td>{{ dataUser.email }}</td> -->
                <td>texto texto texto</td>
            </tr>
            <tr>
                <td><strong>Roles</strong></td>
                <!-- <td>{{ dataUser.roleId }}</td> -->
                <td>texto texto texto</td>
            </tr>
            <tr>
                <td><strong>Perfil</strong></td>
                <!-- <td>{{ dataUser.profileId }}</td> -->
                <td>texto texto texto</td>
            </tr>
            <tr>
                <td><strong>Lista Perfil</strong></td>
                <!-- <td>{{ dataUser.profileList }}</td> -->
                <td>texto texto texto</td>
            </tr>
        </table>
   
    </div>

</template>

<script>
export default {
    name: "ModalUsers",
    props: ["idUser"],
    data() {
        return {
            
        }
    },
    created() {
        this.getUser()
    },
    methods: {

        getUser(){
            
        }

    }
}
</script>

<style>

.modalUser{
    box-sizing: border-box;
    padding: 20px 30px 30px 30px;
    background-color: var(--colorBox);
    border-radius: var(--radius);
}

</style>