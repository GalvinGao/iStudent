<template>
  <a-layout-content style="padding: 0 50px">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <a-divider orientation="left"># meta</a-divider>
      <h3>page: {{ $route.params.category }}/{{ $route.params.item }} </h3>
      <a-divider orientation="left"># contents</a-divider>
      <router-view name="tools"></router-view>
    </div>
  </a-layout-content>
</template>

<script>
const ToolsIndex = () => import(/* webpackChunkName: "Tools" */ '@/components/Tools/Index.vue')


</script>
