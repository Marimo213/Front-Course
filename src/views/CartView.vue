<template>
  <div class="cart-view">
    <h1 class="cart-view__title">Корзина</h1>

    <div v-if="cartStore.isEmpty" class="cart-view__empty">
      <p class="cart-view__empty-icon">🛒</p>
      <p class="cart-view__empty-text">Ваша корзина пуста</p>
      <RouterLink class="cart-view__catalog-link" to="/">Перейти в каталог</RouterLink>
    </div>

    <div v-else class="cart-view__content">
      <ul class="cart-view__list">
        <CartItem v-for="item in cartStore.items" :key="item.product.id" :item="item" />
      </ul>
      <CartSummary class="cart-view__summary" />
    </div>
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem/CartItem.vue'
import CartSummary from '@/components/CartSummary/CartSummary.vue'
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
</script>

<style scoped>
.cart-view__title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.cart-view__empty {
  text-align: center;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.cart-view__empty-icon {
  font-size: 4rem;
}

.cart-view__empty-text {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
}

.cart-view__catalog-link {
  padding: 10px 24px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  margin-top: 8px;
}

.cart-view__catalog-link:hover {
  background-color: var(--color-primary-hover);
  text-decoration: none;
  color: #fff;
}

.cart-view__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;
}

.cart-view__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (min-width: 1024px) {
  .cart-view__content {
    grid-template-columns: 1fr 320px;
  }
}
</style>
