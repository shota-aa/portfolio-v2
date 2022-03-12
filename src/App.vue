<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Menu from './components/Menu.vue'

const route = useRoute()
</script>
<template>
  <Menu class="menu"/>
  <header>
    <h1>shota's portfolio</h1>
  </header>
  <router-view :key="route.fullPath" class="body" />
</template>
<style>
#app {
  margin: 0;
  font-family: 'Caveat', cursive;
  background-image: url('./assets/compass.jpg');
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
  background-position: 70%;
  background-size: cover;
  background-repeat: repeat;
}
header {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 100px;
  color: red;
  margin: 0;
}
.body {
  margin: 0;
  min-height: 1300px;
}
.menu {
  position: absolute;
  right: 0;
}
</style>