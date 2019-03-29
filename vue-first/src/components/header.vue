<template>
    <div class="wrapper">
        <div class="nav-list">
            <span class="nav-list-item" v-for="(value, index) in list" :key="index" @click="clickHandle(value)">{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        created() {},
        mounted() {},
        data() {
            return {
                list:[1,2,3,4,5]
            };
        },
        watch: {},
        computed: {},
        methods: {
            clickHandle(value){
                this.$emit("change", value)
            }
        }
    };
</script>
<style scoped>
.nav-list{
    display: flex;
    width: 100%;
    height: 50px;
}
.nav-list-item{
    flex: 1;
    height: 100%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    outline: 1px solid blue;
}
</style>