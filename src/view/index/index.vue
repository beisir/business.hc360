<template lang="html">
  <div class="">
    <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#ee2e2c" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-if="!item.flag" v-for="(item, index) in navBarList" :key="index" :index="item.path">{{ item.title }}</el-menu-item>
      <el-submenu v-else :index="item.path">
        <template slot="title">{{ item.title }}</template>
        <el-menu-item v-for="(i, idx) in item.children" :key="idx" :index="i.path">{{ i.title }}</el-menu-item>
        <!-- <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu> -->
      </el-submenu>



      <el-menu-item index="home">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">内容管理</template>
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
      <el-menu-item index="register">内容管理</el-menu-item>
      <el-menu-item index="4">网络营销</el-menu-item>
      <el-menu-item index="5">网站设置</el-menu-item>
      <el-menu-item index="5">插件市场</el-menu-item>
    </el-menu>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import {
  GETUSERINFO
} from '@/store/modules/user/actionsType'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      navBarList: [{
        title: '首页', // 标题
        path: '/', // 路由路径
        flag: false, // 是否是下拉菜单
      }, {
        title: '导航一',
        path: '/',
        flag: true,
        children: [{ // 下拉菜单的选项
          title: '选项一',
          path: '/',
          flag: false,
        }, {
          title: '选项二',
          path: '/',
          flag: false,
        }, {
          title: '选项三',
          path: '/',
          flag: false,
        }]
      }]
    }
  },
  created() {
    this.getUserInfo()
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
