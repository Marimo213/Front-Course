import { ref } from 'vue'
import ProductService from '@/classes/ProductService.js'

const service = new ProductService()

export function useProducts() {
  const products = ref([])
  const categories = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    try {
      products.value = await service.fetchAll()
    } catch (e) {
      error.value = e.message ?? 'Ошибка загрузки товаров'
    } finally {
      isLoading.value = false
    }
  }

  async function fetchCategories() {
    try {
      categories.value = await service.fetchCategories()
    } catch {
      categories.value = []
    }
  }

  return { products, categories, isLoading, error, fetchProducts, fetchCategories }
}
