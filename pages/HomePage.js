const { BasePage } = require('./BasePage');

class HomePage extends BasePage {

  async open() {
    await super.open('/');
  }

  categoryLink(name) {
    return this.page.locator('.list-group-item', {
      hasText: name
    }).first();
  }

  productCard(title) {
    return this.page.locator('.card-title', {
      hasText: title
    }).first();
  }

  async openCategory(name) {

    await this.click(this.categoryLink(name));

    await this.page.waitForTimeout(2000);
  }

  async openContactModal() {

    await this.click(
      this.page.getByRole('link', {
        name: 'Contact'
      })
    );
  }

  async openSignUpModal() {

    await this.click(
      this.page.getByRole('link', {
        name: 'Sign up'
      })
    );
  }

  async openLoginModal() {

    await this.click(
      this.page.getByRole('link', {
        name: 'Log in'
      })
    );
  }

  async openAboutModal() {

    await this.click(
      this.page.getByRole('link', {
        name: 'About us'
      })
    );
  }
}

module.exports = { HomePage };