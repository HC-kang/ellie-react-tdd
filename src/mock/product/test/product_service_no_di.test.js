const ProductService = require('../product_service_no_di');
const ProductClient = require('../product_client');

jest.mock('../product_client');

describe('ProductService', () => {
  const fetchItems = jest.fn(async () => [
    { item: 'item1', isAvailable: true },
    { item: 'item2', isAvailable: false },
  ])
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  })
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toEqual(1);
    expect(items).toEqual([{ item: 'item1', isAvailable: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  })
});
