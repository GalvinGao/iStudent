<template>
  <div>
    <a-layout>
      <a-layout-header class="header">
        <div class="custom-logo">imKinglee</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"><router-link to="/">say-hi!</router-link></a-menu-item>
          <a-menu-item key="2"><router-link to="/today">today</router-link></a-menu-item>
          <a-menu-item key="3"><router-link to="/tools">tools</router-link></a-menu-item>
        </a-menu>
      </a-layout-header>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <FrameFooter></FrameFooter>
    </a-layout>
  </div>
</template>

<style>
  .custom-logo {
    width: 140px;
    height: 31px;
    float: left;
    color: rgba(255, 255, 255, 0.85);
    font-family: 'Source Code Pro', 'Source Sans Pro', 'Courier New', 'Courier', monospace;
  }
</style>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import FrameFooter from '@/components/Frames/Footer.vue'
import '@/styles/main.css'
import '@/styles/animate.css'

export default {
  name: 'app',
  components: {
    FrameFooter
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
