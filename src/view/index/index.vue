<template lang="html">
  <div class="">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" :route="{name: '', path: ''}">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4"><a href="" target="_blank">{{userInfo.a}}</a></el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { GETUSERINFO } from '@/store/modules/user/actionsType'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
    this.getUserInfo()
    console.log(this.userInfo);
  },
  computed: {
    ...mapState('user', {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions('user', {
      getUserInfo: GETUSERINFO
    })
  }
};
</script>

<style lang="css">
</style>
