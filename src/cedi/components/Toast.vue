<template>

    <div v-if="stateToast" class="toast" :class="tipo">
        <div class="box-toast">
            <h3>{{ msg }}</h3>
        </div>
    </div>

    <!-- <button @click="handlerToast" >asdfsadf</button> -->

</template>

<script>
export default {
    props: ["msg", "tipo"],
    data() {
        return {
            stateToast: false,
            idToast: null
        }
    },
    created() {
        
        

    },
    methods: {

        handlerToast(){

            clearTimeout(this.idToast);

            this.stateToast = true

            this.idToast = setTimeout(() => {
                this.stateToast = false
            }, 3000);

        },


    }
}
</script>

<style>

.toast {
    position: fixed;
    top: 95px;
    right: 30px;
    background-color: var(--colorModal);
    text-align: center;
    box-sizing: border-box;
    padding: 0 25px;
    box-shadow: var(--shadow2);
    border-radius: 10px;
    height: 70px;
    width: 390px;
    z-index: 3;

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, top 0.2s, visibility 0.2s;
}

.toast.success{
    border-left: 2px solid var(--success);
    border-right: 2px solid var(--success);
}

.toast.warning{
    border-left: 2px solid var(--warning);
    border-right: 2px solid var(--warning);
}

.toast.danger {
    border-left: 2px solid var(--lines2);
    border-right: 2px solid var(--lines2);
}

.toast .box-toast{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.toast .box-toast h3{
    margin: 0;
}


</style>