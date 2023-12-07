const ProductService = require('../product_service');
const StubProductClient = require('./stub_product_client');

describe('ProductService - stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should return only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items).toEqual([{ item: 'item1', isAvailable: true }]);
  });
});
