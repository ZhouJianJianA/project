<template>
  <div>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="asideWidth" style="min-height: 100vh; background-color: #304156">
        <div style="height: 80px; color: white; display: flex; align-items: center; justify-content: center">
          <img src="@/assets/light.png" style="width: 30px;" alt="">
          <span class="logo-title" v-show="!isCollapse">路灯智能监控系统</span>
        </div>

        <el-menu :collapse="isCollapse" :collapse-transition="false" router background-color="#304156" text-color="rgba(255, 255, 255, 0.65)" active-text-color="#fff" style="border: none" :default-active="$route.path">
          <el-menu-item index="/mainview">
            <template>
              <i class="el-icon-house"></i>
              <span slot="title">系统首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/lightcontrol">
            <template>
              <i class="el-icon-s-opportunity"></i>
              <span slot="title">路灯状态监测</span>
            </template>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>信息管理</span>
            </template>
            <el-menu-item index="/electricHistroy">电参数历史记录</el-menu-item>
            <el-menu-item index="/tempHistory">温度历史记录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>

        <!-- 头部 -->
        <el-header height="80px">
          <i :class="collapseIcon" style="font-size: 26px" @click="handleCollapse"></i>

          <div style="flex: 1; width: 0; display: flex; align-items: center; justify-content: flex-end">
            <i :class="fullscreenIcon" style="font-size: 26px" @click="toggleFullScreen"></i>
            <el-dropdown placement="bottom">
              <div style="display: flex; align-items: center; cursor: default">
                <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="" 
                style="width: 40px; height: 40px; margin: 0 5px; border-radius: 10px">
                <span>管理员</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>      

        </el-header>

        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
      return {
        isCollapse: false,
        asideWidth: '250px',
        collapseIcon: 'el-icon-s-fold',
        fullscreenIcon: 'el-icon-quanpingfangda'
    }
  },
  methods: {
    // handleFull() {
    //   document.documentElement.webkitRequestFullscreen()
    // },
    toggleFullScreen() {
            var elem = document.documentElement;
            if (!document.fullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                    this.fullscreenIcon = 'el-icon-quanpingsuoxiao'
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.fullscreenIcon = 'el-icon-quanpingfangda'
                }
            }
        },
    handleCollapse() {
      this.isCollapse = !this.isCollapse
      this.asideWidth = this.isCollapse ? '64px' : '250px'
      this.collapseIcon = this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
    
  }
}
</script>

<style>
.el-menu-item {
  background-color: #304156 !important;
}

.el-menu-item:hover, .el-submenu__title:hover{
  color: #fff !important;
  background-color: rgb(40, 44, 56) !important;
}

.el-menu-item:hover i, .el-submenu__title:hover i{
  color: #fff !important;
}

.el-menu-item.is-active {
  /* background-color: #1890ff !important; */
  color: #ffd04b !important;
  border-radius: 6px !important;
  width: calc(100% - 8px);
  margin-left: 4px;
}

.el-menu-item.is-active i, .el-menu-item.is-active .el-tooltip{
  margin-left: -4px;
}

.el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
}

.el-aside {
  transition: width .3s;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}

.logo-title {
  margin-left: 5px;
  font-size: 20px;
  transition: all .3s; 
}

.el-header {
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  display: flex;
  align-items: center;
}
</style>