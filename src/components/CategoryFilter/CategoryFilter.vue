<template>
  <div class="category-filter">
    <button
      class="category-filter__btn"
      :class="{ 'category-filter__btn--active': selected === null }"
      @click="emit('select', null)"
    >
      Все
    </button>
    <button
      v-for="cat in categories"
      :key="cat"
      class="category-filter__btn"
      :class="{ 'category-filter__btn--active': selected === cat }"
      @click="emit('select', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: { type: Array, default: () => [] },
  selected: { type: String, default: null },
})

const emit = defineEmits(['select'])
</script>

<style scoped>
.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-filter__btn {
  padding: 6px 14px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  cursor: pointer;
  text-transform: capitalize;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;
}

.category-filter__btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.category-filter__btn--active {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}
</style>
