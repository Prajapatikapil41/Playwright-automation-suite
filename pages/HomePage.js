const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  async open() {
    await super.open('/');
  }

  category(name) {
    return this.page.locator('.list-group-item', { hasText: name });
  }

  async openCategory(name) {
    await this.click(this.category(name));
  }

  async openCart() {
    await this.click(this.page.locator('#cartur'));
  }

  async openContactModal() {
    await this.click(this.page.getByRole('link', { name: 'Contact' }));
  }

  async openLoginModal() {
    await this.click(this.page.getByRole('link', { name: 'Log in' }));
  }

  async openSignUpModal() {
    await this.click(this.page.getByRole('link', { name: 'Sign up' }));
  }

  async openAboutModal() {
    await this.click(this.page.getByRole('link', { name: 'About us' }));
  }
}

module.exports = { HomePage };