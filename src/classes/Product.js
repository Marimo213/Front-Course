import CartItem from './CartItem.js'

export default class Product {
  constructor({ id, title, price, description, category, image, rating }) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.category = category
    this.image = image
    this.rating = rating ?? { rate: 0, count: 0 }
  }

  get formattedPrice() {
    return `$${this.price.toFixed(2)}`
  }

  get ratingStars() {
    return Math.round(this.rating.rate)
  }

  toCartItem() {
    return new CartItem(this, 1)
  }
}
