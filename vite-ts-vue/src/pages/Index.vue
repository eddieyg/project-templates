<template>
  <main class="index-page">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="~@assets/image/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <HelloWorld msg="HelloWorld" />
  </main>
</template>

<script setup lang="ts">
import HelloWorld from '@comps/Index/HelloWorld.vue'
import { queryTestList } from '@/api'

async function queryTest() {
  const res = await queryTestList()
  console.log(res)
}
queryTest()
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
