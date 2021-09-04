<template>
    <Layout>
        
        <Title :title="titulo" />

        <ListaTickets :data="data" :loading="loading" :url="url" :getData="getData"/>

    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    import ListaTickets from '@/components/tickets/ListaTickets';
    import Title from '@/components/Title'

    export default {
        name: "Tickets",
        components: {
            Layout,
            ListaTickets,
            Title
        },
        data() {
            return {
                data: {},
                loading: true,
                error: null,

                titulo: "Lista Tickets",

                url: dominio() + "tickets",

                dataForms: { },
                dataUser: { },

                idOwner: this.$route.params.owner ? this.$route.params.owner : null,

            }
        },
        created() {
            this.getData();
            // this.getUser();
        },
        methods: {
            handleTabClick(value){
                this.activeTabName = value;
                this.getData();
            },

            async getData() {
                
                this.loading = true;

                try {
                    const res = await this.axios({
                        method: 'get',
                        url: this.url,
                    });
                    const { data } = await res;

                    this.data = data.success
                    this.loading = false;

                } catch (error) {
                    this.loading = false;
                    this.error = error
                }
            },


            clearOwner(){
                this.idOwner = null;
            }

        }
    }
</script>

<style>




</style>