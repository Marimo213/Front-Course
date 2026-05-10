<template>
  <div class="app-error">
    <p class="app-error__icon">⚠️</p>
    <p class="app-error__message">{{ message }}</p>
    <button v-if="onRetry" class="app-error__btn" @click="onRetry">Повторить</button>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String, default: 'Произошла ошибка' },
  onRetry: { type: Function, default: null },
})
</script>

<style scoped>
.app-error {
  text-align: center;
  padding: 48px 0;
}

.app-error__icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.app-error__message {
  color: var(--color-danger);
  margin-bottom: 16px;
  font-size: 1rem;
}

.app-error__btn {
  padding: 10px 24px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.app-error__btn:hover {
  background-color: var(--color-primary-hover);
}
</style>
