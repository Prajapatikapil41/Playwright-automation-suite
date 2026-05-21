const { BasePage } = require('./BasePage');

class ModalPage extends BasePage {

  contactTitle() {
    return this.page.locator('#exampleModalLabel');
  }

  signUpTitle() {
    return this.page.locator('#signInModalLabel');
  }

  loginTitle() {
    return this.page.locator('#logInModalLabel');
  }

  aboutTitle() {
    return this.page.locator('#videoModalLabel');
  }

  placeOrderTitle() {
    return this.page.locator('#orderModalLabel');
  }
}

module.exports = { ModalPage };