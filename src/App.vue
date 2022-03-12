<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Menu from './components/Menu.vue'

const route = useRoute()
</script>
<template>
  <Menu class="menu"/>
  <header>
    <h1>Kounosuke's portfolio</h1>
  </header>
  <router-view :key="route.fullPath" class="body" />
</template>
<style>
#app {
  margin: 0;
  font-family: 'Caveat', cursive;
  background-image: url('./assets/compass.jpg');
  background-color: rgba(255, 255, 255, 0.4);
  background-blend-mode: lighten;
  background-position: 70%;
  background-size: cover;
  background-repeat: repeat;
}
h1 {
  margin: 0;
}
header {
  text-align: center;
  border-bottom: 3px solid black;
  min-height: 60px;
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
.content {
  padding-left: 20%;
}
h2 {
  display: inline-block;
  font-size: 2.5em;
}
h3 {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 5px;
  border-bottom: 2px solid black;
}
</style>