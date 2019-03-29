<template>
    <div class="wrapper">
        {{propsData}}
    </div>
</template>

<script>
    export default {
        name: "content",
        props: {
            propsData:{
                type: Number
            }
        },
        created() {},
        mounted() {},
        data() {
            return {};
        },
        watch: {},
        computed: {},
        methods: {}
    };
</script>
<style scoped>
.wrapper {
}
</style>