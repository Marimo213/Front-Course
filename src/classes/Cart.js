import CartItem from './CartItem.js'

export default class Cart {
  constructor(items = []) {
    this.items = items.map((i) => new CartItem(i.product, i.quantity))
  }

  add(product) {
    const existing = this.items.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      this.items.push(product.toCartItem())
    }
  }

  remove(productId) {
    this.items = this.items.filter((i) => i.product.id !== productId)
  }

  increaseQty(productId) {
    const item = this.items.find((i) => i.product.id === productId)
    if (item) item.quantity += 1
  }

  decreaseQty(productId) {
    const item = this.items.find((i) => i.product.id === productId)
    if (item && item.quantity > 1) item.quantity -= 1
  }

  get total() {
    return this.items.reduce((sum, i) => sum + i.subtotal, 0)
  }

  get formattedTotal() {
    return `$${this.total.toFixed(2)}`
  }

  get itemCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0)
  }

  get isEmpty() {
    return this.items.length === 0
  }

  toJSON() {
    return this.items.map((i) => ({ product: i.product, quantity: i.quantity }))
  }
}
