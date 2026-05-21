const { BasePage } = require('./BasePage');

class ProductPage extends BasePage {
  name() {
    return this.page.locator('.name');
  }

  price() {
    return this.page.locator('.price-container');
  }

  addToCartBtn() {
    return this.page.getByRole('link', { name: 'Add to cart' });
  }

  async addToCart() {
  await this.page.waitForResponse(resp =>
    resp.url().includes('addtocart') && resp.status() === 200
  );

  await this.clickAndAcceptDialog(() =>
    this.addToCartButton().click()
  );
}
}

module.exports = { ProductPage };