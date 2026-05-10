export default class CartItem {
  constructor(product, quantity = 1) {
    this.product = product
    this.quantity = quantity
  }

  get subtotal() {
    return this.product.price * this.quantity
  }

  get formattedSubtotal() {
    return `$${this.subtotal.toFixed(2)}`
  }
}
