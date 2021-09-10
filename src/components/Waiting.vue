<template>
    <div class="waiting">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
    export default {
        name: "Waiting",
        props: ["msg"]
    }
</script>

<style>

.waiting {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.waiting h3{
    margin: 0;
}

</style>