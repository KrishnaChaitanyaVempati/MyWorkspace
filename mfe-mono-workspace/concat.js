const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
    const projectName = process.argv.slice(2)[0];
    if (projectName === '' || projectName === undefined) {
        console.log("Please define project name");
    } else {
        const files = [
            // './dist/' + projectName + '/runtime.js',
            './dist/' + projectName + '/polyfills.js',
            // './dist/' + projectName + '/37.js',
            // './dist/' + projectName + '/181.js',
            // './dist/' + projectName + '/571.js',
            // './dist/' + projectName + '/577.js',
            // './dist/' + projectName + '/693.js',
            // './dist/' + projectName + '/777.js',
            // './dist/' + projectName + '/895.js',
            './dist/' + projectName + '/scripts.js',
            // './dist/' + projectName + './styles.js',
            './dist/' + projectName + '/remoteEntry.js',
            './dist/' + projectName + '/main.js',
            
        ];

        // mfe5-webcomponent-webcomponent.js
        await fs.ensureDir('./dist/' + projectName + '/elements');
        await concat(files, './dist/' + projectName + '/elements/' + projectName + '-webcomponent.js');
    }
})();