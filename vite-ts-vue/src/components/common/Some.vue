<template>
  <div>
    <h1>{{ val }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ val: string }>()
</script>

<style scoped>
</style>
