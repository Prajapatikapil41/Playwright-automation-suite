class BasePage {

  constructor(page) {
    this.page = page;
  }

  async open(path = '/') {

    await this.page.goto(path, {
      waitUntil: 'domcontentloaded'
    });

    await this.page.waitForTimeout(1500);
  }

  async click(locator) {

    await this.highlight(locator);

    await locator.waitFor({
      state: 'visible'
    });

    await locator.click();
  }

  async fill(locator, value) {

    await this.highlight(locator);

    await locator.waitFor({
      state: 'visible'
    });

    await locator.fill(value);
  }

  async highlight(locator) {

    await locator.evaluate((el) => {

      el.style.border = '3px solid red';
      el.style.backgroundColor = 'yellow';

    }).catch(() => {});
  }
}

module.exports = { BasePage };