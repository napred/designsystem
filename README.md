
Napred Design-System

## Development

1. Start testing in watch mode (`yarn test:watch`)
2. Every component must have tests + visual tests (using puppeteer)
3. Profit

## How visual regression tests work

Under the hood are [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) and [puppeteer](https://github.com/GoogleChrome/puppeteer) used to create visual regression tests.
