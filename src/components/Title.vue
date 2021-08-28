<template>

    <div class="box-title-comp">
        <div class="box-grid-title">
            <div class="title-page">
                <h2>{{ title }}</h2>
            </div>
        </div>

        <div></div>

        <div></div>
    </div>
    

</template>

<script>
export default {
    name: 'Title',
    props:[
        "title"
    ]

}
</script>

<style>

.box-title-comp {
    box-sizing: border-box;
    padding: 29px 30px 13px 30px;
    background-color: var(--colorBox);
    margin-bottom: 20px;
    border-radius: var(--radius);
}

.box-title-comp .box-grid-title {
    display: grid;
    grid-template-columns: 45% 10% 45%;
}


.box-title-comp .box-grid-title .title-page {
    display: flex;
    align-items: center;
}

.box-title-comp .box-grid-title .title-page h2 {
    margin: 0 0 10px 0;
}

</style>

