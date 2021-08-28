<template>
    <div class="layout">
        <div class="box-layout">

            <Header></Header>

            <div class="body">

                <Menu></Menu>

                <div class="main scroll">
                    <slot></slot>
                </div>

            </div>

        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>

    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
    import Menu from '@/components/Menu'

    export default {
        name: 'Layout',
        components: {
            Header,
            Footer,
            Menu
        }
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
    background-color: #00000061;
    box-sizing: border-box;
    padding: 5px 0;
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