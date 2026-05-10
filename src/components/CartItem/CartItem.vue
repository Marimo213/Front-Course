<template>
  <li class="cart-item">
    <img class="cart-item__image" :src="item.product.image" :alt="item.product.title" />

    <div class="cart-item__info">
      <RouterLink class="cart-item__title" :to="`/product/${item.product.id}`">
        {{ item.product.title }}
      </RouterLink>
      <span class="cart-item__price">{{ item.product.formattedPrice }} / шт.</span>
    </div>

    <div class="cart-item__controls">
      <button class="cart-item__qty-btn" @click="cartStore.decreaseQty(item.product.id)">−</button>
      <span class="cart-item__qty">{{ item.quantity }}</span>
      <button class="cart-item__qty-btn" @click="cartStore.increaseQty(item.product.id)">+</button>
    </div>

    <span class="cart-item__subtotal">{{ item.formattedSubtotal }}</span>

    <button class="cart-item__remove" title="Удалить" @click="cartStore.removeProduct(item.product.id)">
      ✕
    </button>
  </li>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

defineProps({
  item: { type: Object, required: true },
})

const cartStore = useCartStore()
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.cart-item__image {
  width: 72px;
  height: 72px;
  object-fit: contain;
  flex-shrink: 0;
  background-color: #f1f5f9;
  border-radius: 6px;
  padding: 4px;
}

.cart-item__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cart-item__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
}

.cart-item__title:hover {
  color: var(--color-primary);
}

.cart-item__price {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}

.cart-item__controls {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.cart-item__qty-btn {
  width: 28px;
  height: 28px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-surface);
  cursor: pointer;
  transition: background-color 0.15s;
}

.cart-item__qty-btn:hover {
  background-color: var(--color-bg);
}

.cart-item__qty {
  min-width: 28px;
  text-align: center;
  font-weight: 600;
  font-size: 0.95rem;
}

.cart-item__subtotal {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text);
  min-width: 64px;
  text-align: right;
  flex-shrink: 0;
}

.cart-item__remove {
  color: var(--color-danger);
  font-size: 0.9rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.15s;
}

.cart-item__remove:hover {
  background-color: #fee2e2;
}
</style>
