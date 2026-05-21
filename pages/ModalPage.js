class ModalPage {
  constructor(page) {
    this.page = page;
  }

  contactTitle() {
    return this.page.locator('#exampleModalLabel');
  }

  signupTitle() {
    return this.page.locator('#signInModalLabel');
  }

  loginTitle() {
    return this.page.locator('#logInModalLabel');
  }

  orderTitle() {
    return this.page.locator('#orderModalLabel');
  }
}

module.exports = { ModalPage };