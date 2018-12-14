const shell = require('shelljs');

console.log(process.cwd());

shell.cd('packages/ds');
shell.exec('npm run build --scripts-prepend-node-path');

shell.cd('../browser');
shell.exec('npm run build --scripts-prepend-node-path');

shell.cd('../native');
shell.exec('npm run build --scripts-prepend-node-path');

shell.cd('../primitives');
shell.exec('npm run build --scripts-prepend-node-path');

shell.cd('../ui');
shell.exec('npm run build --scripts-prepend-node-path');
