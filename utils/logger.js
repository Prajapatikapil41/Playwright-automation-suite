const { test } = require('@playwright/test');

async function logStep(message, action) {
  await test.step(message, async () => {
    console.log(`STEP: ${message}`);
    await action();
  });
}

module.exports = { logStep };