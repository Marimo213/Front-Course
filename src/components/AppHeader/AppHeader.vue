<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <RouterLink class="app-header__logo" to="/">
        <span class="app-header__logo-icon">🛍️</span>
        <span class="app-header__logo-text">VueShop</span>
      </RouterLink>

      <nav class="app-header__nav">
        <RouterLink class="app-header__nav-link" to="/">Каталог</RouterLink>
        <RouterLink class="app-header__cart-btn" to="/cart">
          <span class="app-header__cart-icon">🛒</span>
          <span v-if="cartStore.itemCount > 0" class="app-header__cart-badge">
            {{ cartStore.itemCount }}
          </span>
          <span class="app-header__cart-label">Корзина</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()
</script>

<style scoped>
.app-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow);
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.app-header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
}

.app-header__logo:hover {
  text-decoration: none;
  color: var(--color-primary);
}

.app-header__logo-icon {
  font-size: 1.5rem;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.app-header__nav-link {
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: color 0.2s;
}

.app-header__nav-link:hover,
.app-header__nav-link.router-link-active {
  color: var(--color-primary);
  text-decoration: none;
}

.app-header__cart-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background-color: var(--color-primary);
  color: #fff;
  border-radius: var(--radius);
  font-weight: 600;
  position: relative;
  transition: background-color 0.2s;
  text-decoration: none;
}

.app-header__cart-btn:hover {
  background-color: var(--color-primary-hover);
  text-decoration: none;
  color: #fff;
}

.app-header__cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--color-accent);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.app-header__cart-label {
  display: none;
}

@media (min-width: 480px) {
  .app-header__cart-label {
    display: inline;
  }
}
</style>
