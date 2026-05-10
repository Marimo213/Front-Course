import axios from 'axios'
import Product from './Product.js'

const BASE_URL = 'https://fakestoreapi.com'

export default class ProductService {
  constructor() {
    this._cache = new Map()
  }

  async fetchAll() {
    if (this._cache.has('all')) return this._cache.get('all')
    try {
      const { data } = await axios.get(`${BASE_URL}/products`)
      const products = data.map((p) => new Product(p))
      this._cache.set('all', products)
      return products
    } catch {
      return this._loadFallback()
    }
  }

  async fetchById(id) {
    const cacheKey = `product_${id}`
    if (this._cache.has(cacheKey)) return this._cache.get(cacheKey)
    try {
      const { data } = await axios.get(`${BASE_URL}/products/${id}`)
      const product = new Product(data)
      this._cache.set(cacheKey, product)
      return product
    } catch {
      const all = await this.fetchAll()
      return all.find((p) => p.id === Number(id)) ?? null
    }
  }

  async fetchCategories() {
    if (this._cache.has('categories')) return this._cache.get('categories')
    try {
      const { data } = await axios.get(`${BASE_URL}/products/categories`)
      this._cache.set('categories', data)
      return data
    } catch {
      const all = await this.fetchAll()
      const cats = [...new Set(all.map((p) => p.category))]
      return cats
    }
  }

  async _loadFallback() {
    const { default: data } = await import('@/assets/data/products.json')
    const products = data.map((p) => new Product(p))
    this._cache.set('all', products)
    return products
  }
}
