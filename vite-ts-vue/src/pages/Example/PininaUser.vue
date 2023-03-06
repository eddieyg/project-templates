<template>
  <section class="pinina-user">
    <p>info: {{ user.info }}</p>
    <p>isLogin: {{ user.isLogin }}</p>
    <p>
      <button @click="user.login({ id: 111, name: 'user001' })">
        login
      </button>
      <button @click="user.logout()">
        logout
      </button>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const user = useUserStore()
</script>

<style lang="scss" scoped>
.pinina-user {
  border: 1px solid salmon;
}
</style>
