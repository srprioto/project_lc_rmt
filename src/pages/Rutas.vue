<template>
    <Layout>

        <!-- <Tabs :comp="comps" /> -->

    </Layout>
</template>

<script>
    import Layout from '@/components/Layout';
    import Tabs from '@/components/Tabs';

    import ListaTickets from '@/components/tickets/ListaTickets'
    import CrearTicket from '@/components/tickets/CrearTicket'

    export default {
        name: "Rutas",
        components: {
            Layout,
            Tabs,
            CrearTicket,
            ListaTickets
        },
        data() {
            return {
                
                comps: [
                    {
                        id: 1,
                        name: "tab1",
                        comp: ListaTickets
                    },
                    {
                        id: 2,
                        name: "tab1",
                        comp: CrearTicket
                    }
                ]

            }
        },
    }
</script>

<style>

</style>