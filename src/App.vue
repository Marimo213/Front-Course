<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
</script>

<style>
@import '@/assets/styles/main.css';
@import '@/assets/styles/bem-utils.css';

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__main {
  flex: 1;
  padding: 24px 0;
}
</style>
