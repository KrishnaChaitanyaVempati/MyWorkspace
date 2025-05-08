const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
    const projectName = process.argv.slice(2)[0];
    if (projectName === '' || projectName === undefined) {
        console.log("Please define project name");
    } else {
        const files = [
            './dist/' + projectName + '/runtime.js',
            './dist/' + projectName + '/polyfills.js',
            './dist/' + projectName + '/scripts.js',
            // './dist/' + projectName + './styles.js',
            // './dist/' + projectName + '/remoteEntry.js',
            './dist/' + projectName + '/main.js',
            // './dist/' + projectName + '/vendor.js'
        ];

        // mfe-webcomponent.js
        await fs.ensureDir('./dist/' + projectName + '/elements');
        // await concat(files, './dist/' + projectName + '/elements/' + projectName + '.js');
        await concat(files, './dist/' + projectName + '/elements/' + projectName + '-v2.js');
    }
})();