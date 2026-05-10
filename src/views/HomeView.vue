<template>
  <div class="home-view">
    <div class="home-view__controls">
      <SearchBar v-model="searchQuery" class="home-view__search" />
      <CategoryFilter
        :categories="categories"
        :selected="selectedCategory"
        class="home-view__filter"
        @select="selectedCategory = $event"
      />
    </div>

    <AppSpinner v-if="isLoading" />
    <AppError v-else-if="error" :message="error" :on-retry="fetchProducts" />
    <ProductList v-else :products="filteredProducts">
      <template #empty>
        <p class="home-view__empty">Товары не найдены. Попробуйте изменить параметры поиска.</p>
      </template>
    </ProductList>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter.vue'
import ProductList from '@/components/ProductList/ProductList.vue'
import AppSpinner from '@/components/AppSpinner/AppSpinner.vue'
import AppError from '@/components/AppError/AppError.vue'
import { useProducts } from '@/composables/useProducts.js'

const { products, categories, isLoading, error, fetchProducts, fetchCategories } = useProducts()

const searchQuery = ref('')
const selectedCategory = ref(null)

const filteredProducts = computed(() => {
  let list = products.value
  if (selectedCategory.value) {
    list = list.filter((p) => p.category === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter((p) => p.title.toLowerCase().includes(q))
  }
  return list
})

onMounted(async () => {
  await fetchProducts()
  await fetchCategories()
})
</script>

<style scoped>
.home-view__controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.home-view__search {
  width: 100%;
}

.home-view__empty {
  text-align: center;
  color: var(--color-text-secondary);
  padding: 48px 0;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .home-view__controls {
    flex-direction: row;
    align-items: flex-start;
  }

  .home-view__search {
    max-width: 360px;
  }
}
</style>
