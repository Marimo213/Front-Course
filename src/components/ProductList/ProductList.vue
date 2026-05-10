<template>
  <div class="product-list">
    <slot v-if="!products.length" name="empty">
      <p class="product-list__empty">Товары не найдены</p>
    </slot>
    <ul v-else class="product-list__grid">
      <li v-for="product in products" :key="product.id" class="product-list__item">
        <ProductCard :product="product" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard/ProductCard.vue'

defineProps({
  products: { type: Array, default: () => [] },
})
</script>

<style scoped>
.product-list__grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.product-list__empty {
  text-align: center;
  color: var(--color-text-secondary);
  padding: 48px 0;
  font-size: 1.1rem;
}

@media (min-width: 480px) {
  .product-list__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .product-list__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1024px) {
  .product-list__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1280px) {
  .product-list__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
