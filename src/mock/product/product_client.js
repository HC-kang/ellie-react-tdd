class ProductClient {
  async fetchItems() {
    return await fetch('http://example.com/login/id+password').then((response) => {
      response.json();
    });
  }
}

module.exports = ProductClient;
