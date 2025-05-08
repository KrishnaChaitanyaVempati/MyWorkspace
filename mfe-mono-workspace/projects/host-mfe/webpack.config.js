const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "hostMfe",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

      // to avoid Uncaught SyntaxError: Unexpected token 'export' (at remoteEntry.js:3403:10)
      // library: { type: "module" },

      // For remotes (please adjust)
      // name: "hostMfe",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './projects/host-mfe/src/app/app.component.ts',
      // },        

      // For hosts (please adjust)
      remotes: {
        "mfe2": "mfe2@http://localhost:4300/remoteEntry.js",
        "mfe3": "mfe3@http://localhost:4400/remoteEntry.js",
        "mfe4": "mfe4@http://localhost:4500/remoteEntry.js",
        // "mfe5Webcomponent":"mfe5Webcomponent@http://localhost:4600/remoteEntry.js"

      },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
