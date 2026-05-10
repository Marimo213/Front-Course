<template>
  <div class="app-spinner" role="status" aria-label="Загрузка...">
    <div class="app-spinner__circle"></div>
  </div>
</template>

<style scoped>
.app-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
}

.app-spinner__circle {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
