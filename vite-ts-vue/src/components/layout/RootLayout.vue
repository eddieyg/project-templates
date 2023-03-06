<template>
  <div class="root-layout">
    <h1>vite-ts-vue</h1>
    <nav>
      <ul>
        <li v-for="nav in navList" :key="nav.name">
          <router-link :to="{ name: nav.name }">
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import routes from '@/router/routes'

const navList = routes[0].children
</script>

<style lang="scss" scoped>
.root-layout {
  border: 1px solid #ddd;
  min-width: 1200px;
}
</style>
