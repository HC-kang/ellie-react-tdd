const fetchProduct = require('../async.js');

describe('async', () => {
  it('async - done', (done) => {
    const product = fetchProduct().then((data) => {
      expect(data).toEqual({ item: 'Milk', price: 200 });
    });
    done()
  });

  it('async - return', () => {
    return fetchProduct().then((data) => {
      expect(data).toEqual({ item: 'Milk', price: 200 });
    });
  });

  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', async () => {
    await expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });

  it('async - rejects', async () => {
    await expect(fetchProduct('error')).rejects.toEqual('network error');
  });
});
