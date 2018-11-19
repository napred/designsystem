# @atoto/ui-library [![CircleCI](https://circleci.com/gh/atotocz/ui-library/tree/master.svg?style=svg&circle-token=4769f526eb5b45c8f4ac90cee92788363f5bfe07)](https://circleci.com/gh/atotocz/ui-library/tree/master)

Atoto's Design system component ([https://design-system.staging.atoto.cz](https://design-system.staging.atoto.cz))

## Install

```console
# latest version
yarn add git+ssh://git@github.com/atotocz/ui-library.git

# specific version
yarn add git+ssh://git@github.com/atotocz/ui-library.git#v1.0.0
```

## Development

1. Start testing in watch mode (`yarn test:watch`)
2. Every component must have tests + visual tests (using puppeteer)
3. Profit

## How visual regression tests work

Under the hood are [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) and [puppeteer](https://github.com/GoogleChrome/puppeteer) used to create visual regression tests.
