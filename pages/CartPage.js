const { BasePage } = require('./BasePage');

class CartPage extends BasePage {
  async open() {
    await super.open('/cart.html');
  }

  rows() {
    return this.page.locator('#tbodyid tr');
  }

  deleteBtn() {
    return this.page.getByText('Delete');
  }

  async deleteFirstItem() {
    await this.click(this.deleteBtn().first());
  }

  placeOrderBtn() {
    return this.page.getByRole('button', { name: 'Place Order' });
  }

  async openPlaceOrder() {
    await this.click(this.placeOrderBtn());
  }
}

module.exports = { CartPage };