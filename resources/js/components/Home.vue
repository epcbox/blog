<template>
    <div>
        <HeaderComponent />
        <div class="title">
            <h1>D.B</h1>
        </div>
        Hello motherfuckers?
    </div>
</template>
<style>
    .title {
        display: flex;
        justify-content: center;
    }
</style>

<script>
    import HeaderComponent from "./HeaderComponent.vue";

    export default {
        components: {
            HeaderComponent,
        }
    }
</script>
