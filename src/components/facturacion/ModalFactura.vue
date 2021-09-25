<template>

    <div class="background-modal">

        <div class="modal2 w70">

            <h3>Items de facturacion</h3>

            <div class="form-box form-box3">

                <div class="input">
                    <label for="">item 1</label>
                    <input type="text" v-model="elemento.item1">
                </div>

                <div class="input">
                    <label for="">item 2</label>
                    <input type="text" v-model="elemento.item2">
                </div>

                <div class="input">
                    <label for="">item 3</label>
                    <input type="text" v-model="elemento.item3">
                </div>

            </div>

            <div class="box-buttons box-buttons4">
                <div />
                <button class="button button1" v-on:click="prosAddItems">
                    Añadir
                    <font-awesome-icon icon="check" />
                </button>
                <button class="button button3" v-on:click="handleModalFactura">
                    Cerrar
                    <font-awesome-icon icon="check" />
                </button>
                <div />
            </div>

        </div>

    </div>
    
</template>

<script>
export default {
    name: "ModalFactura",
    props: ["handleModalFactura", "addItem"],
    data() {
        return {
            elemento: {
                id: 1,
                item1: "",
                item2: "",
                item3: "",
            }
        }
    },
    methods: {

        prosAddItems(){

            this.addItem(this.elemento);

            this.elemento = {
                item1:"",
                item2:"",
                item3:""
            }

            this.handleModalFactura();

        }

    }

}
</script>

<style>

</style>