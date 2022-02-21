# Checkout E2E Testing Demo
Provide a mock checkout environment for conducting e2e tests in a headless browser.

# Requirements
Almost the same as the `checkout-js`. The testing framework is [Playwright](https://playwright.dev/).

* Node >= v12 (vs `checkout-js` Node >= 10).
* NPM >= v6.

# Installation
Once you have cloned the repository, run `npm install` first, then `npx playwright install`.

# Run Demo Tests

Before each test run, Playwright will automatically launch an Express.js server.

Two demo tests available now: 

- Checkout should be loaded ([checkout.spec.ts#L30](https://github.com/bc-peng/checkout-e2e-testing-demo/blob/8d2652eb7e8c6f4956e0d4ca9feae85a80de4df9/tests/checkout.spec.ts#L30)).
- Checkout should be at the payment step ([checkout.spec.ts#L34](https://github.com/bc-peng/checkout-e2e-testing-demo/blob/8d2652eb7e8c6f4956e0d4ca9feae85a80de4df9/tests/checkout.spec.ts#L34)).

To run them in a headless browser:

`npx playwright test checkout`

To see tests in a browser:

Uncomment [this line](https://github.com/bc-peng/checkout-e2e-testing-demo/blob/8d2652eb7e8c6f4956e0d4ca9feae85a80de4df9/tests/checkout.spec.ts#L5), then run `npx playwright test checkout`.

# Make Screenshots

Creating a screenshot in a headless browser is a fantastic feature of `Playwright`.

A demo test run will create three screenshots. You may make your own screenshots inside [the demo tests](https://github.com/bc-peng/checkout-e2e-testing-demo/blob/8d2652eb7e8c6f4956e0d4ca9feae85a80de4df9/tests/checkout.spec.ts#L38) by using Playwright's [screenshot()](https://playwright.dev/docs/screenshots) method.
