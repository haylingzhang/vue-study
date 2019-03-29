<template>
    <div id="app">
        <Header></Header>
        <Content></Content>
    </div>
</template>

<script>
    import Header from "./components/header.vue"
    import Content from "./components/content.vue"
    export default {
        name: "app",
        components: {
            Header, Content
        },
        created() {},
        mounted() {},
        data() {
            return {
                list:[1,2,3,4,5]
            };
        },
        watch: {
            
        },
        computed: {},
        methods: {}
    };
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
</style>
