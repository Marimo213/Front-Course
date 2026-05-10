import { ref } from 'vue'
import ProductService from '@/classes/ProductService.js'

const service = new ProductService()

export function useProduct(id) {
  const product = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  async function fetchProduct() {
    isLoading.value = true
    error.value = null
    try {
      product.value = await service.fetchById(id)
      if (!product.value) error.value = 'Товар не найден'
    } catch (e) {
      error.value = e.message ?? 'Ошибка загрузки товара'
    } finally {
      isLoading.value = false
    }
  }

  fetchProduct()

  return { product, isLoading, error }
}
