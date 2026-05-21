const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { ModalPage } = require('../pages/ModalPage');
const { demoUsers, products, uniqueUsername, uniquePassword } = require('../utils/testData');
const { logStep } = require('../utils/logger');

test.describe('Demoblaze E2E Suite', () => {

  test('1. Home page loads @smoke', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await expect.soft(page.locator('#navbarExample')).toBeVisible();
  });

  test('2. Category filtering @smoke', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openCategory('Phones');
    await expect.soft(home.productCard(products.phone)).toBeVisible();
  });

  test('3. Product page details', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.open();
    await home.click(home.productCard(products.phone));

    await expect(product.name()).toHaveText(products.phone);
    await expect(product.price()).toContainText('$');
  });

  test('4. Add product to cart @cart', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await home.open();
    await home.click(home.productCard(products.phone));
    await product.addToCart();

    await cart.open();
    await expect(cart.rows()).toHaveCount(1, { timeout: 15000 });
  });

  test('5. Remove product from cart @cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.open();
    await cart.clearCart();
    await expect(cart.rows()).toHaveCount(0);
  });

  test('6. Contact modal', async ({ page }) => {
    const home = new HomePage(page);
    const modal = new ModalPage(page);

    await home.open();
    await home.openContactModal();

    await expect(modal.contactTitle()).toHaveText('New message');
  });

  test('7. Sign up modal', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openSignUpModal();

    await page.locator('#sign-username').fill(uniqueUsername());
    await page.locator('#sign-password').fill(uniquePassword());
  });

  test('8. Login modal', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openLoginModal();
    await expect(page.locator('#loginusername')).toBeVisible();
  });

  test('9. About modal', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openAboutModal();
    await expect(page.locator('#videoModalLabel')).toBeVisible();
  });

  test('10. Cart page loads', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.open();
    await expect(cart.placeOrderBtn()).toBeVisible();
  });

  test('11. Place order modal', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.open();
    await cart.openPlaceOrder();
    await expect(page.locator('#orderModal')).toBeVisible();
  });

  test('12. Multi-category navigation', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.openCategory('Laptops');
    await home.openCategory('Monitors');
  });

});