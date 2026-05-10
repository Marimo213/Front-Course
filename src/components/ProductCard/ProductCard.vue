<template>
  <article class="product-card">
    <RouterLink class="product-card__image-wrap" :to="`/product/${product.id}`">
      <img class="product-card__image" :src="product.image" :alt="product.title" loading="lazy" />
    </RouterLink>

    <div class="product-card__body">
      <span class="product-card__category">{{ product.category }}</span>

      <RouterLink class="product-card__title" :to="`/product/${product.id}`">
        {{ product.title }}
      </RouterLink>

      <div class="product-card__rating">
        <span class="product-card__stars">{{ stars }}</span>
        <span class="product-card__rating-count">({{ product.rating.count }})</span>
      </div>

      <div class="product-card__footer">
        <span class="product-card__price">{{ product.formattedPrice }}</span>
        <button
          class="product-card__btn"
          :class="{ 'product-card__btn--added': inCart }"
          @click="handleCart"
        >
          {{ inCart ? '✓ В корзине' : '+ В корзину' }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore.js'

const props = defineProps({
  product: { type: Object, required: true },
})

const cartStore = useCartStore()
const inCart = computed(() => cartStore.hasProduct(props.product.id))

const stars = computed(() => {
  const full = props.product.ratingStars
  return '★'.repeat(full) + '☆'.repeat(5 - full)
})

function handleCart() {
  if (!inCart.value) cartStore.addProduct(props.product)
}
</script>

<style scoped>
.product-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}

.product-card:hover {
  box-shadow: var(--shadow-md);
}

.product-card__image-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #f1f5f9;
}

.product-card__image {
  max-height: 180px;
  object-fit: contain;
  transition: transform 0.2s;
}

.product-card__image-wrap:hover .product-card__image {
  transform: scale(1.05);
}

.product-card__body {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.product-card__category {
  font-size: 0.75rem;
  text-transform: capitalize;
  color: var(--color-text-secondary);
  background-color: var(--color-bg);
  padding: 2px 8px;
  border-radius: 20px;
  align-self: flex-start;
}

.product-card__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  text-decoration: none;
}

.product-card__title:hover {
  color: var(--color-primary);
}

.product-card__rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
}

.product-card__stars {
  color: var(--color-accent);
  letter-spacing: 1px;
}

.product-card__rating-count {
  color: var(--color-text-secondary);
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid var(--color-border);
  gap: 8px;
}

.product-card__price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
}

.product-card__btn {
  padding: 6px 12px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.product-card__btn:hover {
  background-color: var(--color-primary-hover);
}

.product-card__btn--added {
  background-color: var(--color-success);
  cursor: default;
}

.product-card__btn--added:hover {
  background-color: var(--color-success);
}
</style>
