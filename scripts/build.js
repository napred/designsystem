const shell = require('shelljs');

console.log(process.cwd());

shell.cd('packages/ds');
shell.exec('npm run build');

shell.cd('../browser');
shell.exec('npm run build');

shell.cd('../native');
shell.exec('npm run build');

shell.cd('../primitives');
shell.exec('npm run build');

shell.cd('../ui');
shell.exec('npm run build');

shell.cd('../storybook');
shell.exec('npm run storybook:build');
