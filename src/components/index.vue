<template lang="html">
    <div class="index">
        <h1>商务中心重构</h1>
    </div>
</template>

<script>
export default {
    created () {
        this.$axios.get('/dataweb/app', {
            params: {
                type: 0,
                time: 1
            }
        }).then(res => {
            console.log('测试本地模拟数据接口, 地址格式：===== /dataweb/路由名?type=0&time=1  ======');
            console.log('测试本地模拟数据接口, json名称：===== app-type0-time1.json  ======');
            console.log(res.data);
        });
    }
};
</script>
