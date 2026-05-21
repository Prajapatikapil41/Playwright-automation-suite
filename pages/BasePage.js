const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async open(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });

    // Instead of networkidle, wait for a real UI element
    await this.page.locator('#navbarExample').waitFor({ state: 'visible' });
  }

  async highlight(locator) {
    await locator.evaluate(el => {
      el.style.outline = '3px solid red';
    });
  }

  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await this.highlight(locator);
    await locator.click();
  }

  async fill(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await this.highlight(locator);
    await locator.fill(value);
  }

  async clickAndAcceptDialog(action) {
    const dialogPromise = this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null);
    await action();
    const dialog = await dialogPromise;
    if (dialog) await dialog.accept();
  }

  productCard(title) {
    return this.page.locator('#tbodyid .card-title a', { hasText: title }).first();
  }
}

module.exports = { BasePage };