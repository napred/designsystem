# Napred Design System

[![CircleCI](https://circleci.com/gh/napred/designsystem/tree/master.svg?style=svg&circle-token=d27d4754b61f1cf0079a1458f835deddc5868c6e)](https://circleci.com/gh/napred/designsystem/tree/master)

## Development

1. Start testing in watch mode (`yarn test:watch`)
2. Every component must have tests + visual tests (using puppeteer)
3. Profit

## How visual regression tests work

Under the hood are [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) and [puppeteer](https://github.com/GoogleChrome/puppeteer) used to create visual regression tests.
