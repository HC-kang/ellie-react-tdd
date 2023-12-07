const ProductClient = require('./product_client');

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.isAvailable));
  }
}

module.exports = ProductService;
