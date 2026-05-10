<template>
  <div class="search-bar">
    <input
      class="search-bar__input"
      type="search"
      :value="modelValue"
      placeholder="Поиск товаров..."
      @input="onInput"
    />
    <span class="search-bar__icon">🔍</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

let timer = null

function onInput(event) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    emit('update:modelValue', event.target.value)
  }, 300)
}
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
}

.search-bar__input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 0.95rem;
  background-color: var(--color-surface);
  color: var(--color-text);
  transition: border-color 0.2s;
  outline: none;
}

.search-bar__input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
}

.search-bar__icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
}
</style>
