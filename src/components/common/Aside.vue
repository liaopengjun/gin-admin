<template>
    <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <h3>通用后台管理系统</h3>
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-submenu index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu>
    </el-menu>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        meun :[
           {
            path:"/home",
            name:"home",
            label:"首页",
            icon:"首页",
            url:"Home/Home"
          },
          {
            path:"/user",
            name:"user",
            label:"用户管理",
            icon:"用户管理",
            url:"UserManage/UserManage"
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>