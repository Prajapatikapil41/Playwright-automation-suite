const { BasePage } = require('./BasePage');

class CartPage extends BasePage {

  async open() {
    await super.open('/cart.html');
  }

  rows() {
    return this.page.locator('#tbodyid tr');
  }

  deleteBtns() {
    return this.page.getByText('Delete');
  }

  async deleteFirstItem() {
    await this.click(this.deleteBtns().first());
  }

  async clearCart() {
    while (await this.rows().count() > 0) {
      await this.deleteFirstItem();

      // wait for row removal
      await this.page.waitForTimeout(1500);
    }
  }

  placeOrderBtn() {
    return this.page.getByRole('button', { name: 'Place Order' });
  }

  async openPlaceOrder() {
    await this.click(this.placeOrderBtn());
  }
}

module.exports = { CartPage };