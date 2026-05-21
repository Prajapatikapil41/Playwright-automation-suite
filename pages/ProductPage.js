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

    await this.highlight(this.addToCartBtn());

    const dialogPromise = this.page.waitForEvent('dialog');

    await this.addToCartBtn().click();

    const dialog = await dialogPromise;
    await dialog.accept();

    await this.page.waitForTimeout(2000);
  }
}

module.exports = { ProductPage };