import { defineStore } from 'pinia'
import { reactive, computed, watch } from 'vue'
import Cart from '@/classes/Cart.js'
import Product from '@/classes/Product.js'

const STORAGE_KEY = 'vue-shop-cart'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw).map((i) => ({ product: new Product(i.product), quantity: i.quantity }))
  } catch {
    return []
  }
}

export const useCartStore = defineStore('cart', () => {
  const cart = reactive(new Cart(loadFromStorage()))

  watch(
    () => cart.items.map((i) => ({ id: i.product.id, qty: i.quantity })),
    () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart.toJSON()))
    },
    { deep: true }
  )

  const total = computed(() => cart.formattedTotal)
  const itemCount = computed(() => cart.itemCount)
  const isEmpty = computed(() => cart.isEmpty)
  const items = computed(() => cart.items)

  function addProduct(product) {
    cart.add(product)
  }

  function removeProduct(productId) {
    cart.remove(productId)
  }

  function increaseQty(productId) {
    cart.increaseQty(productId)
  }

  function decreaseQty(productId) {
    cart.decreaseQty(productId)
  }

  function hasProduct(productId) {
    return cart.items.some((i) => i.product.id === productId)
  }

  return { items, total, itemCount, isEmpty, addProduct, removeProduct, increaseQty, decreaseQty, hasProduct }
})
