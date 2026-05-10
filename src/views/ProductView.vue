<template>
  <div class="product-view">
    <button class="product-view__back" @click="router.back()">← Назад</button>

    <AppSpinner v-if="isLoading" />
    <AppError v-else-if="error" :message="error" />

    <div v-else-if="product" class="product-view__content">
      <div class="product-view__image-wrap">
        <img class="product-view__image" :src="product.image" :alt="product.title" />
      </div>

      <div class="product-view__details">
        <span class="product-view__category">{{ product.category }}</span>
        <h1 class="product-view__title">{{ product.title }}</h1>

        <div class="product-view__rating">
          <span class="product-view__stars">{{ stars }}</span>
          <span class="product-view__rating-text">
            {{ product.rating.rate }} / 5 ({{ product.rating.count }} оценок)
          </span>
        </div>

        <p class="product-view__description">{{ product.description }}</p>

        <div class="product-view__footer">
          <span class="product-view__price">{{ product.formattedPrice }}</span>
          <button
            class="product-view__btn"
            :class="{ 'product-view__btn--added': inCart }"
            @click="handleCart"
          >
            {{ inCart ? '✓ В корзине' : '+ Добавить в корзину' }}
          </button>
          <RouterLink v-if="inCart" class="product-view__cart-link" to="/cart">
            Перейти в корзину →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppSpinner from '@/components/AppSpinner/AppSpinner.vue'
import AppError from '@/components/AppError/AppError.vue'
import { useProduct } from '@/composables/useProduct.js'
import { useCartStore } from '@/stores/cartStore.js'

const props = defineProps({ id: { type: String, required: true } })
const router = useRouter()
const { product, isLoading, error } = useProduct(props.id)
const cartStore = useCartStore()

const inCart = computed(() => product.value && cartStore.hasProduct(product.value.id))
const stars = computed(() => {
  if (!product.value) return ''
  const full = product.value.ratingStars
  return '★'.repeat(full) + '☆'.repeat(5 - full)
})

function handleCart() {
  if (!inCart.value && product.value) cartStore.addProduct(product.value)
}
</script>

<style scoped>
.product-view__back {
  margin-bottom: 20px;
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 6px 0;
}

.product-view__back:hover {
  text-decoration: underline;
}

.product-view__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.product-view__image-wrap {
  background-color: #f1f5f9;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  min-height: 280px;
}

.product-view__image {
  max-height: 320px;
  object-fit: contain;
}

.product-view__details {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.product-view__category {
  font-size: 0.8rem;
  text-transform: capitalize;
  color: var(--color-text-secondary);
  background-color: var(--color-bg);
  padding: 4px 12px;
  border-radius: 20px;
  align-self: flex-start;
  border: 1px solid var(--color-border);
}

.product-view__title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.product-view__rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-view__stars {
  color: var(--color-accent);
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.product-view__rating-text {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.product-view__description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 0.95rem;
}

.product-view__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--color-border);
}

.product-view__price {
  font-size: 2rem;
  font-weight: 700;
}

.product-view__btn {
  padding: 12px 24px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product-view__btn:hover {
  background-color: var(--color-primary-hover);
}

.product-view__btn--added {
  background-color: var(--color-success);
  cursor: default;
}

.product-view__btn--added:hover {
  background-color: var(--color-success);
}

.product-view__cart-link {
  font-size: 0.9rem;
  font-weight: 500;
}

@media (min-width: 768px) {
  .product-view__content {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

@media (min-width: 1024px) {
  .product-view__content {
    grid-template-columns: 420px 1fr;
  }
}
</style>
