'use strict';

class Product {
  constructor(options = {}) {
    this.id = options.id;
    this.store = options.store;
    this.priceRange = options.priceRange;
  }

  async refresh() {
    const info = await this.store.getInfo(this);
    this.name = info.name;
    this.price = info.price;
    this.inStock = info.inStock;

    if (this.inStock) {
      if (this.validatePrice()) {
        this.store.alert(this);
      }
    }
  }

  validatePrice() {
    return true;
  }
}

module.exports = Product;