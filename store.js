'use strict';

class Store {
  constructor(options = {}) {
    this.name = options.name;
    this.refreshPeriod = options.refreshPeriod | 2000;
    this.products = [];
    setInterval(() => this.refreshAll(this.products), this.refreshPeriod);
  }

  alert(product) {
    console.log(`[${product.store.name}] Product ${product.name} (${product.id}) - $${product.price}: In stock.`);
  }

  addProduct(product) {
    product.store = this;
    this.products.push(product);
    product.refresh();
  }

  async refreshAll(products) {
    products.map(async (product) => {
      await product.refresh();
    })
  }
}

module.exports = Store;