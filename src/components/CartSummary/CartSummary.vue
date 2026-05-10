<template>
  <div class="cart-summary">
    <h2 class="cart-summary__title">Итого</h2>
    <div class="cart-summary__row">
      <span class="cart-summary__label">Товаров:</span>
      <span class="cart-summary__value">{{ cartStore.itemCount }} шт.</span>
    </div>
    <div class="cart-summary__row cart-summary__row--total">
      <span class="cart-summary__label">Сумма:</span>
      <span class="cart-summary__total">{{ cartStore.total }}</span>
    </div>
    <button class="cart-summary__btn" disabled>Оформить заказ</button>
    <p class="cart-summary__note">Функция оформления заказа не реализована (демо)</p>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
</script>

<style scoped>
.cart-summary {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart-summary__title {
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 12px;
}

.cart-summary__row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
}

.cart-summary__row--total {
  padding-top: 8px;
  border-top: 1px solid var(--color-border);
}

.cart-summary__total {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.cart-summary__btn {
  padding: 12px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: not-allowed;
  opacity: 0.6;
  margin-top: 4px;
}

.cart-summary__note {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-align: center;
}
</style>
