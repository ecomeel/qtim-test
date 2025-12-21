<template>
  <nav class="navigation">
    <NuxtLink
      v-for="item in NAVIGATIONS" 
      :key="item.name"
      :to="item.link"
    >
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { NAVIGATIONS } from '../lib/navigation';
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  gap: 4vw;
}
</style>