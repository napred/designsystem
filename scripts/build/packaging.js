const { existsSync, readdirSync, unlinkSync } = require('fs');
const Bundles = require('./bundles');
const { asyncCopyTo, asyncExecuteCommand, asyncExtractTar, asyncRimRaf } = require('./utils');

const { UNIVERSAL } = Bundles.bundleTypes;
const NODE = '';
const NOOP = '';

function getPackageName(name) {
  return name.split('/', 2).reverse()[0];
}

function getBundleOutputPaths(bundleType, filename, packageName) {
  const name = getPackageName(packageName);
  const tfilename = filename.replace(/^@napred\//, '');

  switch (bundleType) {
    case NOOP:
    case NODE:
      return [`packages/${name}/dist/${tfilename}`];
    case UNIVERSAL:
      return [`packages/${name}/dist/cjs/${tfilename}`];
    // case UMD_DEV:
    // case UMD_PROD:
    //   return [
    //     `build/packages/${packageName}/umd/${filename}`,
    //     `build/dist/${filename}`
    //   ]
    default:
      throw new Error('Unknown bundle type.');
  }
}

function getTarOptions(tgzName, packageName) {
  // Files inside the `yarn pack`ed archive start
  // with "package/" in their paths. We'll undo
  // this during extraction.
  const CONTENTS_FOLDER = 'package';
  return {
    src: tgzName,
    dest: `packages/${packageName}/dist`,
    tar: {
      entries: [CONTENTS_FOLDER],
      map(header) {
        if (header.name.indexOf(`${CONTENTS_FOLDER}/`) === 0) {
          // eslint-disable-next-line
          header.name = header.name.substring(CONTENTS_FOLDER.length + 1);
        }
      },
    },
  };
}

async function prepareNpmPackage(name) {
  await Promise.all([
    asyncCopyTo('LICENSE', `packages/${name}/dist/LICENSE`),
    asyncCopyTo(`packages/${name}/package.json`, `packages/${name}/dist/package.json`),
    asyncCopyTo(`packages/${name}/README.md`, `packages/${name}/dist/README.md`),
    asyncCopyTo(`packages/${name}/npm`, `packages/${name}/dist`),
  ]);
  const tgzName = (await asyncExecuteCommand(`npm pack packages/${name}/dist`)).trim();
  await asyncRimRaf(`packages/${name}/dist`);
  await asyncExtractTar(getTarOptions(tgzName, name));
  unlinkSync(tgzName);
}

async function prepareNpmPackages() {
  if (!existsSync('packages')) {
    // We didn't build any npm packages.
    return;
  }
  const builtPackageFolders = readdirSync('packages').filter(dir => dir.charAt(0) !== '.');
  await Promise.all(builtPackageFolders.map(prepareNpmPackage));
}

module.exports = {
  getPackageName,
  getBundleOutputPaths,
  prepareNpmPackages,
};
