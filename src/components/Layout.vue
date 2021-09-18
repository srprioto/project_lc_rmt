<template>
    <div class="layout">
        <div class="box-layout">

            <!-- header -->
            <Header />

            <div class="body">

                <!-- menu -->
                <Menu />

                <div class="main scroll">

                    <!-- cuerpo -->
                    <slot></slot>
                </div>

            </div>

        </div>

        <!-- footer -->
        <Footer class="footer"></Footer>
    </div>
</template>

<script>

    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import Menu from '@/components/Menu'

    export default {
        name: 'Layout',
        props: [
            
        ],
        
        components: {
            Header,
            Footer,
            Menu
        },

        // created() {
        //     console.log(window.location.pathname);
        // },

    }

</script>

<style>

.layout {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
}

.layout .box-layout {
    width: 100%;
}

.layout .footer {
    align-self: flex-end;
    width: 100%;
    text-align: center;
    background-color: #3f87f5;
    box-sizing: border-box;
    /* padding: 5px 0; */
}

.layout .box-layout .body{
    display: grid;
    grid-template-columns: 18% 82%;
}

.layout .box-layout .body .main {
    box-sizing: border-box;
    padding: 30px;
}


</style>