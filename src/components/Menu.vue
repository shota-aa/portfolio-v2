<script lang="ts" setup>
import { MenuIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'
const isModalOpen = ref(false)
const linkNumber = ref(0)
function handleModalMove(number: number) {
  if (isModalOpen.value === true) {
    isModalOpen.value = false
  } else {
    isModalOpen.value = true
  }
  linkNumber.value = number
}
</script>
<template>
<div class="menu_bar">
  <div v-if="!isModalOpen" class="off">
    <MenuIcon @click="handleModalMove(linkNumber)" class="menu_icon"/>
  </div>
  <div v-else class="on">
    <MenuIcon @click="handleModalMove(linkNumber)" class="menu_icon"/>
    <router-link to="/" class="link" :class="linkNumber === 0 ? 'selected' : ''" @click="handleModalMove(0)">introduction</router-link>
    <router-link to="/works" class="link" :class="linkNumber === 1 ? 'selected' : ''" @click="handleModalMove(1)">works</router-link>
  </div>
</div>
</template>
<style>
.menu_bar {
  text-align: center;
  height: 100%;
}
.off {
  width: 50px;
}
.on {
  background-color: rgba(256, 256, 256, 0.8);
  width: 120px;
  height: 100%;
}
.link {
  display: block;
  margin-top: 50px;
  padding: 10px;
  border-radius: 30px;
}
.selected {
  background-color: bisque;
}
.menu_icon {
  display: block;
  margin-bottom: 50px;
  width: 50px;
}
</style>