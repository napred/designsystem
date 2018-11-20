const ora = require('ora');
const chalk = require('chalk');

const Bundles = require('./bundles');
const Packaging = require('./packaging');
const { asyncRimRaf, asyncExecuteCommand } = require('./utils');

const rollup = require('./rollup');

const { UNIVERSAL } = Bundles.bundleTypes;

const builders = {
  [UNIVERSAL]: rollup,
};

async function copyFlowTypes(name) {
  // Windows isn't supported in flow gen-flow-files
  if (process.platform === 'win32') return;

  const srcDir = `packages/${name}/src`;
  const outDir = `build/packages/${name}`;

  const msg = chalk.white.bold(`@napred/${name}`) + chalk.dim(` (flow types)`);
  const spinner = ora(msg).start();

  await asyncExecuteCommand(`yarn flow-copy-source -i *.test.js ${srcDir} ${outDir}`);
  spinner.succeed();
}

async function buildEverything() {
  await asyncRimRaf('build');

  // Run them serially for better console output
  // and to avoid any potential race conditions.
  for (const bundle of Bundles.bundles) {
    const builder = builders[bundle.type];
    if (!builder) {
      console.log('Unknown type');
      continue;
    }

    await builder(bundle);
    if (bundle.type === UNIVERSAL) {
      const name = bundle.entry.replace('@napred/', '');
      await copyFlowTypes(name);
    }
  }

  await Packaging.prepareNpmPackages();
}

buildEverything();
