<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <header>
    <p>header</p>
  </header>
  <router-view :key="route.fullPath" />
</template>
<style>
header {
  min-height: 50px;
  background-color: aqua;
  color: red;
}
#app {
  background-image: url('./assets/compass.jpg');
  min-height: 2000px;
  /* background-color: blue; */
}
</style>