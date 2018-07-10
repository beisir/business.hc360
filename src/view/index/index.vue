<template lang="html">
    <div class="index-wrap"></div>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="css">

</style>
