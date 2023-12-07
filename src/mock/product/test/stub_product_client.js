class StubProductClient {
  async fetchItems() {
    return [
      { item: 'item1', isAvailable: true },
      { item: 'item2', isAvailable: false },
    ];
  }
}

module.exports = StubProductClient;
