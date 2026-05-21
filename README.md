# DemoBlaze Playwright Automation Suite

A clean Playwright framework for testing the public DemoBlaze demo store.

## What is covered

- Home page and category navigation
- Product detail pages
- Add to cart and cart removal
- Contact modal
- Sign up modal
- Log in modal
- About us modal
- Place Order modal

## Stack

- Playwright Test
- JavaScript
- Page Object Model
- GitHub Actions

## Getting started

```bash
npm install
npx playwright install
```

Run the suite:

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

## Base URL

The suite defaults to:

```bash
https://www.demoblaze.com
```

You can override it with:

```bash
BASE_URL=https://your-hosted-demo.example npm test
```

## Folder structure

```text
pages/      Page objects
tests/      Test specs
utils/      Shared data and helpers
reports/    HTML and JUnit output
.github/    CI workflow
```

## Notes

DemoBlaze is a public demo app. The tests use stable ids, links, and visible text where possible.
