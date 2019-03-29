<template>
    <div id="app">
        <Header @change="navChangeHandle"></Header>
        <Content :propsData="curIndex"></Content>
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
                curIndex: 1,
            };
        },
        watch: {
            
        },
        computed: {},
        methods: {
            navChangeHandle(curIndex){
                this.curIndex = curIndex
            }
        }
    };
</script>

<style>
body{
    padding: 0;
    margin: 0;
}
</style>
