export default class Item {
    #name
    #category
    #description
    #value
    #quantity
  
    constructor({ name, category, description, value = undefined, quantity = undefined }) {
      this.#name = name
      this.#category = category
      this.#description = description
      this.#value = value
      this.#quantity = quantity
      this.validation()
    }
  
    validation() {
      if (this.#value === undefined) throw new Error("Value is required")
      if (this.#quantity === undefined) throw new Error("Quantity is required")
    }
  
    getTotalValue() {
      return this.#quantity * this.#value
    }
  }