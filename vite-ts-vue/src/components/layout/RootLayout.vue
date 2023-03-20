<template>
  <div class="root-layout">
    <header class="root-header">
      <h1>{{ packageInfo.name }}</h1>
      <nav>
        <ul>
          <li v-for="nav in navList" :key="nav.name">
            <router-link :to="{ name: nav.name }">
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import packageInfo from '../../../package.json'
import routes from '@/router/routes'

const navList = routes[0].children
</script>

<style lang="scss" scoped>
.root-layout {
  width: 1200px;
  padding-top: 100px;
  .root-header {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid $main-border-color;
    height: 60px;
    border-radius: $border-radius-m;
    background-color: #ffffff;
    position: fixed;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    h1 {
      padding: 0px 30px;
    }
    nav {
      height: 100%;
      ul {
        display: flex;
        height: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
        li {
          height: 100%;
          list-style: none;
          padding: 0px 20px;
          border-left: 1px solid $main-border-color;
          display: flex;
          align-items: center;
          a{
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
